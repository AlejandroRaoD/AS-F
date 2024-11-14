"use client";

import React from "react";
import useNucleo from "../hooks/useNucleo";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import NucleoForm from "../components/NucleoForm";

const Page = () => {
	const { id } = useParams();

	const { nucleo } = useNucleo({ id });

	return (
		<>
			<PageTemplate pageTitle="Nucleos">
				{nucleo && (
					<>
						<Title>{nucleo?.name}</Title>
					</>
				)}

				{nucleo && (
					<>
						<Title>Editar</Title>
						<NucleoForm data={nucleo} />
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
