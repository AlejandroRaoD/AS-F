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
			<div>
				<Title>buscar representante</Title>

				<Input
					labelTitle="Cedula de representante"
					name="ci"
					value={InputCI}
					onChange={(e) => onChangeCI(e.target.value)}
				/>

				<Button onClick={queryRepresentative}>Buscar</Button>
			</div>

			<form onSubmit={formik.handleSubmit}>
				{representatives[0] && (
					<p>
						<div>
							{representatives[0].name} {representatives[0].lastname}
						</div>

						<div>
							{representatives[0].nationality}-{representatives[0].CI}
						</div>
					</p>
				)}

				<Input
					labelTitle="Relacion con el estudiante"
					name="familyBond"
					onChange={formik.handleChange}
					value={formik.values.familyBond}
					error={formik.errors.familyBond}
				/>

				<Button type="submit"> Guardar</Button>
			</form>
		</>
	);
};

export default StudentRelationForm;
