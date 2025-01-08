"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import useFurniture from "../hooks/useFurniture";

const Page = () => {
	const { id } = useParams();
	const furnitureId = getOneStringParams(id);
	const { furniture } = useFurniture({ id: furnitureId });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.bienes.all,
				// rightButtons: (
				// 	<>
				// 		<IconButton href={RouterLinks.estudiantes.edit(id)}>
				// 			<EditIcon />
				// 		</IconButton>
				// 	</>
				// ),
			}}
		>
			<Button href={RouterLinks.bienes.edit(id)}>Editar datos</Button>

			<div>
				{furniture && (
					<>
						<p>{furniture.name}</p>
						<p>{furniture.quantity}</p>
						<p>{furniture.description}</p>
						<p>{furniture.serialNumber}</p>
						<p>{furniture.brand}</p>

						<p>{furniture.model}</p>

						<p>{furniture.observation}</p>

						<p>{furniture.localLocation}</p>

						<p>{furniture.sedeId}</p>
					</>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
