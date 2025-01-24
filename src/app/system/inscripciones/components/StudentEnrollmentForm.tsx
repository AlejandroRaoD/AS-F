"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";

import useStudentEnrollment from "../hooks/useStudentEnrollment";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Select from "@/app/common/components/Select";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useSede from "../../sedes/hooks/useSede";
import useStudent from "../../estudiantes/hooks/useStudent";
import {
	EnrollmentContent,
	studentEnrollmentAttributes,
} from "../interfaces/studentEnrollment.interface";
import useEnrollmentPeriod from "../../periodo_inscripciones/hooks/useEnrollmentPeriod";
import useCatedra from "../../catedra/hook/useCatedra";
import usePrograma from "../../programas/hook/useProgramas";
import SectionContainer from "@/app/common/components/SectionContainer";
import Title from "@/app/common/components/Title";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import CatedraEnrollmentItem from "./CatedraEnrollmentItem";
import Spacer from "@/app/common/components/Spacer";

interface props {
	data?: studentEnrollmentAttributes;
	redirect?: string;
}

const StudentEnrollmentForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { enrollmentPeriods, getEnrollmentPeriods } = useEnrollmentPeriod();
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { students, getStudents } = useStudent();
	const { catedras, getCatedras, getCatedrasOfThisPrograms } = useCatedra();
	const { programas, getProgramas } = usePrograma();

	const {
		createStudentEnrollment,
		updateStudentEnrollment,
		deleteStudentEnrollment,
	} = useStudentEnrollment();

	useEffect(() => {
		getEnrollmentPeriods();
		getNucleos();
		getStudents();

		if (data) {
			getSedes().then(async (d) => {
				const programs = await getProgramas({ sedeId: data.sedeId });
				await getCatedrasOfThisPrograms(programs.map((i) => i._id));
			});
		}
	}, []);

	const formik = useFormik({
		initialValues: data || {
			studentId: "",
			enrollmentPeriodId: "",
			sedeId: "",
			content: new Array<EnrollmentContent>(),
		},
		validationSchema: yup.object({
			studentId: yup.string().min(1),
			enrollmentPeriodId: yup.string().min(1),
			sedeId: yup.string().min(1),
			content: yup.array().min(1),
		}),
		onSubmit: async (formData: studentEnrollmentAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateStudentEnrollment(data._id, formData);
				else await createStudentEnrollment(formData);

				if (redirect) router.push(redirect);
			} catch (error) {
				axiosErrorHandle(error);
			}
			setIsSubmiting(false);
		},
	});

	const [catedraSelect, setCatedraSelect] = useState("");

	const addCatedra = () => {
		if (!catedraSelect.trim()) return;

		const contentInscription = formik.values.content;

		const lastSelected = contentInscription.find(
			(i) => i.catedraId == catedraSelect
		);

		if (lastSelected)
			return toast.error("No se puede añadir dos veces la misma cátedra");

		formik.setFieldValue("content", [
			...contentInscription,
			{ catedraId: catedraSelect, comodatoId: null },
		]);
	};

	const onDeleteCatedra = (id: string) => {
		const contentInscription = formik.values.content.filter(
			(item) => item.catedraId != id
		);

		formik.setFieldValue("content", contentInscription);
	};

	const handleDeleteButton = () => {
		if (!data) return;
		try {
			deleteStudentEnrollment(data._id);
			router.push(RouterLinks.studentEnrollment.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Select
					labelTitle="Núcleo"
					dataList={nucleos.map(({ _id, name }) => ({
						title: name,
						value: _id,
					}))}
					name="nucleos"
					onChange={async ({ target: { value } }) => {
						await getSedes({ nucleoId: value });
					}}
				/>

				<Select
					labelTitle="Sede"
					dataList={sedes.map(({ _id, name }) => ({
						title: name,
						value: _id,
					}))}
					name="sedeId"
					onChange={(e) => {
						formik.handleChange(e);
						getProgramas({ sedeId: e.target.value });
					}}
					value={formik.values.sedeId}
					error={formik.errors.sedeId}
				/>

				<Select
					labelTitle="Períodos"
					dataList={enrollmentPeriods.map(({ _id, year, step }) => ({
						title: `${year}-${step}`,
						value: _id,
					}))}
					name="enrollmentPeriodId"
					onChange={formik.handleChange}
					value={formik.values.enrollmentPeriodId}
					error={formik.errors.enrollmentPeriodId}
				/>

				<Select
					labelTitle="Estudiante"
					dataList={students.map(
						({ _id, name, lastname, CI, nationality }) => ({
							title: `${nationality}-${CI}  ${name} ${lastname}`,
							value: _id,
						})
					)}
					name="studentId"
					onChange={formik.handleChange}
					value={formik.values.studentId}
					error={formik.errors.studentId}
				/>

				<SectionContainer>
					<Title titleType="h2">Catedras inscritas</Title>

					{formik.values.content.map((item) => (
						<CatedraEnrollmentItem
							key={item.catedraId}
							data={item}
							onDelete={() => {
								onDeleteCatedra(item.catedraId);
							}}
						/>
					))}

					<Spacer />

					<div className="flex ">
						<Select
							containerClassName="flex-1 mr-2"
							labelTitle="Programa"
							dataList={programas.map(({ _id, name }) => ({
								title: name,
								value: _id,
							}))}
							name="programaId"
							onChange={({ target: { value } }) => {
								getCatedras({ programaId: value });
							}}
							// value={formik.values.studentId}
						/>

						<Select
							containerClassName="flex-1"
							labelTitle="Catedra"
							dataList={catedras.map(({ _id, name }) => ({
								title: name,
								value: _id,
							}))}
							name="catedraId"
							onChange={({ target: { value } }) => {
								setCatedraSelect(value);
							}}
							value={catedraSelect}
						/>

						<IconButton variant="primary" onClick={addCatedra}>
							<PlusIcon />
						</IconButton>
					</div>
				</SectionContainer>

				<Button type="submit"> Guardar</Button>
				{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
			</form>
		</>
	);
};

export default StudentEnrollmentForm;
