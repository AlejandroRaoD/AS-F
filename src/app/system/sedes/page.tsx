"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useSede from "./hooks/useSede";
import { SedeItem } from "./components/SedeItem";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import useNucleo from "../nucleos/hooks/useNucleo";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();
	const { sedes, getSedes } = useSede();

	useEffect(() => {
		getNucleos();
		getSedes();
	}, []);

	const onSubmitQuery = async (name: string) => getSedes({ name });
	const onClearQuery = async () => getSedes();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Sedes",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<>
						<IconButton href={RouterLinks.sedes.create}>
							<PlusIcon />
						</IconButton>
					</>
				),
			}}
		>
			<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />

			{/* Lista de sedes */}
			<div className="flex flex-col">
				<div className="grid grid-cols-2 mb-2 px-4 text-gray-700">
					<div>Nombre</div>
					<div>Núcleo</div>
				</div>

        
				{sedes.length === 0 ? (
					<p className="text-center text-gray-500 mt-12 text-lg">
						No se encontraron sedes. ¡Crea la primera!
					</p>
				) : (
					sedes.map((sede) => (
						<SedeItem
							key={sede._id}
							data={sede}
							nucleoData={nucleos.find((item) => item._id == sede.nucleoId)}
						/>
					))
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
