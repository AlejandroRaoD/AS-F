"use client";
import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useStudentEnrollment from "./hooks/useStudentEnrollment";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import { StudentEnrollmentItem } from "./components/StudentEnrollmentItem";
import NeedPermissions from "../user/components/NeedPermissions";
import { UserPermissions } from "../user/interfaces/user.interface";

export default function BienesPage() {
	const { studentEnrollments, getStudentEnrollments } = useStudentEnrollment();

	// Obtener bienes con filtros
	useEffect(() => {
		getStudentEnrollments();
	}, []);

	// const onSubmitQuery = async (name: string) => getStudentEnrollments({ name });
	// const onClearQuery = async () => getStudentEnrollments();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Inscripciones",
				hrefBackButton: RouterLinks.dashboard,

				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.inscripcionesEdit]}>
						<IconButton href={RouterLinks.studentEnrollment.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.inscripciones]}
		>
			{/* Título y botón con filtros */}

			{/* <SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} /> */}
			{/* Lista de bienes */}

			<div className="flex flex-col">
				<div className="grid lg:grid-cols-6 mb-2 px-4 text-gray-700">
					<div className="col-span-1">Período</div>
					<div className="col-span-1">Cédula</div>
					<div className="col-span-2">Estudiante</div>
					<div className="col-span-2">Sede</div>
				</div>

				{studentEnrollments.length ? (
					studentEnrollments.map((bien) => (
						<StudentEnrollmentItem key={bien._id} data={bien} />
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
