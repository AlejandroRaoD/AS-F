'use client'; // Marca este archivo como un Client Component

import React, { useState } from "react";
import Image from "next/image";
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg";
import Link from "next/link"; // Importamos el componente Link de Next.js
import RouterLinks from "@/config/RouterLinks"; // Importamos RouterLinks
import "../leftpanel/leftpanel.css";

interface LeftPanelButtonProps {
  label: string;
  icon: string;
  href?: string; // Hacemos la prop href opcional
}

const LeftPanelButton = ({ label, icon, href }: LeftPanelButtonProps) => (
  href ? (
    <Link href={href} passHref>
      <div className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
        <span className="text-xl mr-1 transition-all duration-200 text-blue-600 group-hover:text-white">
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-700 group-hover:text-white">
          {label}
        </span>
      </div>
    </Link>
  ) : (
    <div className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
      <span className="text-xl mr-1 transition-all duration-200 text-blue-600 group-hover:text-white">
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-700 group-hover:text-white">
        {label}
      </span>
    </div>
  )
);

interface LeftPanelProps {
  isPanelCollapsed: boolean;
  togglePanel: () => void;
}

const LeftPanel = ({ isPanelCollapsed, togglePanel }: LeftPanelProps) => {
  const storedIsTablesOpen = typeof window !== 'undefined' ? localStorage.getItem("isTablesOpen") === "true" : false;
  const [isTablesOpen, setIsTablesOpen] = useState(storedIsTablesOpen);

  const toggleTables = () => {
    const newState = !isTablesOpen;
    setIsTablesOpen(newState);
    localStorage.setItem("isTablesOpen", newState.toString());
  };

  return (
    <div
      className={`fixed left-0 top-0 bottom-0 ${isPanelCollapsed ? 'w-15' : 'w-56'} bg-gradient-to-br from-gray-50 via-gray-100 to-white shadow-xl border-r border-gray-200 transition-all duration-300`}
      style={isPanelCollapsed ? {} : {
        backgroundImage: "url('/images/pentagrama.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Botón para ocultar/desplegar el panel */}
      <button
        className="absolute top-4 right-0 p-2 bg-blue-600 text-white rounded-l-md focus:outline-none flex items-center"
        onClick={togglePanel}
      >
        <span className="mr-1">{isPanelCollapsed ? '▶' : '◁'}</span>
        {isPanelCollapsed && (
          <Image
            src={imagotipoImage}
            alt="Logo"
            className="rounded-full transition-transform duration-200 transform"
            width={20}
            height={20}
          />
        )}
      </button>

      {/* Header */}
      <div className="flex flex-col items-center px-6 py-6 border-b border-gray-100 space-y-4 group">
        <div className="relative">
          {!isPanelCollapsed && (
            <Image
              src={imagotipoImage}
              alt="Logo"
              className="rounded-full shadow-2xl transition-transform duration-200 transform group-hover:scale-110"
              width={80}
              height={80}
            />
          )}
          <div className="absolute inset-0 bg-black opacity-50 rounded-full -z-10 blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-30 rounded-full"></div>
        </div>
        {!isPanelCollapsed && (
          <div className="text-center">
            <h1 className="text-xl font-extrabold text-gray-800 transition-all duration-200 group-hover:text-blue-600">
              Abreu System
            </h1>
            <p className="text-sm text-gray-500 transition-all duration-200 group-hover:text-blue-500">
              Gestión Musical
            </p>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      {!isPanelCollapsed && (
        <nav className="flex flex-col mt-2 px-4 space-y-0.5">
          <LeftPanelButton label="Inicio" icon="🏠" href="/" />
          <div className="h-2 my-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>
          <LeftPanelButton label="Estadísticas" icon="📊" href={RouterLinks.estadisticas.all} />
          <div className="h-2 my-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>
          <LeftPanelButton label="Personal" icon="👩‍💼" href={RouterLinks.personal.all} />
          <LeftPanelButton label="Estudiantes" icon="🎓" href={RouterLinks.estudiantes.all} />
          <LeftPanelButton label="Bienes" icon="🏢" href={RouterLinks.bienes.all} />
          <div className="h-2 my-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>
          <div
            className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer"
            onClick={toggleTables}
          >
            <span className="text-xl mr-1 transition-all duration-200 text-blue-600 group-hover:text-white">
              📚
            </span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-white">
              Tablas
            </span>
            <span
              className={`ml-auto transform transition-transform duration-300 ${isTablesOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </div>
          {isTablesOpen && (
            <>
              <LeftPanelButton label="Núcleo" icon="🏫" href={RouterLinks.nucleos.all} />
              <LeftPanelButton label="Sede" icon="🏢" href={RouterLinks.sedes.all} />
              <LeftPanelButton label="Programa" icon="📚" href={RouterLinks.programas.all} />
              <LeftPanelButton label="Cátedra" icon="🎶" href={RouterLinks.catedra.all} />
              <LeftPanelButton label="Representante" icon="👨‍👩‍👧" href={RouterLinks.representante.all} />
            </>
          )}
          <div className="h-2 my-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>
          <LeftPanelButton label="Documentos" icon="📄" href={RouterLinks.documentos.all} />
        </nav>
      )}
    </div>
  );
};

export default LeftPanel;
