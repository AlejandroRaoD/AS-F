"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import useInstrument from "../hooks/useInstrument";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Select from "@/app/common/components/Select";
import { instrumentAttributes } from "../interfaces/instrument.interface";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useSede from "../../sedes/hooks/useSede";

interface props {
	data?: instrumentAttributes;
	redirect?: string;
}

const InstrumentForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { createInstrument, updateInstrument, deleteInstrument } =
		useInstrument();

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
		onSubmit: async (formData: instrumentAttributes) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateInstrument(data._id, formData);
				else await createInstrument(formData);

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
			await deleteInstrument(data._id);
			router.push(RouterLinks.instrument.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
					<Select
						labelTitle="Núcleo"
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
					labelTitle="Nombre"
					name="name"
					onChange={(e) => formik.setFieldValue("name", e.target.value.toUpperCase())}
					value={formik.values.name}
					error={formik.errors.name}
				/>
				<div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
					<Input
						labelTitle="Marca"
						name="brand"
						onChange={(e) => formik.setFieldValue("brand", e.target.value.toUpperCase())}
						value={formik.values.brand}
						error={formik.errors.brand}
					/>

					<Input
						labelTitle="Modelo"
						name="model"
						onChange={(e) => formik.setFieldValue("model", e.target.value.toUpperCase())}
						value={formik.values.model}
						error={formik.errors.model}
					/>
				</div>
				<Input
					labelTitle="Serial"
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

export default InstrumentForm;
