"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useStudent from "../hooks/useStudent";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import InputTagArray from "@/app/common/components/InputTagArray";
import Select from "@/app/common/components/Select";
import { Gender, Nationality } from "@/app/common/interfaces/enums";
import InputDate from "@/app/common/components/InputDate";
import { studentAttributes } from "../interfaces/student.interface";

interface props {
	data?: studentAttributes;
	redirect?: string;
}

const StudentForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	// const { nucleos, getNucleos } = useNucleo();
	const { createStudent, updateStudent, deleteStudent } = useStudent();

	const [phoneNumberArr, setPhoneNumberArr] = useState<string[]>([]);
	const changePhoneArr = (arr: string[]) => setPhoneNumberArr(arr);

	useEffect(() => {
		if (data) changePhoneArr(data.phone_number);
	}, [data]);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			lastname: "",
			birthday: null,
			nationality: Nationality.Venezuelan,
			CI: "",
			email: "",
			gender: Gender.Masculine,
			address: "",
			phone_number: "",
			hasInstrument: false,
		},
		validationSchema: yup.object({
			name: yup.string().min(3, "debe tener minimo 3 letras"),
			address: yup.string().min(3, "debe tener minimo 3 letras"),
			phone_number: yup.array(),
		}),
		onSubmit: async (formData: studentAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			formData.phone_number = phoneNumberArr;

			if (!formData.email) delete formData.email;

			try {
				if (data) await updateStudent(data._id, formData);
				else await createStudent(formData);

				if (redirect) router.push(redirect);
			} catch (error) {
				axiosErrorHandle(error);
			}
			setIsSubmiting(false);
		},
	});

	const handleDeleteButton = async () => {
		if (!data) return;
		try {
			await deleteStudent(data._id);
			router.push(RouterLinks.estudiantes.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				labelTitle="Nombre del estudiante"
				name="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				error={formik.errors.name}
			/>
			<Input
				labelTitle="Apellido del estudiante"
				name="lastname"
				onChange={formik.handleChange}
				value={formik.values.lastname}
				error={formik.errors.lastname}
			/>
			<Select
				labelTitle="nacionalidad"
				dataList={Object.values(Nationality).map((v) => ({
					title: v,
					value: v,
				}))}
				name="nationality"
				onChange={formik.handleChange}
				value={formik.values.nationality}
				error={formik.errors.nationality}
			/>
			<Input
				labelTitle="Cedula"
				type="number"
				name="CI"
				onChange={formik.handleChange}
				value={formik.values.CI}
				error={formik.errors.CI}
			/>
			<InputDate
				labelTitle="Fecha de nacimiento"
				name="birthday"
				onChange={(value) => {
					formik.setFieldValue("birthday", value.startDate);
				}}
				value={{
					startDate: formik.values.birthday,
					endDate: formik.values.birthday,
				}}
				// error={formik.errors.birthday}
			/>
			<Input
				labelTitle="email"
				name="email"
				onChange={formik.handleChange}
				value={formik.values.email}
				error={formik.errors.email}
			/>
			<Select
				labelTitle="genero"
				dataList={Object.values(Gender).map((v) => ({
					title: v,
					value: v,
				}))}
				name="gender"
				onChange={formik.handleChange}
				value={formik.values.gender}
				error={formik.errors.gender}
			/>
			<Input
				labelTitle="dirección"
				name="address"
				onChange={formik.handleChange}
				value={formik.values.address}
				error={formik.errors.address}
			/>
			<InputTagArray
				labelTitle="Telefono"
				name="phone_number"
				type="number"
				dataList={phoneNumberArr}
				changeArray={changePhoneArr}
			/>
			<div className="grid grid-cols-2 gap-2">
				<Button type="submit">Guardar</Button>

				{data && (
					<Button variant="error-outline" onClick={handleDeleteButton}>
						Eliminar
					</Button>
				)}
			</div>
		</form>
	);
};

export default StudentForm;
