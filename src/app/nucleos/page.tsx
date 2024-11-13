"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { nucleoAttributes } from "@/types";
import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../common/components/PageTemplate";
import Title from "../common/components/Title";
import Input from "../common/components/Input";
import Button from "../common/components/Button";

const Page = () => {
	const { nucleos, getNucleos, createNucleo } = useNucleo();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const formik = useFormik<Pick<nucleoAttributes, "name">>({
		initialValues: { name: "" },
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

	useEffect(() => {
		getNucleos();
	}, []);

	return (
		<>
			<PageTemplate pageTitle="Nucleos">
				<>
					<Title>nucleos </Title>

					{nucleos.map((n) => (
						<div key={n._id}>
							<div>{n._id}</div>
							<div>{n.name}</div>
						</div>
					))}

					<hr />

					<Title>nucleos</Title>

					<form onSubmit={formik.handleSubmit}>
						<Input
							name="name"
							onChange={formik.handleChange}
							value={formik.values.name}
							error={formik.errors.name}
						/>

						<Button> Guardar</Button>
					</form>
				</>
			</PageTemplate>
		</>
	);
};

export default Page;
