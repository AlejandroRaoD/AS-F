'use client'; // Marca este archivo como un Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg";
import Link from "next/link"; // Importamos el componente Link de Next.js
import RouterLinks from "@/config/RouterLinks"; // Importamos RouterLinks

interface LeftPanelButtonProps {
  label: string;
  icon: string;
  href?: string; // Hacemos la prop href opcional
}

const LeftPanelButton = ({ label, icon, href }: LeftPanelButtonProps) => (
  href ? (
    <Link href={href} passHref>
      <div className="flex items-center px-2 py-1.5 my-0.5 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
        <span className="text-2xl mr-2 transition-all duration-200 text-blue-600 group-hover:text-white">
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-700 group-hover:text-white">
          {label}
        </span>
      </div>
    </Link>
  ) : (
    <div className="flex items-center px-2 py-1.5 my-0.5 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
      <span className="text-2xl mr-2 transition-all duration-200 text-blue-600 group-hover:text-white">
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
        {label}
      </span>
    </div>
  )
);

const LeftPanel = () => {
  // Leer el estado desde el localStorage, si existe, y usarlo como estado inicial
  const storedIsTablesOpen = typeof window !== 'undefined' ? localStorage.getItem("isTablesOpen") === "true" : false;
  const [isTablesOpen, setIsTablesOpen] = useState(storedIsTablesOpen);

  // Función para cambiar el estado y guardarlo en localStorage
  const toggleTables = () => {
    const newState = !isTablesOpen;
    setIsTablesOpen(newState);
    localStorage.setItem("isTablesOpen", newState.toString()); // Guardamos el estado en localStorage
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-56 bg-gradient-to-br from-gray-50 via-gray-100 to-white shadow-xl border-r border-gray-200">
      {/* Header */}
      <div className="flex flex-col items-center px-6 py-8 border-b border-gray-100 space-y-4 group">
        {/* Logo en el centro */}
        <div className="relative">
          <Image
            src={imagotipoImage}
            alt="Logo"
            className="rounded-full shadow-md transition-transform duration-200 transform group-hover:scale-110"
            width={64}
            height={64}
          />
          {/* Efecto de hover sobre el logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-30 rounded-full"></div>
        </div>
        
        {/* Texto debajo del logo */}
        <div className="text-center">
          <h1 className="text-xl font-extrabold text-gray-800 transition-all duration-200 group-hover:text-blue-600">
            Abreu System
          </h1>
          <p className="text-sm text-gray-500 transition-all duration-200 group-hover:text-blue-500">
            Gestión Musical
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-2 px-4 space-y-0.5">
        {/* Inicio redirige a la página principal */}
        <LeftPanelButton label="Inicio" icon="🏠" href="/" /> 
        
        {/* Stylish Separator Above Estadísticas */}
        <div className="h-2 my-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>

        <LeftPanelButton label="Estadísticas" icon="📊" href={RouterLinks.estadisticas.all} /> {/* Ruta de Estadísticas */}

        {/* Stylish Separator Below Estadísticas */}
        <div className="h-2 my-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>

        <LeftPanelButton label="Personal" icon="👩‍💼" href={RouterLinks.personal.all} />
        <LeftPanelButton label="Estudiantes" icon="🎓" href={RouterLinks.estudiantes.all} />
        <LeftPanelButton label="Bienes" icon="🏢" href={RouterLinks.bienes.all} />

        {/* Nuevo Separador */}
        <div className="h-2 my-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>

        {/* Opción desplegable - Tablas */}
        <div
          className="flex items-center px-2 py-1.5 my-0.5 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer"
          onClick={toggleTables}
        >
          <span className="text-2xl mr-2 transition-all duration-200 text-blue-600 group-hover:text-white">
            📚
          </span>
          <span className="text-sm font-medium text-gray-700 group-hover:text-white">
            Tablas
          </span>
          <span
            className={`ml-auto transform transition-transform duration-300 ${
              isTablesOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {/* Botones desplegables */}
        {isTablesOpen && (
          <>
            <LeftPanelButton label="Núcleo" icon="🏫" href={RouterLinks.nucleos.all} />
            <LeftPanelButton label="Sede" icon="🏢" href={RouterLinks.sedes.all} />
            <LeftPanelButton label="Programa" icon="📚" href={RouterLinks.programas.all} />
            <LeftPanelButton label="Cátedra" icon="🎶" href={RouterLinks.catedra.all} />
            <LeftPanelButton label="Representante" icon="👨‍👩‍👧" href={RouterLinks.representante.all} />
          </>
        )}

        {/* Stylish Separator Below Tablas */}
        <div className="h-2 my-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>

        {/* Opción de Documentos - solo botón sin enlace */}
        <LeftPanelButton label="Documentos" icon="📄" href={undefined} />
      </nav>

      {/* Footer */}
      <div className="mt-auto px-6 py-4 border-t border-gray-100">
        <p className="text-sm text-gray-400">
          © 2024 Abreu System. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default LeftPanel;
