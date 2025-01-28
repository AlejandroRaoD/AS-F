"use client";
import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useInstrument from "./hooks/useInstrument";
import { InstrumentItem } from "./components/InstrumentItem";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import { UserPermissions } from "../user/interfaces/user.interface";
import NeedPermissions from "../user/components/NeedPermissions";

export default function BienesPage() {
	const { instruments, getInstruments } = useInstrument();

	// Obtener bienes con filtros
	useEffect(() => {
		getInstruments();
	}, []);

	const onSubmitQuery = async (name: string) => getInstruments({ name });
	const onClearQuery = async () => getInstruments();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Instrumentos",
				hrefBackButton: RouterLinks.dashboard,

				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.inscripcionesEdit]}>
						<IconButton href={RouterLinks.instrument.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.instrumentos]}
		>
			{/* Título y botón con filtros */}

			<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />
			{/* Lista de bienes */}

			<div className="flex flex-col">
				<div className="grid grid-cols-4 mb-2 px-4 text-gray-700">
					<div>Nombre</div>
					<div>Marca</div>
					<div>Modelo</div>
					<div>Serial N°</div>
				</div>

				{instruments.length ? (
					instruments.map((bien) => (
						<InstrumentItem key={bien._id} data={bien} />
					))
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
