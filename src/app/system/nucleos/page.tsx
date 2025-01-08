"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../../common/components/PageTemplate";
import { NucleoItem } from "./components/NucleoItem";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();
	const [search, setSearch] = useState("");
	const [filteredNucleos, setFilteredNucleos] = useState([]);

	useEffect(() => {
		getNucleos({ limit: 20 });
	}, []);

	useEffect(() => {
		setFilteredNucleos(
			nucleos.filter((nucleo) =>
				nucleo.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, nucleos]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Núcleos",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-50 min-h-screen">
				{/* Encabezado y botón */}
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-semibold text-gray-800">
						Listado de Núcleos
					</h1>
					<Link
						href={RouterLinks.nucleos.create}
						className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
					>
						+ Crear Núcleo
					</Link>
				</div>

				{/* Filtros */}
				<div className="flex flex-col space-y-4 mb-6">
					<input
						type="text"
						placeholder="Buscar por nombre"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Lista de núcleos */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredNucleos.map((n) => (
						<NucleoItem data={n} key={n._id} />
					))}
				</div>

				{/* Mensaje si no hay núcleos */}
				{filteredNucleos.length === 0 && (
					<p className="text-center text-gray-500 mt-10">
						No se encontraron núcleos. ¡Crea el primero!
					</p>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
