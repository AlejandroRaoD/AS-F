"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../common/components/PageTemplate";
import { NucleoItem } from "./components/NucleoItem";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();

	// Cargar los datos al iniciar la página
	useEffect(() => {
		getNucleos({ limit: 20 });
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Núcleos",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-100 min-h-screen">
				{/* Botón para crear un nuevo núcleo */}
				<div className="flex justify-end mb-6">
					<Link
						href={RouterLinks.nucleos.create}
						className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
					>
						+ Crear Núcleo
					</Link>
				</div>

				{/* Lista de núcleos */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{nucleos.map((n) => (
						<NucleoItem key={n._id} data={n} />
					))}
				</div>

				{/* Mensaje si no hay núcleos */}
				{nucleos.length === 0 && (
					<p className="text-center text-gray-500 mt-10">
						No se encontraron núcleos. ¡Crea el primero!
					</p>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
