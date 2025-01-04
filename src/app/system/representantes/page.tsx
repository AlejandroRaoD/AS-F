"use client";
import { useEffect, useState } from "react";
import RouterLinks from "@/config/RouterLinks";
import PageTemplate from "../../common/components/PageTemplate";
import Link from "next/link";
import useRepresentative from "./hooks/useRepresentative";
import { RepresentativeItem } from "./components/RepresentativeItem";

export default function EstudiantesPage() {
  const { representatives, getRepresentatives } = useRepresentative();
  const [filters, setFilters] = useState({ name: "" });
  const [filteredRepresentatives, setFilteredRepresentatives] = useState([]);

  useEffect(() => {
    getRepresentatives({ limit: 20 });
  }, []);

  useEffect(() => {
    // Muestra los representantes directamente mientras los filtros no están activos
    setFilteredRepresentatives(representatives);
  }, [representatives]);

  useEffect(() => {
    // Aplica el filtro solo por nombre
    const filteredData = representatives.filter((representative) => {
      const nameMatch = representative.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      return nameMatch;
    });

    setFilteredRepresentatives(filteredData);
  }, [filters, representatives]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Representantes",
        hrefBackButton: RouterLinks.dashboard,
      }}
    >
      {/* Encabezado y botón para crear un representante */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Listado de Representantes</h1>
        <Link
          href={RouterLinks.representante.create}
          className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
        >
          + Crear Representante
        </Link>
      </div>

      {/* Filtros de búsqueda */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          value={filters.name}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      {/* Lista de representantes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepresentatives.map((n) => (
          <Link
            key={n._id}
            href={`/representantes/${n._id}`} // Redirige a la página de detalles del representante
            passHref
            className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:bg-gray-50 hover:border-green-500"
          >
            <RepresentativeItem data={n} />
          </Link>
        ))}
      </div>

      {/* Mensaje si no hay representantes */}
      {filteredRepresentatives.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No se encontraron representantes. ¡Crea el primero!
        </p>
      )}
    </PageTemplate>
  );
}
