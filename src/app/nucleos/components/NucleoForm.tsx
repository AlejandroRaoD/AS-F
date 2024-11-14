import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { nucleoAttributes } from "@/types";
import Input from "@/app/common/components/Input";
import useNucleo from "../hooks/useNucleo";
import Button from "@/app/common/components/Button";

interface props {
	data?: nucleoAttributes;
}

const NucleoForm = (props: props) => {
	const { data } = props;

	const { createNucleo } = useNucleo();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const formik = useFormik({
		initialValues: data || { name: "" },
		validationSchema: yup.object({
			name: yup.string().min(3, "debe tener minimo 3 letras"),
		}),
		onSubmit: async (data: Pick<nucleoAttributes, "name">) => {
			if (isSubmiting) return;

			setIsSubmiting(true);

			try {
				await createNucleo(data);
			} catch (error) {
				console.log(error);
			}
			setIsSubmiting(false);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				name="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				error={formik.errors.name}
			/>

			<Button> Guardar</Button>
		</form>
	);
};

export default NucleoForm;
