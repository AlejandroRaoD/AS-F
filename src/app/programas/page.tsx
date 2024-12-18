"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useProgramas from "./hook/useProgramas"; // Hook personalizado para manejar Programas
import PageTemplate from "../common/components/PageTemplate";
import { ProgramaItem } from "./components/ProgramaItem"; // Componente para renderizar cada programa
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
  const { programas, getProgramas } = useProgramas();

  useEffect(() => {
    getProgramas({ limit: 20 });
  }, []);

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Programas",
        hrefBackButton: RouterLinks.dashboard,
      }}
    >
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Encabezado y botón */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Listado de Programas</h1>
          <Link
            href={RouterLinks.programas.create}
            className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
          >
            + Crear Programa
          </Link>
        </div>

        {/* Lista de programas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programas.map((p) => (
            <Link
              key={p._id}
              href={`/programas/${p._id}`} // Redirige a la página de detalles del programa
              passHref
              className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:border-green-500 hover:bg-gray-50"
            >
              <ProgramaItem data={p} />
            </Link>
          ))}
        </div>

        {/* Mensaje si no hay programas */}
        {programas.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No se encontraron programas. ¡Crea el primero!
          </p>
        )}
      </div>
    </PageTemplate>
  );
};

export default Page;
