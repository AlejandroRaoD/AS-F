"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import { CreateSedeDto, sedeAttributes } from "@/types";
import Input from "@/app/common/components/Input";
import useSede from "../hooks/useSede";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import Select from "@/app/common/components/Select";
import useNucleo from "@/app/nucleos/hooks/useNucleo";

interface props {
	data?: sedeAttributes;
	redirect?: string;
}

const SedeForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { nucleos, getNucleos } = useNucleo();
	const { createSede, updateSede, deleteSede } = useSede();

	useEffect(() => {
		getNucleos();
	}, []);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			address: "",
			phone_number: [""],
			nucleoId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3, "debe tener minimo 3 letras"),
			address: yup.string().min(3, "debe tener minimo 3 letras"),
			phone_number: yup.string().min(10, "debe tener minimo 10 numeros"),
			nucleoId: yup.string(),
		}),
		onSubmit: async (formData: CreateSedeDto) => {
			if (isSubmiting) return;

			setIsSubmiting(true);

			try {
				if (data) await updateSede(data._id, formData);
				else await createSede(formData);

				if (redirect) router.push(redirect);
			} catch (error) {
				console.log(error);
			}
			setIsSubmiting(false);
		},
	});

	const handleDeleteButton = () => {
		if (!data) return;
		try {
			deleteSede(data._id);
			router.push(RouterLinks.nucleos.all);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				labelTitle="Nombre de la sede"
				name="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				error={formik.errors.name}
			/>

			<Input
				labelTitle="direccionnnnn"
				name="address"
				onChange={formik.handleChange}
				value={formik.values.address}
				error={formik.errors.address}
			/>

			<Input
				labelTitle="Telefono"
				name="phone_number"
				type="number"
				onChange={formik.handleChange}
				value={formik.values.phone_number}
				error={formik.errors.phone_number}
			/>

			<Select
				labelTitle="Nucleo"
				dataList={nucleos.map((n) => ({ title: n.name, value: n._id }))}
				name="nucleoId"
				onChange={formik.handleChange}
				value={formik.values.nucleoId}
				error={formik.errors.nucleoId}
			/>

			<Button type="submit"> Guardar</Button>

			{data && (
				<Button type="button" onClick={handleDeleteButton}>
					Eliminar
				</Button>
			)}
		</form>
	);
};

export default SedeForm;
