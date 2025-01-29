"use client"; // Esto convierte el archivo en un Client Component

import React from "react";
import PageTemplate from "../../common/components/PageTemplate"; // Ajusta la ruta según tu proyecto
import RouterLinks from "@/config/RouterLinks"; // Asegúrate de tener esta configuración
import Link from "next/link";

const DocumentosPage = () => {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "GESTIÓN DE DOCUMENTOS", // Título del Navbar
        hrefBackButton: RouterLinks.dashboard, // Ruta para el botón de retroceso
        showHelpButton: false, // Si no necesitas el botón de ayuda
      }}
    >
      <div className="p-6 font-sans bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
        <header className="border-b-4 border-gray-500 mb-8 pb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Gestión de Documentos</h1>
          <p className="text-gray-600 text-lg mt-2">
            Crea documentos rápidamente.
          </p>
        </header>

        <main>
          {/* Sección Constancia de Estudio */}
          <section className="mb-12 text-center transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Constancia de Estudio</h2>
            <p className="text-gray-500 mb-6 text-lg">
              Genera constancias fácilmente.
            </p>
            <Link href={RouterLinks.documentos.constanciaEstudio} passHref>
              <button
                className="px-10 py-5 bg-blue-600 text-white font-semibold rounded-xl shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Crear Constancia
              </button>
            </Link>
          </section>

          {/* Sección Comodato 
          <section className="mb-12 text-center transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Comodato de Instrumentos</h2>
            <p className="text-gray-500 mb-6 text-lg">
              Administra los comodatos de los instrumentos.
            </p>
            <Link href={RouterLinks.documentos.comodato} passHref>
              <button
                className="px-10 py-5 bg-green-600 text-white font-semibold rounded-xl shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Crear Comodato
              </button>
            </Link>
          </section>*/}
        </main>
      </div>
    </PageTemplate>
  );
};

export default DocumentosPage;
