"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import usePrograma from "../hook/useProgramas";

const Page = () => {
	const { id } = useParams();
	const programaId = getOneStringParams(id);

	const { programa } = usePrograma({ id: programaId });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.programas.all,
				// rightButtons: (
				// 	<>
				// 		<IconButton href={RouterLinks.programas.edit(id)}>
				// 			<EditIcon />
				// 		</IconButton>
				// 	</>
				// ),
			}}
		>
			<Button href={RouterLinks.programas.edit(id)}>Editar datos</Button>

			<div>
				{programa && (
					<>
						<Title>{programa.name}</Title>
						<Title>{programa.description}</Title>

						<Title>{programa.name}</Title>

						<Title>{programa.sedeId}</Title>

						<Title>{programa.directorId}</Title>
					</>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
