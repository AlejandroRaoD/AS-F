"use client";

import PageTemplate from "@/app/common/components/PageTemplate";

export default function CatedraPage() {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Catedras",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-700">Página de Catedras</h1>
        <p className="text-lg text-gray-500 mt-4">
          Bienvenido a la sección de Catedras. Aquí podrás gestionar la información relacionada.
        </p>
      </div>
    </PageTemplate>
  );
}


//borrar esto al conectar

{/*"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useCatedra from "./hooks/useCatedra";
import { CatedraItem } from "./components/CatedraItem.tsx";

const Page = () => {
  const { catedras, getCatedras } = useCatedra();

  useEffect(() => {
    getCatedras({ limit: 20 });
  }, []);

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Cátedras",
        hrefBackButton: RouterLinks.dashboard,
      }}
    >
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Listado de Cátedras</h1>
          <Link
            href={RouterLinks.catedra.create}
            className="px-6 py-3 bg-green-600 text-white text-sm font-medium rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            + Crear Cátedra
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catedras.map((catedra) => (
            <Link
              key={catedra._id}
              href={`/catedra/${catedra._id}`} // Redirige a la página de detalles de la cátedra
              passHref
              className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:bg-gray-50 hover:border-green-500"
            >
              <CatedraItem data={catedra} />
            </Link>
          ))}
        </div>


        {catedras.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No se encontraron cátedras. ¡Crea la primera!
          </p>
        )}
      </div>
    </PageTemplate>
  );
};

export default Page;*/}
