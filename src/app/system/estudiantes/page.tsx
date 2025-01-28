"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useStudent from "./hooks/useStudent";
import { StudentItem } from "./components/StudentItem";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import NeedPermissions from "../user/components/NeedPermissions";
import { UserPermissions } from "../user/interfaces/user.interface";

export default function EstudiantesPage() {
	const { students, getStudents } = useStudent();

	// Obtener estudiantes con filtros
	useEffect(() => {
		getStudents();
	}, []);

	const onSubmitQuery = async (name: string) => getStudents({ name });
	const onClearQuery = async () => getStudents();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Gestión de Estudiantes",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.estudiantesEdit]}>
						<IconButton href={RouterLinks.estudiantes.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.estudiantes]}
		>
			<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />

			<div className="flex flex-col">
				<div className="grid grid-cols-10 mb-2 px-4 text-gray-700">
					<div className="col-span-3">Nombre</div>
					<div className="col-span-3">Apellido</div>
					<div className="col-span-2">Cédula</div>
					<div className="col-span-2">Nacimiento</div>
				</div>

				{students.map((p) => (
					<StudentItem data={p} key={p._id} />
				))}
			</div>
		</PageTemplate>
	);
}
