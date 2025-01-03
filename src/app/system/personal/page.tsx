"use client";

export default function PersonalPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
			<div className="text-center">
				<h1 className="text-2xl font-semibold mb-4">Gestión de Personal</h1>
				<p className="text-lg mb-6">
					Esta sección está temporalmente en desarrollo. 🛠️
				</p>
				<p className="text-sm text-gray-500">
					Pronto podrás gestionar toda la información del personal aquí. Vuelve
					más tarde.
				</p>
			</div>
		</div>
	);
}









{/*"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import usePersonal from "./hooks/usePersonal";
import { PersonalItem } from "./components/PersonalItem";

export default function PersonalPage() {
	const { personal, getPersonal } = usePersonal();
	const [filters, setFilters] = useState({ name: "", role: "", phone: "" });

	// Obtener personal con filtros
	useEffect(() => {
		const filteredParams = {
			limit: 20,
			...(filters.name && { name: filters.name }),
			...(filters.role && { role: filters.role }),
			...(filters.phone && { phone: filters.phone }),
		};
		getPersonal(filteredParams);
	}, [filters]);

	// Actualizar filtros
	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Gestión de Personal",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<div className="p-6 bg-gray-50 min-h-screen">*/}

				//{/* Título y botón con filtros */}

				{/*<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
					<Link
						href={RouterLinks.personal.create}
						className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
					>
						+ Crear Personal
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
							name="role"
							placeholder="Filtrar por Rol"
							value={filters.role}
							onChange={handleFilterChange}
							className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="phone"
							placeholder="Filtrar por Teléfono"
							value={filters.phone}
							onChange={handleFilterChange}
							className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>*/}

				//{/* Lista de personal */}

				{/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{personal.length > 0 ? (
						personal.map((person) => (
							<PersonalItem key={person._id} data={person} />
						))
					) : (
						<p className="text-center text-gray-500 mt-10">
							No se encontró personal con los filtros aplicados. Intenta nuevamente.
						</p>
					)}
				</div>
			</div>
		</PageTemplate>
	);
}*/}