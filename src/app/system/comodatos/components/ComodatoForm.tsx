"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useComodato from "../hooks/useComodato";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Select from "@/app/common/components/Select";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useSede from "../../sedes/hooks/useSede";
import { ComodatoAttributes } from "../interfaces/comodato.interface";
import useInstrument from "../../instrumentos/hooks/useInstrument";
import useStudent from "../../estudiantes/hooks/useStudent";
import InputDate from "@/app/common/components/InputDate";

interface props {
	data?: ComodatoAttributes;
	redirect?: string;
}

const ComodatoForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { instruments, getInstruments } = useInstrument();
	const { students, getStudents } = useStudent();
	const { createComodato, updateComodato, deleteComodato } = useComodato();

	useEffect(() => {
		getNucleos();
		getStudents();

		if (data) {
			getSedes();
			getInstruments();
		}
	}, []);

	const formik = useFormik({
		initialValues: data || {
			instrumentId: "",
			studentId: "",
			initDate: "",
			endDate: "",
			contractNumber: "",
		},
		validationSchema: yup.object({
			instrumentId: yup.string().min(3),
			studentId: yup.string().min(3),
			initDate: yup.date(),
			endDate: yup.date(),
			contractNumber: yup.string().min(1),
		}),
		onSubmit: async (formData: ComodatoAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateComodato(data._id, formData);
				else await createComodato(formData);

				if (redirect) router.push(redirect);
			} catch (error) {
				axiosErrorHandle(error);
			}
			setIsSubmiting(false);
		},
	});

	const handleDeleteButton = () => {
		if (!data) return;
		try {
			deleteComodato(data._id);
			router.push(RouterLinks.comodato.all);
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
					name="sede"
					onChange={async ({ target: { value } }) => {
						await getInstruments({ sedeId: value });
						formik.setFieldValue("instrumentId", "");
					}}
				/>

				<Select
					labelTitle="Instrumento"
					dataList={instruments.map(({ _id, name, serialNumber }) => ({
						title: `${serialNumber} - ${name}`,
						value: _id,
					}))}
					name="instrumentId"
					onChange={formik.handleChange}
					value={formik.values.instrumentId}
					error={formik.errors.instrumentId}
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

				<InputDate
					labelTitle="Duración del comodato"
					name="dates"
					onChange={(value) => {
						formik.setFieldValue("initDate", value.startDate);
						formik.setFieldValue("endDate", value.endDate);
					}}
					value={{
						startDate: new Date(formik.values.initDate),
						endDate: new Date(formik.values.endDate),
					}}
					asSingle={false}
					// error={formik.errors.birthday}
				/>

				<Input
					labelTitle="N° contrato"
					name="contractNumber"
					onChange={formik.handleChange}
					value={formik.values.contractNumber}
					error={formik.errors.contractNumber}
				/>

				<Button type="submit"> Guardar</Button>
				{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
			</form>
		</>
	);
};

export default ComodatoForm;
