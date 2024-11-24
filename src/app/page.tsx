"use client";
import Link from "next/link";
import PageTemplate from "./common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import NavBar from "./common/components/NavBar";

export default function Home() {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Abreu System",
      }}
    >
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Contenido Principal */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">Bienvenido</h1>

          <div className="grid grid-cols-2 gap-12">
            {/* Sección izquierda */}
            <div className="relative">
              <Link
                href={RouterLinks.estudiantes.all}
                className="absolute top-0 left-0 text-center px-10 py-6 bg-blue-500 text-white rounded-lg shadow-lg w-64 h-32 mb-8 hover:bg-blue-600 transition"
              >
                Estudiantes
              </Link>
              <Link
                href={RouterLinks.personal.all}
                className="absolute top-16 left-8 text-center px-10 py-6 bg-blue-500 text-white rounded-lg shadow-lg w-64 h-32 mb-8 hover:bg-blue-600 transition"
              >
                Personal
              </Link>
              <Link
                href={RouterLinks.bienes.all}
                className="absolute top-32 left-16 text-center px-10 py-6 bg-blue-500 text-white rounded-lg shadow-lg w-64 h-32 hover:bg-blue-600 transition"
              >
                Bienes
              </Link>
            </div>

            {/* Sección derecha */}
            <div className="space-y-4 flex flex-col items-start ml-16">
              <Link
                href={RouterLinks.nucleos.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Nucleos
              </Link>
              <Link
                href={RouterLinks.sedes.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Sedes
              </Link>
              <Link
                href={RouterLinks.programas.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Programa
              </Link>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <Link
          href="#"
          className="fixed bottom-6 right-6 w-16 h-16 flex items-center justify-center bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
        >
          <span className="text-2xl font-bold">📊</span> {/* Icono */}
        </Link>
      </div>
    </PageTemplate>
  );
}
