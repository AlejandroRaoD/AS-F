"use client";

import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useEmployee from "./hooks/useEmployee";
import { EmployeeItem } from "./components/EmployeeItem";
import Button from "@/app/common/components/Button";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";

export default function BienesPage() {
	const { employees, getEmployees } = useEmployee();

	// Obtener bienes con filtros
	useEffect(() => {
		getEmployees();
	}, []);

	const onSubmitQuery = async (name: string) => getEmployees({ name });
	const onClearQuery = async () => getEmployees();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Personal",
				hrefBackButton: RouterLinks.dashboard,

				rightButtons: (
					<>
						<IconButton href={RouterLinks.employee.create}>
							<PlusIcon />
						</IconButton>
					</>
				),
			}}
		>
			{/* Título y botón con filtros */}

			<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />
			{/* Lista de bienes */}

			<div className="flex flex-col">
				<div className="grid grid-cols-12 mb-2 px-4 text-gray-700">
					<div className="col-span-3">Nombre</div>
					<div className="col-span-3">Apellido</div>
					<div className="col-span-2">Cédula</div>
					<div className="col-span-3">Telefono</div>
					<div className="col-span-1">Cargo</div>
				</div>

				{employees.length ? (
					employees.map((bien) => <EmployeeItem key={bien._id} data={bien} />)
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
