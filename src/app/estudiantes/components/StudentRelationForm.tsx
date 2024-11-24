"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import useStudentRelation from "../hooks/useStudentRelation";
import { CreateStudentRepresentativeDto } from "../dto/create-student-representative.dto";
import Button from "@/app/common/components/Button";

interface props {
	studentId: string;
	// redirect?: string;
}

const StudentRelationForm = (props: props) => {
	const { studentId } = props;
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { createStudentRelation } = useStudentRelation();

	const formik = useFormik({
		initialValues: {
			representativeCI: "",
			studentId: studentId,
			familyBond: "",
		},
		validationSchema: yup.object({
			representativeCI: yup.string(),
			studentId: yup.string(),
			familyBond: yup.string().trim().min(3),
		}),
		onSubmit: async (formData: CreateStudentRepresentativeDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				await createStudentRelation(formData);
			} catch (error) {
				axiosErrorHandle(error);
			}

			setIsSubmiting(false);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				labelTitle="Cedula de representante"
				name="representativeCI"
				onChange={formik.handleChange}
				value={formik.values.representativeCI}
				error={formik.errors.representativeCI}
			/>

			<Input
				labelTitle="Relacion con el estudiante"
				name="familyBond"
				onChange={formik.handleChange}
				value={formik.values.familyBond}
				error={formik.errors.familyBond}
			/>

			<Button type="submit"> Guardar</Button>
		</form>
	);
};

export default StudentRelationForm;
