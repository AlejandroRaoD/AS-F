"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useFurniture from "../hooks/useFurniture";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Select from "@/app/common/components/Select";
import { furnitureAttributes } from "../interfaces/furniture.interface";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useSede from "../../sedes/hooks/useSede";

interface props {
	data?: furnitureAttributes;
	redirect?: string;
}

const FurnitureForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { createFurniture, updateFurniture, deleteFurniture } = useFurniture();

	useEffect(() => {
		getNucleos();
		if (data) getSedes();
	}, []);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			quantity: 1,
			description: "",
			serialNumber: "",
			brand: "",
			model: "",
			observation: "",
			localLocation: "",
			sedeId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3),
			quantity: yup.number().min(1),
			description: yup.string().min(3),
			serialNumber: yup.string(),
			brand: yup.string().min(2),
			model: yup.string(),
			observation: yup.string(),
			localLocation: yup.string(),
			sedeId: yup.string().min(3),
		}),
		onSubmit: async (formData: furnitureAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateFurniture(data._id, formData);
				else await createFurniture(formData);

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
			deleteFurniture(data._id);
			router.push(RouterLinks.bienes.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
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

			<form onSubmit={formik.handleSubmit}>
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

				<Input
					labelTitle="cantidad"
					name="quantity"
					onChange={formik.handleChange}
					value={formik.values.quantity}
					error={formik.errors.quantity}
					type="number"
				/>

				<Input
					labelTitle="Nombre del bien"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
					error={formik.errors.name}
				/>

				<Input
					labelTitle="descripcion"
					name="description"
					onChange={formik.handleChange}
					value={formik.values.description}
					error={formik.errors.description}
				/>

				<Input
					labelTitle="numero de serial"
					name="serialNumber"
					onChange={formik.handleChange}
					value={formik.values.serialNumber}
					error={formik.errors.serialNumber}
				/>

				<Input
					labelTitle="marca"
					name="brand"
					onChange={formik.handleChange}
					value={formik.values.brand}
					error={formik.errors.brand}
				/>

				<Input
					labelTitle="modelo"
					name="model"
					onChange={formik.handleChange}
					value={formik.values.model}
					error={formik.errors.model}
				/>

				<Input
					labelTitle="observacion"
					name="observation"
					onChange={formik.handleChange}
					value={formik.values.observation}
					error={formik.errors.observation}
				/>

				<Input
					labelTitle="lugar"
					name="localLocation"
					onChange={formik.handleChange}
					value={formik.values.localLocation}
					error={formik.errors.localLocation}
				/>

				<Button type="submit"> Guardar</Button>
				{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
			</form>
		</>
	);
};

export default FurnitureForm;
