"use client";

import { useEffect } from "react";

import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useFurniture from "./hooks/useFurniture";
import { FurnitureItem } from "./components/FurnitureItem";
import Button from "@/app/common/components/Button";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";

export default function BienesPage() {
	const { furnitures, getFurnitures } = useFurniture();

	// Obtener bienes con filtros
	useEffect(() => {
		getFurnitures();
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Gestión de Bienes",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<IconButton href={RouterLinks.bienes.create}>
						<PlusIcon />
					</IconButton>
				),
			}}
		>
			<div className="flex flex-col">
				<div className="grid grid-cols-12 mb-2 px-4 text-gray-700">
					<div className="col-span-1">Cantidad</div>
					<div className="col-span-3">Nombre</div>
					<div className="col-span-2">Marca</div>
					<div className="col-span-1">Model</div>
					<div className="col-span-2">Serial</div>
					<div className="col-span-3">Lugar</div>
				</div>

				{furnitures.length ? (
					furnitures.map((bien) => <FurnitureItem key={bien._id} data={bien} />)
				) : (
					<p className="text-center text-gray-500 mt-10">
						No se encontraron bienes con los filtros aplicados. Intenta
						nuevamente.
					</p>
				)}
			</div>
		</PageTemplate>
	);
}
