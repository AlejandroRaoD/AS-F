"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useProgramas from "./hook/useProgramas"; // Hook personalizado para manejar Programas
import PageTemplate from "../../common/components/PageTemplate";
import { ProgramaItem } from "./components/ProgramaItem"; // Componente para renderizar cada programa
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";

const Page = () => {
	const { programas, getProgramas } = useProgramas();
	const [filters, setFilters] = useState({ name: "" });
	const [filteredProgramas, setFilteredProgramas] = useState([]);

	useEffect(() => {
		getProgramas({ limit: 20 });
	}, []);

	useEffect(() => {
		// Solo aplica el filtro cuando los programas estén disponibles
		if (programas.length > 0) {
			const filteredData = programas.filter((programa) => {
				// Asegúrate de que `programa.name` existe. Si es otro nombre, ajusta esta línea.
				const nameMatch = programa.name
					.toLowerCase()
					.includes(filters.name.toLowerCase());
				return nameMatch;
			});

			setFilteredProgramas(filteredData);
		}
	}, [filters, programas]); // Se vuelve a aplicar cuando se actualizan los filtros o los programas

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFilters({ ...filters, [name]: value });
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Programas",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<IconButton href={RouterLinks.programas.create}>
						<PlusIcon />
					</IconButton>
				),
			}}
		>
			{/* Lista de programas */}
			<div className="flex flex-col">
				<div className="grid grid-cols-2 mb-2 px-4 text-gray-700">
					<div>Nombre</div>
					<div>Sede</div>
				</div>
				{filteredProgramas.map((p) => (
					<ProgramaItem data={p} key={p._id} />
				))}
			</div>
		</PageTemplate>
	);
};

export default Page;
