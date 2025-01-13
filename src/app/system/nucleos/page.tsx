"use client";
import React, { useEffect } from "react";

import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../../common/components/PageTemplate";
import { NucleoItem } from "./components/NucleoItem";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import SimpleSearch from "@/app/common/components/SimpleSearch";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();

	useEffect(() => {
		getNucleos();
	}, []);

	const onSubmitQuery = async (name: string) => getNucleos({ name });
	const onClearQuery = async () => getNucleos();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Núcleos",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<IconButton href={RouterLinks.nucleos.create}>
						<PlusIcon />
					</IconButton>
				),
			}}
		>
			{/* Filtros */}

			<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />

			{/* Lista de núcleos */}

			{nucleos.length ? (
				<div className="flex flex-col">
					{nucleos.map((n) => (
						<NucleoItem data={n} key={n._id} />
					))}
				</div>
			) : (
				<p className="text-center text-gray-500 mt-10">
					No se encontraron núcleos. ¡Crea el primero!
				</p>
			)}
		</PageTemplate>
	);
};

export default Page;
