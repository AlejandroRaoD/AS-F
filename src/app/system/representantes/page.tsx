"use client";
import { useEffect, useState } from "react";
import RouterLinks from "@/config/RouterLinks";
import PageTemplate from "../../common/components/PageTemplate";
import Link from "next/link";
import useRepresentative from "./hooks/useRepresentative";
import { RepresentativeItem } from "./components/RepresentativeItem";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import IconButton from "@/app/common/components/IconButton";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import NeedPermissions from "../user/components/NeedPermissions";
import { UserPermissions } from "../user/interfaces/user.interface";

export default function EstudiantesPage() {
	const { representatives, getRepresentatives } = useRepresentative();

	useEffect(() => {
		getRepresentatives();
	}, []);

	const onSubmitQuery = async (name: string) => getRepresentatives({ name });
	const onClearQuery = async () => getRepresentatives();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Representantes",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.representantesEdit]}>
						<IconButton href={RouterLinks.representante.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.representantes]}
		>
			<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />

			<div className="flex flex-col">
				<div className="grid grid-cols-12 mb-2 px-4 text-gray-700">
					<div className="col-span-3">Nombre</div>
					<div className="col-span-3">Apellido</div>
					<div className="col-span-2">Cédula</div>
					<div className="col-span-2">Telefono</div>
					<div className="col-span-2">Cargo</div>
				</div>

				{representatives.map((p) => (
					<RepresentativeItem data={p} key={p._id} />
				))}
			</div>

			{/* Mensaje si no hay representantes */}
			{representatives.length === 0 && (
				<p className="text-center text-gray-500 mt-10">
					No se encontraron representantes. ¡Crea el primero!
				</p>
			)}
		</PageTemplate>
	);
}
