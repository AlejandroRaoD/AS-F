"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import useNucleo from "../../hooks/useNucleo";
import NucleoForm from "../../components/NucleoForm";

const Page = () => {
	const { id } = useParams();

	const { nucleo } = useNucleo({ id });

	return (
		<>
			<PageTemplate pageTitle="Editar nucleo">
				{nucleo && (
					<>
						<Title>Editar</Title>
						<NucleoForm data={nucleo} redirect={RouterLinks.nucleos.one(id)} />
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
