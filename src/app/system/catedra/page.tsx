"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useCatedras from "./hook/useCatedra"; // Hook personalizado para manejar Catedras
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { CatedraItem } from "./components/CatedraItem";

const Page = () => {
	const { catedras, getCatedras } = useCatedras();

	useEffect(() => {
		getCatedras();
	}, []);

	


	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Catedras",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-50 min-h-screen">
				{/* Encabezado y botón */}
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-semibold text-gray-800">
						Listado de Catedras
					</h1>
					<Link
						href={RouterLinks.catedra.create}
						className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
					>
						+ Crear Catedra
					</Link>
				</div>

				{/* Filtros de búsqueda */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
					<input
						type="text"
						name="name"
						placeholder="Buscar por nombre"
						// value={filters.name}
						// onChange={handleInputChange}
						className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
					/>
				</div>

				{/* Lista de catedras */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
					<p className="text-center text-gray-500 mt-10">
						Cargando catedras...
					</p>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
