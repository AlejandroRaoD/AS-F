"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useStudent from "./hooks/useStudent";
import { StudentItem } from "./components/StudentItem";

export default function EstudiantesPage() {
  const { students, getStudents } = useStudent();
  const [filters, setFilters] = useState({ name: "", age: "", phone: "" });

  // Obtener estudiantes con filtros
  useEffect(() => {
    const filteredParams = {
      limit: 20,
      ...(filters.name && { name: filters.name }),
      ...(filters.age && { age: filters.age }),
      ...(filters.phone && { phone: filters.phone }),
    };
    getStudents(filteredParams);
  }, [filters]);

  // Actualizar filtros
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Gestión de Estudiantes",
        hrefBackButton: RouterLinks.dashboard,
      }}
    >
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Título y botón con filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <Link
            href={RouterLinks.estudiantes.create}
            className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
          >
            + Crear Estudiante
          </Link>
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="text"
              name="name"
              placeholder="Filtrar por Nombre"
              value={filters.name}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="age"
              placeholder="Filtrar por Edad"
              value={filters.age}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Filtrar por Teléfono"
              value={filters.phone}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Lista de estudiantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.length > 0 ? (
            students.map((student) => (
              <div
                key={student._id}
                className="border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-gray-800">{student.name}</h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Correo:</span> {student.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Edad:</span>{" "}
                    {(student as any).age ?? "No disponible"} años
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Teléfono:</span>{" "}
                    {(student as any).phone ?? "No disponible"}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    href={RouterLinks.estudiantes.one(student._id)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Ver detalles
                  </Link>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-md hover:bg-red-600 transition">
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No se encontraron estudiantes con los filtros aplicados. Intenta nuevamente.
            </p>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}
