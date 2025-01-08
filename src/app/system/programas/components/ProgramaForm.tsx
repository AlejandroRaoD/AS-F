"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import Select from "@/app/common/components/Select";
import useNucleo from "@/app/system/nucleos/hooks/useNucleo";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import usePrograma from "../hook/useProgramas";
import { programaAttributes } from "../interfaces/programa.interface";
import { CreateProgramaDto } from "../dto/create-programa.dto";
import useSede from "../../employee/hooks/useSede";

interface props {
	data?: programaAttributes;
	redirect?: string;
}

const ProgramaForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const { sedes, getSedes } = useSede();

	const { createPrograma, updatePrograma, deletePrograma } = usePrograma();

	useEffect(() => {
		getSedes();
	}, []);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			description: "",
			sedeId: "",
			directorId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3),
			description: yup.string().min(3),
			sedeId: yup.string().min(3),
			directorId: yup.string().min(3),
		}),
		onSubmit: async (formData: CreateProgramaDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updatePrograma(data._id, formData);
				else await createPrograma(formData);

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
			deletePrograma(data._id);
			router.push(RouterLinks.programas.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				labelTitle="Nombre del programa"
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

			<Select
				labelTitle="Sede"
				dataList={sedes.map((n) => ({ title: n.name, value: n._id }))}
				name="sedeId"
				onChange={formik.handleChange}
				value={formik.values.sedeId}
				error={formik.errors.sedeId}
			/>

			<Button type="submit"> Guardar</Button>

			{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
		</form>
	);
};

export default ProgramaForm;
