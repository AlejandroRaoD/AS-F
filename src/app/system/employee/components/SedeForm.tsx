"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import { sedeAttributes } from "@/types";
import Input from "@/app/common/components/Input";
import useSede from "../hooks/useSede";
import Button from "@/app/common/components/Button";
import RouterLinks from "@/config/RouterLinks";
import Select from "@/app/common/components/Select";
import useNucleo from "@/app/system/nucleos/hooks/useNucleo";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import InputTagArray from "@/app/common/components/InputTagArray";
import { CreateSedeDto } from "../../sedes/dto/create-sede.dto";

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

	const [phoneNumberArr, setPhoneNumberArr] = useState<string[]>([]);
	const changePhoneArr = (arr: string[]) => setPhoneNumberArr(arr);

	useEffect(() => {
		getNucleos();
	}, []);

	useEffect(() => {
		changePhoneArr(data.phone_number);
	}, [data]);

	const formik = useFormik({
		initialValues: data || {
			name: "",
			address: "",
			phone_number: [],
			nucleoId: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3, "debe tener minimo 3 letras"),
			address: yup.string().min(3, "debe tener minimo 3 letras"),
			phone_number: yup.array(),
			nucleoId: yup.string(),
		}),
		onSubmit: async (formData: CreateSedeDto) => {
			if (isSubmiting) return;
			setIsSubmiting(true);

			formData.phone_number = phoneNumberArr;

			try {
				if (data) await updateSede(data._id, formData);
				else await createSede(formData);

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
			deleteSede(data._id);
			router.push(RouterLinks.sedes.all);
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

			<InputTagArray
				labelTitle="Telefono"
				name="phone_number"
				type="number"
				dataList={phoneNumberArr}
				changeArray={changePhoneArr}
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

			{data && <Button onClick={handleDeleteButton}>Eliminar</Button>}
		</form>
	);
};

export default SedeForm;
