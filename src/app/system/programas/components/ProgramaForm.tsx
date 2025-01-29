"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import Select from "@/app/common/components/Select";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import usePrograma from "../hook/useProgramas";
import { programaAttributes } from "../interfaces/programa.interface";
import { CreateProgramaDto } from "../dto/create-programa.dto";
import useSede from "../../sedes/hooks/useSede";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useEmployee from "../../personal/hooks/useEmployee";

interface props {
	data?: programaAttributes;
	redirect?: string;
}

const ProgramaForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { employees, getEmployees } = useEmployee();

	const { createPrograma, updatePrograma, deletePrograma } = usePrograma();

	useEffect(() => {
		getNucleos();

		if (data) {
			getSedes();
			getEmployees();
		}
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

	const handleDeleteButton = async () => {
		if (!data) return;
		try {
			await deletePrograma(data._id);
			router.push(RouterLinks.programas.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Select
				labelTitle="Núcleo"
				dataList={nucleos.map((n) => ({ title: n.name, value: n._id }))}
				name="nucleo"
				onChange={({ target: { value } }) => {
					getSedes({ nucleoId: value });
				}}
			/>

			<form onSubmit={formik.handleSubmit}>
				<Select
					labelTitle="Sede"
					dataList={sedes.map((n) => ({ title: n.name, value: n._id }))}
					name="sedeId"
					onChange={(e) => {
						formik.handleChange(e);
						getEmployees({ sedeId: e.target.value });
					}}
					value={formik.values.sedeId}
					error={formik.errors.sedeId}
				/>

				<Select
					labelTitle="Director"
					dataList={employees.map((n) => ({
						title: `${n.nationality}-${n.CI} | ${n.name} ${n.lastname}`,
						value: n._id,
					}))}
					name="directorId"
					onChange={formik.handleChange}
					value={formik.values.directorId}
					error={formik.errors.directorId}
				/>

				<Input
					labelTitle="Nombre del Programa"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
					error={formik.errors.name}
				/>

				<Input
					labelTitle="Descripción"
					name="description"
					onChange={formik.handleChange}
					value={formik.values.description}
					error={formik.errors.description}
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

export default ProgramaForm;
