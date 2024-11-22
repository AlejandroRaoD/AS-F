"use client";
import Link from "next/link";
import PageTemplate from "./common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Abreu System",
			}}
		>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<h1 className="text-4xl font-bold text-gray-800 mb-12">Bienvenido</h1>

				<div className="grid grid-cols-2 gap-12">
					{/* Sección izquierda */}
					<div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
						<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
							Administración
						</h2>
						<div className="space-y-4">
							<Link
								href="#"
								className="block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
							>
								Estudiantes
							</Link>
							<Link
								href="#"
								className="block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
							>
								Bienes
							</Link>
							<Link
								href="#"
								className="block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
							>
								Personal
							</Link>
						</div>
					</div>

					{/* Sección derecha */}
					<div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
						<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
							Configuración
						</h2>
						<div className="space-y-4">
							<Link
								href={RouterLinks.nucleos.all}
								className="block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
							>
								Nucleos
							</Link>
							<Link
								href={RouterLinks.sedes.all}
								className="block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
							>
								Sedes
							</Link>
							<Link
								href="#"
								className="block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
							>
								Programa
							</Link>
						</div>
					</div>
				</div>
			</div>
		</PageTemplate>
	);
}
