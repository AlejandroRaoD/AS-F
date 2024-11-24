"use client";
import { useEffect } from "react";

import RouterLinks from "@/config/RouterLinks";
import PageTemplate from "../common/components/PageTemplate";
import Link from "next/link";
import useStudent from "./hooks/useStudent";
import { StudentItem } from "./components/StudentItem";

export default function EstudiantesPage() {
	const { students, getStudents } = useStudent();

	useEffect(() => {
		getStudents({ limit: 20 });
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Gestión de Estudiantes",
				hrefBackButton: RouterLinks.dashboard,
			}}
		>
			<>
				{/* Contenido principal */}
				<div className="flex flex-col items-center justify-center flex-grow">
					<h1 className="text-4xl font-bold text-gray-800 mb-6">
						Página de Estudiantes
					</h1>
					<p className="text-lg text-gray-600">
						Aquí podrás gestionar toda la información de los estudiantes del
						sistema.
					</p>
				</div>

				<Link
					href={RouterLinks.estudiantes.create}
					className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
				>
					Crear
				</Link>

				{students.map((n) => (
					<StudentItem key={n._id} data={n} />
				))}
			</>
		</PageTemplate>
	);
}
