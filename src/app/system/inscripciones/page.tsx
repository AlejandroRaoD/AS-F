"use client";
import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useStudentEnrollment from "./hooks/useStudentEnrollment";
import { StudentEnrollmentItem } from "./components/StudentEnrollmentItem";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";

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
				navTitle: "StudentEnrollments",
				hrefBackButton: RouterLinks.dashboard,

				rightButtons: (
	
						<IconButton href={RouterLinks.studentEnrollment.create}>
							<PlusIcon />
						</IconButton>
			
				),
			}}
		>
			{/* Título y botón con filtros */}

			{/* <SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} /> */}
			{/* Lista de bienes */}

			<div className="flex flex-col">
				<div className="grid grid-cols-4 mb-2 px-4 text-gray-700">
					<div>Contrato N°</div>
					<div>Instrumento</div>
					<div>Estudiante</div>
					<div>Finalización</div>
				</div>

				{studentEnrollments.length ? (
					studentEnrollments.map((bien) => <StudentEnrollmentItem key={bien._id} data={bien} />)
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
