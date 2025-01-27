"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import { CreateUserDto } from "../dto/create-user.dto";
import useEmployee from "../../personal/hooks/useEmployee";
import { UserAttributes } from "../interfaces/user.interface";
import useUser from "../hook/useUser";
import SimpleSearch from "@/app/common/components/SimpleSearch";

import UserPermissionsList from "./UserPermissionsList";

interface props {
	data?: UserAttributes;
	redirect?: string;
}

const UserForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const { employee, employees, getEmployees, getEmployee } = useEmployee();
	const { createUser, updateUser, deleteUser } = useUser();

	useEffect(() => {
		if (data) getEmployee(data.employeeId);
	}, []);

	const formik = useFormik({
		initialValues: data
			? { ...data, password: "" }
			: {
					email: "",
					password: "",
					employeeId: "",
					permissions: [],
			  },
		validationSchema: yup.object({
			email: yup.string().email(),
			password: yup.string().min(8, "debe tener minimo 8 caracteres"),
			employeeId: yup.string().min(3),
			permissions: yup.array(),
		}),
		onSubmit: async (formData: CreateUserDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			if (data && !formData.password.trim()) delete formData.password;

			try {
				if (data) await updateUser(data._id, formData);
				else await createUser(formData);

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
			await deleteUser(data._id);
			router.push(RouterLinks.users.all);
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmitQuery = async (CI: string) => {
		const queryResult = await getEmployees({ CI });

		if (!queryResult.length) return formik.resetForm();

		const employeeData = queryResult[0];

		formik.setValues({
			...formik.values,
			email: employeeData.email,
			employeeId: employeeData._id,
		});
	};
	const onClearQuery = async () => getEmployees();

	const setPermissions = (array: string[]) =>
		formik.setFieldValue("permissions", array);

	const [openPassword, setOpenPassword] = useState(false);

	return (
		<>
			<SimpleSearch
				placeholder="Buscar por cédula"
				onSubmit={onSubmitQuery}
				onClear={onClearQuery}
			/>

			<form onSubmit={formik.handleSubmit}>
				<Input
					labelTitle="Nombre"
					name="name"
					value={
						employees[0]
							? `${employees[0].name} ${employees[0].lastname}`
							: employee
							? `${employee.name} ${employee.lastname}`
							: ""
					}
					readOnly
				/>

				<Input
					labelTitle="Correo"
					name="email"
					value={formik.values.email}
					readOnly
				/>

				<Input
					labelTitle="Contraseña"
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					error={formik.errors.password}
					readOnly={data && !openPassword}
					onClick={() => setOpenPassword(true)}
				/>

				<UserPermissionsList
					value={formik.values.permissions}
					setValue={setPermissions}
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
		</>
	);
};

export default UserForm;
