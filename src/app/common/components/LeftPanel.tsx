"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg";
import RouterLinks from "@/config/RouterLinks";

interface LeftPanelButtonProps {
  href: string;
  label: string;
  icon: string;
}

const LeftPanelButton = ({ href, label, icon }: LeftPanelButtonProps) => (
  <Link
    href={href}
    className="flex items-center px-6 py-3 my-1 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group"
  >
    <span className="text-2xl mr-4 transition-all duration-200 text-blue-600 group-hover:text-white">
      {icon}
    </span>
    <span className="text-md font-medium text-gray-700 group-hover:text-white">
      {label}
    </span>
  </Link>
);

const LeftPanel = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-56 bg-white shadow-xl border-r border-gray-200">
      {/* Header */}
      <div className="flex items-center px-6 py-8 border-b border-gray-100">
        <Image
          src={imagotipoImage}
          alt="Logo"
          className="rounded-full shadow-md"
          width={48}
          height={48}
        />
        <div className="ml-4">
          <h1 className="text-lg font-bold text-gray-800">Abreu System</h1>
          <p className="text-sm text-gray-500">Gestión Musical</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-4 px-4 space-y-1">
        <LeftPanelButton
          href={RouterLinks.dashboard}
          label="Inicio"
          icon="🏠"
        />
        <LeftPanelButton
          href={RouterLinks.estadisticas.all}
          label="Estadísticas"
          icon="📊"
        />
        <LeftPanelButton
          href={RouterLinks.personal.all}
          label="Personal"
          icon="👩‍💼"
        />
        <LeftPanelButton
          href={RouterLinks.estudiantes.all}
          label="Estudiantes"
          icon="🎓"
        />
        <LeftPanelButton
          href={RouterLinks.bienes.all}
          label="Bienes"
          icon="🏢"
        />
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
