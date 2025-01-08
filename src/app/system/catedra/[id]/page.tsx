"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import useCatedra from "../hook/useCatedra";

const Page = () => {
	const { id } = useParams();
	const catedraId = getOneStringParams(id);

	const { catedra } = useCatedra({ id: catedraId });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.catedra.all,
				// rightButtons: (
				// 	<>
				// 		<IconButton href={RouterLinks.programas.edit(id)}>
				// 			<EditIcon />
				// 		</IconButton>
				// 	</>
				// ),
			}}
		>
			<Button href={RouterLinks.catedra.edit(id)}>Editar datos</Button>

			<div>
				{catedra && (
					<>
						<Title>{catedra.name}</Title>
						<Title>{catedra.description}</Title>

						<Title>{catedra.programaId}</Title>
					</>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
