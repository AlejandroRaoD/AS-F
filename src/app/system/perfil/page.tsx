'use client'; // Asegúrate de que este archivo es un Client Component
import React from 'react';
import Link from 'next/link';
import PageTemplate from '../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import LeftPanel from '../../common/components/LeftPanel'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks'; // Asegúrate de tener esta configuración

function PerfilPage () {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: 'Perfil', // Título del Navbar
        hrefBackButton: '#', // Ruta para el botón de retroceso
        showProfileButton: false, // Opcional: ocultar el botón de perfil si es necesario
      }}
    >
      <div className="flex min-h-screen bg-gray-100">
        {/* Main Content */}
        <div className="flex flex-col flex-grow ml-64">
          {/* Header */}
          <div className="bg-gray-200 py-8 px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Página de Perfil</h1>
            <p className="text-lg text-gray-600 mt-4">Aquí podrás gestionar los perfiles de los usuarios.</p>
          </div>

          {/* Buttons Container */}
          <div className="flex justify-center gap-8 mt-10 mb-16">
            {/* Botón Usuario Normal */}
            <Link
              href="#"
              className="w-72 h-72 bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
            >
              Usuario Normal
            </Link>

            {/* Botón Super Usuario */}
            <Link
              href="#"
              className="w-72 h-72 bg-green-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
            >
              Super Usuario
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default PerfilPage;
