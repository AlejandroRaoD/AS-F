// help.tsx

import React from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

const HelpPage = () => {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Ayuda",
        hrefBackButton: RouterLinks.dashboard, 
        showHelpButton: false, // ocultar ayuda
      }}
    >
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Página de Ayuda</h1>
        <p className="text-lg text-gray-600 mb-4">
          Aquí podrás encontrar recursos y asistencia para resolver tus dudas sobre el sistema.
        </p>
        <p className="text-md text-gray-500 mb-4">
          Si tienes preguntas o problemas, no dudes en contactarnos o visitar nuestra sección de preguntas frecuentes.
        </p>

        {}
        <div className="flex gap-4">
          <Link
            href="#"
            className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow hover:bg-blue-600 transition"
          >
            Contactar Soporte
          </Link>
          <Link
            href="#"
            className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
          >
            Ver Preguntas Frecuentes
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HelpPage;
