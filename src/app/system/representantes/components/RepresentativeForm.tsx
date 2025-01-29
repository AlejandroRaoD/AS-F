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

	const handleDeleteButton = async () => {
		if (!data) return;
		try {
			await deleteRepresentative(data._id);
			router.push(RouterLinks.representante.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
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
			</div>

			<div className="grid gap-2 grid-cols-1 lg:grid-cols-6">
				<Select
					labelTitle="Nacionalidad"
					dataList={Object.values(Nationality).map((v) => ({
						title: v,
						value: v,
					}))}
					containerClassName="col-span-1"
					name="nationality"
					onChange={formik.handleChange}
					value={formik.values.nationality}
					error={formik.errors.nationality}
				/>

				<Input
					containerClassName="col-span-2"
					labelTitle="Cédula"
					type="number"
					name="CI"
					onChange={formik.handleChange}
					value={formik.values.CI}
					error={formik.errors.CI}
				/>

				<Input
					containerClassName="col-span-3"
					labelTitle="Email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.errors.email}
				/>
			</div>
			
			<InputTagArray
				labelTitle="Teléfono"
				name="phone_number"
				type="number"
				dataList={phoneNumberArr}
				changeArray={changePhoneArr}
			/>

			<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
				<InputDate
					labelTitle="Fecha de Nacimiento"
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
					labelTitle="Género"
					dataList={Object.values(Gender).map((v) => ({
						title: v,
						value: v,
					}))}
					name="gender"
					onChange={formik.handleChange}
					value={formik.values.gender}
					error={formik.errors.gender}
				/>
			</div>
			<Input
				labelTitle="Dirección"
				name="address"
				onChange={formik.handleChange}
				value={formik.values.address}
				error={formik.errors.address}
			/>

			<Input
				labelTitle="Trabajo"
				name="job"
				onChange={formik.handleChange}
				value={formik.values.job}
				error={formik.errors.job}
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

export default RepresentativeForm;
