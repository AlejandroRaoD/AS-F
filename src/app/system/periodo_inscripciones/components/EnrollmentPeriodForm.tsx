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

const EnrollmentPeriodForm = (props: props) => {
	const { data, redirect } = props;

	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const {
		createEnrollmentPeriod,
		updateEnrollmentPeriod,
		deleteEnrollmentPeriod,
	} = useEnrollmentPeriod();

	const formik = useFormik({
		initialValues: data || {
			year: new Date().getFullYear(),
			step: 1,
		},
		validationSchema: yup.object({
			year: yup.number().min(new Date().getFullYear()),
			step: yup.number().min(1),
		}),
		onSubmit: async (formData: enrollmentPeriodAttributes) => {
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
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="grid grid-cols-2 gap-2">
					<Input
						labelTitle="Año"
						name="year"
						onChange={formik.handleChange}
						value={formik.values.year}
						error={formik.errors.year}
					/>

					<Input
						labelTitle="Período"
						name="step"
						onChange={formik.handleChange}
						value={formik.values.step}
						error={formik.errors.step}
					/>
				</div>

				<Button type="submit"> Guardar</Button>
				{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
			</form>
		</>
	);
};

export default EnrollmentPeriodForm;
