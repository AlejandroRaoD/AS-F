"use client";

import React, { useEffect } from "react";
import useNucleo from "../hooks/useNucleo";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../../sedes/hooks/useSede";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import SectionContainer from "@/app/common/components/SectionContainer";
import { SedeItem } from "../../sedes/components/SedeItem";

const Page = () => {
	const { id } = useParams();

	const nucleoId = getOneStringParams(id);

	const { nucleo } = useNucleo({ id: nucleoId });
	const { sedes } = useSede({ query: { nucleoId } });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del Núcleo",
				hrefBackButton: RouterLinks.nucleos.all,
				rightButtons: (
					<IconButton href={RouterLinks.nucleos.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			{nucleo ? (
				<Title titleType="h2">
					<b>Nombre: </b> {nucleo.name}
				</Title>
			) : (
				<p className="text-center text-gray-500">
					Cargando los detalles del núcleo...
				</p>
			)}

			<SectionContainer>
				<Title titleType="h1"> Sedes</Title>

				<div className="flex flex-col">

					{sedes.map((sede) => (
						<SedeItem key={sede._id} data={sede} type="inList" />
					))}
				</div>
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
