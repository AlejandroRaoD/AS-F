"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useComodato from "../hooks/useComodato";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Select from "@/app/common/components/Select";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useSede from "../../sedes/hooks/useSede";
import { ComodatoAttributes } from "../interfaces/comodato.interface";

interface props {
	data?: ComodatoAttributes;
	redirect?: string;
}

const ComodatoForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { createComodato, updateComodato, deleteComodato } =
		useComodato();

	useEffect(() => {
		getNucleos();
		if (data) {
			getSedes();
		}
	}, []);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			description: "",
			serialNumber: "",
			brand: "",
			model: "",
			observation: "",
			sedeId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3),
			description: yup.string(),
			serialNumber: yup.string(),
			brand: yup.string(),
			model: yup.string(),
			observation: yup.string(),
			sedeId: yup.string().min(3),
		}),
		onSubmit: async (formData: ComodatoAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateComodato(data._id, formData);
				else await createComodato(formData);

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
			deleteComodato(data._id);
			router.push(RouterLinks.comodato.all);
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

				<Input
					labelTitle="Nombre"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
					error={formik.errors.name}
				/>

				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
					<Input
						labelTitle="Marca"
						name="brand"
						onChange={formik.handleChange}
						value={formik.values.brand}
						error={formik.errors.brand}
					/>

					<Input
						labelTitle="Modelo"
						name="model"
						onChange={formik.handleChange}
						value={formik.values.model}
						error={formik.errors.model}
					/>
				</div>

				<Input
					labelTitle="Serial N°"
					name="serialNumber"
					onChange={formik.handleChange}
					value={formik.values.serialNumber}
					error={formik.errors.serialNumber}
				/>

				<Input
					labelTitle="Descripción"
					name="description"
					onChange={formik.handleChange}
					value={formik.values.description}
					error={formik.errors.description}
				/>

				<Input
					labelTitle="Observación"
					name="observation"
					onChange={formik.handleChange}
					value={formik.values.observation}
					error={formik.errors.observation}
				/>

				<Button type="submit"> Guardar</Button>
				{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
			</form>
		</>
	);
};

export default ComodatoForm;
