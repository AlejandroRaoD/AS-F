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

	const handleDeleteButton = async () => {
		if (!data) return;
		try {
			await deleteFurniture(data._id);
			router.push(RouterLinks.bienes.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="grid grid-cols-2 gap-2">
					<Select
						labelTitle="Núcleo"
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
						labelTitle="Sede"
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
					labelTitle="Cantidad"
					name="quantity"
					onChange={formik.handleChange}
					value={formik.values.quantity}
					error={formik.errors.quantity}
					type="number"
				/>
				<Input
					labelTitle="Nombre del Bien"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
					error={formik.errors.name}
				/>
				<Input
					labelTitle="Descripcion"
					name="description"
					onChange={formik.handleChange}
					value={formik.values.description}
					error={formik.errors.description}
				/>
				<Input
					labelTitle="Número de Serial"
					name="serialNumber"
					onChange={formik.handleChange}
					value={formik.values.serialNumber}
					error={formik.errors.serialNumber}
				/>

				<div className="grid grid-cols-2 gap-2">
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
					labelTitle="Observacion"
					name="observation"
					onChange={formik.handleChange}
					value={formik.values.observation}
					error={formik.errors.observation}
				/>
				<Input
					labelTitle="Lugar"
					name="localLocation"
					onChange={formik.handleChange}
					value={formik.values.localLocation}
					error={formik.errors.localLocation}
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

export default FurnitureForm;
