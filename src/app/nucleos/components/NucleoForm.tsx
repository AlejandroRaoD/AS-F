"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import { nucleoAttributes } from "@/types";
import Input from "@/app/common/components/Input";
import useNucleo from "../hooks/useNucleo";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";

interface props {
	data?: nucleoAttributes;
	redirect?: string;
}

const NucleoForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { createNucleo, updateNucleo, deleteNucleo } = useNucleo();

	const formik = useFormik({
		initialValues: data || { name: "" },
		validationSchema: yup.object({
			name: yup.string().min(3, "debe tener minimo 3 letras"),
		}),
		onSubmit: async (formData: Pick<nucleoAttributes, "name">) => {
			if (isSubmiting) return;

			setIsSubmiting(true);

			try {
				if (data) await updateNucleo(data._id, formData);
				else await createNucleo(formData);

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
			deleteNucleo(data._id);
			router.push(RouterLinks.nucleos.all);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				labelTitle="Nombre de nucleo"
				name="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				error={formik.errors.name}
			/>

			<Button type="submit">Guardar</Button>

			{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
		</form>
	);
};

export default NucleoForm;
