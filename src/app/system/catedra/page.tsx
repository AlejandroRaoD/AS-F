"use client";
import React, { useEffect, useState } from "react";
import useCatedras from "./hook/useCatedra"; // Hook personalizado para manejar Catedras
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { CatedraItem } from "./components/CatedraItem";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import NeedPermissions from "../user/components/NeedPermissions";
import { UserPermissions } from "../user/interfaces/user.interface";

const Page = () => {
	const { catedras, getCatedras } = useCatedras();

	useEffect(() => {
		getCatedras();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmitQuery = async (name: string) => getCatedras({ name });
	const onClearQuery = async () => getCatedras();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "CÁTEDRAS",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.catedraEdit]}>
						<IconButton href={RouterLinks.catedra.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.catedra]}
		>
			<div className="flex flex-col">
				<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />

				<div className="grid grid-cols-2 mb-2 px-4 text-gray-700">
					<div>Nombre</div>
					<div>Programa</div>
				</div>

				{catedras.map((p) => (
					<CatedraItem data={p} key={p._id} />
				))}
			</div>

			{/* Mensaje si no hay catedras */}
			{catedras.length === 0 && catedras.length > 0 && (
				<p className="text-center text-gray-500 mt-10">
					No se encontraron catedras. ¡Crea el primero!
				</p>
			)}

			{catedras.length === 0 && catedras.length === 0 && (
				<p className="text-center text-gray-500 mt-10">Cargando catedras...</p>
			)}
		</PageTemplate>
	);
};

export default Page;
