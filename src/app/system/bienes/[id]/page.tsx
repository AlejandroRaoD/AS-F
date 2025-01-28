"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import useFurniture from "../hooks/useFurniture";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();
	const furnitureId = getOneStringParams(id);
	const { furniture } = useFurniture({ id: furnitureId });
	const { sede, getSede } = useSede();

	useEffect(() => {
		if (!furniture) return;

		getSede(furniture.sedeId);
	}, [furniture]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.bienes.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.bienesEdit]}>
						<IconButton href={RouterLinks.bienes.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
		>
			<SectionContainer className="grid lg:grid-cols-2">
				{furniture ? (
					<>
						<TextValue title="Nombre" value={furniture.name} />
						<TextValue title="Cantidad" value={furniture.quantity} />
						<TextValue title="Descripcion" value={furniture.description} />
						<TextValue title="Serial" value={furniture.serialNumber} />
						<TextValue title="Marca" value={furniture.brand} />
						<TextValue title="Modelo" value={furniture.model} />
						<TextValue title="Observacion" value={furniture.observation} />
						<TextValue title="Lugar" value={furniture.localLocation} />

						{sede && <TextValue title="Sede" value={sede.name} />}
					</>
				) : (
					// <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
					// </div>
					<p className="text-center text-gray-500">
						Cargando los detalles de la sede...
					</p>
				)}
			</SectionContainer>

			<div>{furniture && <></>}</div>
		</PageTemplate>
	);
};

export default Page;
