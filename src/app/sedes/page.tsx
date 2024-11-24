"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useSede from "./hooks/useSede";
import { SedeItem } from "./components/SedeItem";

const Page = () => {
	const { sedes, getSedes } = useSede();

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
			<div className="p-6 bg-gray-50 min-h-screen">
				{/* Encabezado y botón */}
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-semibold text-gray-800">Listado de Sedes</h1>
					<Link
						href={RouterLinks.sedes.create}
						className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
					>
						+ Crear Sede
					</Link>
				</div>

				{/* Lista de sedes */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{sedes.map((sede) => (
						<div
							key={sede._id}
							className="border border-gray-300 bg-white rounded-md shadow-md hover:shadow-lg p-4 transition"
						>
							<SedeItem data={sede} />
						</div>
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
