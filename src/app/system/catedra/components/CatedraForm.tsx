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
import useCatedra from "../hook/useCatedra";
import useSede from "../../sedes/hooks/useSede";
import useNucleo from "../../nucleos/hooks/useNucleo";
import useEmployee from "../../personal/hooks/useEmployee";
import { catedraAttributes } from "../interfaces/catedra.interface";
import { CreateCatedraDto } from "../dto/create-catedra.dto";
import usePrograma from "../../programas/hook/useProgramas";

interface props {
	data?: catedraAttributes;
	redirect?: string;
}

const CatedraForm = (props: props) => {
	const { data, redirect } = props;
	const router = useRouter();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();
	const { programas, getProgramas } = usePrograma();

	const { createCatedra, updateCatedra, deleteCatedra } = useCatedra();

	useEffect(() => {
		getNucleos();

		if (data) {
			getSedes();
			getProgramas();
		}
	}, []);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			description: "",
			programaId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3),
			description: yup.string().min(3),
			programaId: yup.string().min(3),
		}),
		onSubmit: async (formData: CreateCatedraDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			try {
				if (data) await updateCatedra(data._id, formData);
				else await createCatedra(formData);

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
			await deleteCatedra(data._id);
			router.push(RouterLinks.catedra.all);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Select
				labelTitle="Nucleo"
				dataList={nucleos.map((n) => ({ title: n.name, value: n._id }))}
				name="nucleo"
				onChange={({ target: { value } }) => {
					getSedes({ nucleoId: value });
				}}
			/>

			<Select
				labelTitle="Sede"
				dataList={sedes.map((n) => ({ title: n.name, value: n._id }))}
				name="sedeId"
				onChange={({ target: { value } }) => {
					getProgramas({ sedeId: value });
				}}
			/>

			<form onSubmit={formik.handleSubmit}>
				<Select
					labelTitle="Programa"
					dataList={programas.map((n) => ({ title: n.name, value: n._id }))}
					name="programaId"
					onChange={formik.handleChange}
					value={formik.values.programaId}
					error={formik.errors.programaId}
				/>

				<Input
					labelTitle="Nombre del catedra"
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

export default CatedraForm;
