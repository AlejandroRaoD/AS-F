import NavBar from "@/app/common/components/NavBar";

export default function BienesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {}
      <NavBar
        navTitle="Gestión de Bienes"
        hrefBackButton="/"
      />

      {/* Contenido principal */}


      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Página de Bienes</h1>
        <p className="text-lg text-gray-600">Info de los bienes</p>
      </div>
    </div>
  );
}


{/*"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useBienes from "./hooks/useBienes";
import { BienItem } from "./components/BienItem";

export default function BienesPage() {
	const { bienes, getBienes } = useBienes();
	const [filters, setFilters] = useState({ name: "", type: "", code: "" });

	// Obtener bienes con filtros
	useEffect(() => {
		const filteredParams = {
			limit: 20,
			...(filters.name && { name: filters.name }),
			...(filters.type && { type: filters.type }),
			...(filters.code && { code: filters.code }),
		};
		getBienes(filteredParams);
	}, [filters]);

	// Actualizar filtros
	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Gestión de Bienes",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-50 min-h-screen">*/}


				//{/* Título y botón con filtros */}


				{/*<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
					<Link
						href={RouterLinks.bienes.create}
						className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
					>
						+ Crear Bien
					</Link>*/}

					//{/* Filtros */}

					{/*<div className="flex flex-col sm:flex-row sm:items-center gap-2">
						<input
							type="text"
							name="name"
							placeholder="Filtrar por Nombre"
							value={filters.name}
							onChange={handleFilterChange}
							className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="type"
							placeholder="Filtrar por Tipo"
							value={filters.type}
							onChange={handleFilterChange}
							className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="code"
							placeholder="Filtrar por Código"
							value={filters.code}
							onChange={handleFilterChange}
							className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>*/}

				//{/* Lista de bienes */}

				{/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{bienes.length > 0 ? (
						bienes.map((bien) => (
							<BienItem key={bien._id} data={bien} />
						))
					) : (
						<p className="text-center text-gray-500 mt-10">
							No se encontraron bienes con los filtros aplicados. Intenta nuevamente.
						</p>
					)}
				</div>
			</div>
		</PageTemplate>
	);
}*/}
