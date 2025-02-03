"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useEnrollmentPeriod from "../hooks/useEnrollmentPeriod";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import { enrollmentPeriodAttributes } from "../interfaces/enrollmentPeriod.interface";

interface props {
	data?: enrollmentPeriodAttributes;
	redirect?: string;
}

const EnrollmentPeriodForm = ({ data, redirect }: props) => {
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { createEnrollmentPeriod, updateEnrollmentPeriod, deleteEnrollmentPeriod } = useEnrollmentPeriod();

	const currentYear = new Date().getFullYear(); // Año fijo

	const formik = useFormik({
		initialValues: {
			year: currentYear,
			step: data?.step || 1,
		},
		validationSchema: yup.object({
			step: yup.number().min(1).required("Selecciona un período"),
		}),
		onSubmit: async (formData) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateEnrollmentPeriod(data._id, formData);
				else await createEnrollmentPeriod(formData);

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
			await deleteEnrollmentPeriod(data._id);
			router.push(RouterLinks.enrollmentPeriod.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="grid grid-cols-2 gap-2">
				{/* Campo de Año (Solo lectura) */}
				<Input
					labelTitle="Año"
					name="year"
					value={currentYear}
					readOnly
				/>

				{/* Select para el Período */}
				<div>
					<label className="block text-sm font-medium text-gray-700">Período</label>
					<select
						name="step"
						value={formik.values.step}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					>
						<option value={1}>Período 1</option>
						<option value={2}>Período 2</option>
						<option value={3}>Período 3</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-2 mt-4">
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

export default EnrollmentPeriodForm;
