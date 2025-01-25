"use client";
import React, { useEffect, useState } from "react";
import useCatedras from "./hook/useCatedra"; // Hook personalizado para manejar Catedras
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { CatedraItem } from "./components/CatedraItem";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import SimpleSearch from "@/app/common/components/SimpleSearch";

const Page = () => {
	const { catedras, getCatedras } = useCatedras();

	useEffect(() => {
		getCatedras();
	}, []);

	const onSubmitQuery = async (name: string) => getCatedras({ name });
	const onClearQuery = async () => getCatedras();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Catedras",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<IconButton href={RouterLinks.catedra.create}>
						<PlusIcon />
					</IconButton>
				),
			}}
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
