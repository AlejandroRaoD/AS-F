"use client";

import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useEmployee from "./hooks/useEmployee";
import { EmployeeItem } from "./components/EmployeeItem";
import Button from "@/app/common/components/Button";

export default function BienesPage() {
	const { employees, getEmployees } = useEmployee();

	// Obtener bienes con filtros
	useEffect(() => {
		getEmployees();
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Personal",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-50 min-h-screen">
				{/* Título y botón con filtros */}

				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
					<Button href={RouterLinks.employee.create}>+ Añadir personal</Button>

					{/* Filtros */}

					{/* <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
					</div> */}
				</div>

				{/* Lista de bienes */}

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{employees.length ? (
						employees.map((bien) => (
							<EmployeeItem key={bien._id} data={bien} />
						))
					) : (
						<p className="text-center text-gray-500 mt-10">
							No se encontraron bienes con los filtros aplicados. Intenta
							nuevamente.
						</p>
					)}
				</div>
			</div>
		</PageTemplate>
	);
}
