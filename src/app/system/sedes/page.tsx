"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useSede from "./hooks/useSede";
import { SedeItem } from "./components/SedeItem";

const Page = () => {
  const { sedes, getSedes } = useSede();
  const [search, setSearch] = useState("");
  const [filteredSedes, setFilteredSedes] = useState([]);

  useEffect(() => {
    getSedes({ limit: 20 });
  }, []);

  useEffect(() => {
    setFilteredSedes(
      sedes.filter((sede) =>
        sede.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, sedes]);

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Sedes",
        hrefBackButton: RouterLinks.dashboard,
      }}
    >
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Encabezado y botón */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Listado de Sedes</h1>
          <Link
            href={RouterLinks.sedes.create}
            className="px-6 py-3 bg-green-600 text-white text-sm font-medium rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            + Crear Sede
          </Link>
        </div>

        {/* Filtro de búsqueda */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Lista de sedes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSedes.map((sede) => (
            <Link
              key={sede._id}
              href={`/sedes/${sede._id}`} // Redirige a la página de detalles de la sede
              passHref
              className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:bg-gray-50 hover:border-green-500"
            >
              <SedeItem data={sede} />
            </Link>
          ))}
        </div>

        {/* Mensaje si no hay sedes */}
        {filteredSedes.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No se encontraron sedes. ¡Crea la primera!
          </p>
        )}
      </div>
    </PageTemplate>
  );
};

export default Page;
