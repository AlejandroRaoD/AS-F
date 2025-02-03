"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Button from "@/app/common/components/Button";
import useStudentRelation from "../hooks/useStudentRelation";
import { CreateStudentRelationDto } from "../dto/create-student-relation.dto";
import Title from "@/app/common/components/Title";
import useRepresentative from "../../representantes/hooks/useRepresentative";
import SearchIcon from "@/app/common/components/icons/SearchIcon";
import IconButton from "@/app/common/components/IconButton";
import TextValue from "@/app/common/components/TextValue";

interface props {
	studentId: string;
	// redirect?: string;
}

const StudentRelationForm = (props: props) => {
	const { studentId } = props;
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { createStudentRelation } = useStudentRelation();
	const { representatives, getRepresentatives } = useRepresentative();

	const formik = useFormik({
		initialValues: {
			representativeId: "",
			studentId: studentId,
			familyBond: "",
		},
		validationSchema: yup.object({
			representativeCI: yup.string().trim().min(1),
			studentId: yup.string().trim(),
			familyBond: yup.string().trim().min(3),
		}),
		onSubmit: async (formData: CreateStudentRelationDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			formData.representativeId = representatives[0]._id;

			try {
				await createStudentRelation(formData);
				window.location.reload();
			} catch (error) {
				axiosErrorHandle(error);
			}

			setIsSubmiting(false);
		},
	});

	const [InputCI, setInputCI] = useState<string>("");
	const onChangeCI = (str: string) => setInputCI(str);

	const queryRepresentative = async () => {
		await getRepresentatives({ CI: InputCI });
	};

	return (
		<>
			<div className="flex items-center">
				<Title titleType="h2">Añadir Relacion</Title>

				<form
					className="ml-auto flex"
					onSubmit={(e) => {
						e.preventDefault();
						queryRepresentative();
					}}
				>
					<Input
						placeholder="Cedula de representante"
						containerClassName="mb-0"
						name="ci"
						value={InputCI}
						onChange={(e) => onChangeCI(e.target.value)}
					/>

					<IconButton type="submit" onClick={queryRepresentative}>
						<SearchIcon />
					</IconButton>
				</form>
			</div>

			{representatives[0] && (
				<Input
					labelTitle="Nombre Completo"
					name="Nombre"
					readOnly
					value={`${representatives[0].name} ${representatives[0].lastname}`}
				/>
			)}
			<form onSubmit={formik.handleSubmit}>
				<Input
					labelTitle="Relacion con el estudiante"
					name="familyBond"
					onChange={(e) => formik.setFieldValue("familyBond", e.target.value.toUpperCase())}
					value={formik.values.familyBond}
					error={formik.errors.familyBond}
				/>

				<Button type="submit"> Guardar</Button>
			</form>
		</>
	);
};

export default StudentRelationForm;
