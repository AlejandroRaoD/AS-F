"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useProgramas from "./hook/useProgramas"; // Hook personalizado para manejar Programas
import PageTemplate from "../common/components/PageTemplate";
import { ProgramaItem } from "./components/ProgramaItem" // Componente para renderizar cada programa
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	const { programas, getProgramas } = useProgramas();

	// Cargar los datos al iniciar la página
	useEffect(() => {
		getProgramas({ limit: 20 });
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Programas",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-50 min-h-screen">
				{/* Sección del título y botón */}
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-semibold text-gray-800">Listado de Programas</h1>
					<Link
						href={RouterLinks.programas.create} // Asegúrate de definir esta ruta en RouterLinks
						className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
					>
						+ Crear Programa
					</Link>
				</div>

				{/* Lista de programas */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{programas.map((p) => (
						<div
							key={p._id}
							className="border border-gray-300 bg-white rounded-md shadow-md hover:shadow-lg p-4 transition"
						>
							<ProgramaItem data={p} />
						</div>
					))}
				</div>

				{/* Mensaje si no hay programas */}
				{programas.length === 0 && (
					<p className="text-center text-gray-500 mt-10">
						No se encontraron programas. ¡Crea el primero!
					</p>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
