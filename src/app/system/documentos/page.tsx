'use client'; // Esto convierte el archivo en un Client Component

import React from 'react';
import PageTemplate from '../../common/components/PageTemplate'; // Ajusta la ruta según tu proyecto
import RouterLinks from '@/config/RouterLinks'; // Asegúrate de tener esta configuración
import Link from 'next/link';

const DocumentosPage = () => {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Gestión de Documentos", // Título del Navbar
        hrefBackButton: RouterLinks.dashboard, // Ruta para el botón de retroceso
        showHelpButton: false, // Si no necesitas el botón de ayuda
      }}
    >
      <div className="p-6 font-sans">
        <header className="border-b-2 border-gray-300 mb-6 pb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Gestión de Documentos</h1>
          <p className="text-gray-500">
            Genera constancias de estudio y comodatos de instrumentos de forma rápida y sencilla.
          </p>
        </header>

        <main>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700">Constancia de Estudio</h2>
            <p className="text-gray-500 mb-2">
              Selecciona a un estudiante y genera su constancia personalizada.
            </p>
            <Link
              href="/system/documentos/constEstudio" // Ruta correcta a la nueva página para generar constancia
              passHref
            >
              <button
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
              >
                Constancia de Estudio
              </button>
            </Link>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700">Comodato</h2>
            <p className="text-gray-500 mb-2">
              Genera y administra los documentos de comodato para los instrumentos asignados.
            </p>
            <button
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
              onClick={() => alert('Función para generar comodato en construcción')}
            >
              Comodato
            </button>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">Historial de Documentos</h2>
            <p className="text-gray-500 mb-2">
              Aquí podrás ver un registro de los documentos generados recientemente.
            </p>
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-100">
              <p className="text-gray-500 text-center">
                Aún no hay documentos generados.
              </p>
            </div>
          </section>
        </main>
      </div>
    </PageTemplate>
  );
};

export default DocumentosPage;
