"use client";

import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

import useAuth from "../../hook/useAuth";
import Button from "@/app/common/components/Button";
import Input from "@/app/common/components/Input";
import { LoginDto } from "../../dto/login.dto";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import { Toaster } from "react-hot-toast";

export default function Page() {
	const { singIn } = useAuth({
		autoRedirect: false,
		autoLogin: false,
	});

	const [isSubmiting, setIsSubmiting] = useState(false);

	const formik = useFormik<LoginDto>({
		initialValues: { email: "", password: "" },

		validationSchema: yup.object({
			email: yup
				.string()
				.required("Coloque el correo")
				.email("Debe ser un correo"),
			password: yup
				.string()
				.required("Coloque la Contraseña")
				.min(8, "Debe contener 8 caracteres"),
		}),

		onSubmit: async (formData: LoginDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				await singIn(formData, RouterLinks.dashboard);
			} catch (error) {
				axiosErrorHandle(error);
			}
			setIsSubmiting(false);
		},
	});

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold text-center mb-4">Iniciar sesión</h2>

				<form onSubmit={formik.handleSubmit} className="space-y-4">
					<Input
						labelTitle="Correo electrónico"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.errors.email}
					/>

					<Input
						labelTitle="Contraseña"
						name="password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.errors.password}
					/>

					<Button type="submit" variant="primary" className="w-full">
						Iniciar sesión
					</Button>
				</form>
			</div>
			<Toaster />
		</div>
	);
}
