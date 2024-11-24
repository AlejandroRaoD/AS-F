"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useRepresentative from "../hooks/useRepresentative";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import InputTagArray from "@/app/common/components/InputTagArray";
import Select from "@/app/common/components/Select";
import { Gender, Nationality } from "@/app/common/interfaces/enums";
import Datepicker from "react-tailwindcss-datepicker";
import InputDate from "@/app/common/components/InputDate";
import { representativeAttributes } from "../interfaces/representative.interface";

interface props {
	data?: representativeAttributes;
	redirect?: string;
}

const RepresentativeForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	// const { nucleos, getNucleos } = useNucleo();
	const { createRepresentative, updateRepresentative, deleteRepresentative } =
		useRepresentative();

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
			job: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3, "debe tener minimo 3 letras"),
			address: yup.string().min(3, "debe tener minimo 3 letras"),
			phone_number: yup.array(),
		}),
		onSubmit: async (formData: representativeAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			formData.phone_number = phoneNumberArr;

			try {
				if (data) await updateRepresentative(data._id, formData);
				else await createRepresentative(formData);

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
			deleteRepresentative(data._id);
			router.push(RouterLinks.estudiantes.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				labelTitle="Nombre del representante"
				name="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				error={formik.errors.name}
			/>

			<Input
				labelTitle="Apellido del representante"
				name="lastname"
				onChange={formik.handleChange}
				value={formik.values.lastname}
				error={formik.errors.lastname}
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
				labelTitle="direccion"
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

			<Input
				labelTitle="Trabajo"
				name="job"
				onChange={formik.handleChange}
				value={formik.values.job}
				error={formik.errors.job}
			/>

			<Button type="submit"> Guardar</Button>
			{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
		</form>
	);
};

export default RepresentativeForm;