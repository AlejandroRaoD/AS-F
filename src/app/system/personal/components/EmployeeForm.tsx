"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useEmployee from "../hooks/useEmployee";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Select from "@/app/common/components/Select";
import {
	BusinessPosition,
	employeeAttributes,
} from "../interfaces/employee.interface";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useSede from "../../sedes/hooks/useSede";
import { Gender, Nationality } from "@/app/common/interfaces/enums";
import InputDate from "@/app/common/components/InputDate";
import InputTagArray from "@/app/common/components/InputTagArray";

interface props {
	data?: employeeAttributes;
	redirect?: string;
}

const EmployeeForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { createEmployee, updateEmployee, deleteEmployee } = useEmployee();

	const [phoneNumberArr, setPhoneNumberArr] = useState<string[]>([]);
	const changePhoneArr = (arr: string[]) => setPhoneNumberArr(arr);

	useEffect(() => {
		getNucleos();
		if (data) getSedes();
	}, []);

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
			phone_number: [],
			businessPosition: "",
			sedeId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3),
			lastname: yup.string().min(3),
			CI: yup.string().min(3),
			email: yup.string().email(),
			address: yup.string().min(3, "debe tener minimo 3 letras"),
			phone_number: yup.array(),
			businessPosition: yup.string().min(2),
			sedeId: yup.string().min(3),
		}),
		onSubmit: async (formData: employeeAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			formData.phone_number = phoneNumberArr;
			
			try {
				if (data) await updateEmployee(data._id, formData);
				else await createEmployee(formData);

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
			deleteEmployee(data._id);
			router.push(RouterLinks.employee.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
					<Select
						labelTitle="nucleo"
						dataList={nucleos.map(({ _id, name }) => ({
							title: name,
							value: _id,
						}))}
						name="nucleos"
						onChange={async ({ target: { value } }) => {
							// e.preventDefault()

							await getSedes({ nucleoId: value });

							formik.setFieldValue("sedeId", "");
						}}
					/>

					<Select
						labelTitle="sede"
						dataList={sedes.map(({ _id, name }) => ({
							title: name,
							value: _id,
						}))}
						name="sedeId"
						onChange={formik.handleChange}
						value={formik.values.sedeId}
						error={formik.errors.sedeId}
					/>
				</div>

				<Select
					labelTitle="Tipo de personal"
					dataList={Object.values(BusinessPosition).map((v) => ({
						title: v,
						value: v,
					}))}
					name="businessPosition"
					onChange={formik.handleChange}
					value={formik.values.businessPosition}
					error={formik.errors.businessPosition}
				/>

				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
					<Input
						labelTitle="Nombre"
						name="name"
						onChange={formik.handleChange}
						value={formik.values.name}
						error={formik.errors.name}
					/>

					<Input
						labelTitle="Apellido"
						name="lastname"
						onChange={formik.handleChange}
						value={formik.values.lastname}
						error={formik.errors.lastname}
					/>
				</div>

				<div className="grid gap-2 grid-cols-1 lg:grid-cols-6">
					<Select
						labelTitle="nacionalidad"
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
						labelTitle="Cedula"
						type="number"
						name="CI"
						onChange={formik.handleChange}
						value={formik.values.CI}
						error={formik.errors.CI}
					/>

					<Input
						containerClassName="col-span-3"
						labelTitle="email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.errors.email}
					/>
				</div>

				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
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
				</div>

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

				<Button type="submit"> Guardar</Button>
				{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
			</form>
		</>
	);
};

export default EmployeeForm;
