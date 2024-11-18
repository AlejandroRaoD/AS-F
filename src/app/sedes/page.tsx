"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useSede from "./hooks/useSede";
import { SedeItem } from "./components/SedeItem";

const Page = () => {
	const { sedes, getSedes } = useSede();

	// Cargar los datos al iniciar la página
	useEffect(() => {
		getSedes({ limit: 20 });
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Sedes",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-100 min-h-screen">
				{/* Botón para crear una nueva sede */}
				<div className="flex justify-end mb-6">
					<Link
						href={RouterLinks.sedes.create}
						className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
					>
						+ Crear Sede
					</Link>
				</div>

				{/* Lista de sedes */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{sedes.map((sede) => (
						<SedeItem key={sede._id} data={sede} />
					))}
				</div>

				{/* Mensaje si no hay sedes */}
				{sedes.length === 0 && (
					<p className="text-center text-gray-500 mt-10">
						No se encontraron sedes. ¡Crea la primera!
					</p>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
