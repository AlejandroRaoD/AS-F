"use client";
import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useComodato from "./hooks/useComodato";
import { ComodatoItem } from "./components/ComodatoItem";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";

export default function BienesPage() {
	const { comodatos, getComodatos } = useComodato();

	// Obtener bienes con filtros
	useEffect(() => {
		getComodatos();
	}, []);

	// const onSubmitQuery = async (name: string) => getComodatos({ name });
	// const onClearQuery = async () => getComodatos();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Comodatos",
				hrefBackButton: RouterLinks.dashboard,

				rightButtons: (
					<>
						<IconButton href={RouterLinks.comodato.create}>
							<PlusIcon />
						</IconButton>
					</>
				),
			}}
		>
			{/* Título y botón con filtros */}

			{/* <SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} /> */}
			{/* Lista de bienes */}

			<div className="flex flex-col">
				<div className="grid grid-cols-4 mb-2 px-4 text-gray-700">
					<div>Instrumento</div>
					<div>Contrato N°</div>
					<div>Inicio</div>
					<div>Final</div>
				</div>

				{comodatos.length ? (
					comodatos.map((bien) => <ComodatoItem key={bien._id} data={bien} />)
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
