"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../common/components/PageTemplate";
import { NucleoItem } from "./components/NucleoItem";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
  const { nucleos, getNucleos } = useNucleo();

 
  useEffect(() => {
    getNucleos({ limit: 20 });
  }, []);

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Núcleos",
        hrefBackButton: RouterLinks.dashboard, 
      }}
    >
      <div className="p-6 bg-gray-50 min-h-screen">
        {}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Listado de Núcleos</h1>
          <Link
            href={RouterLinks.nucleos.create}
            className="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition"
          >
            + Crear Núcleo
          </Link>
        </div>

        {/* Lista de núcleos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nucleos.map((n) => (
            <div
              key={n._id}
              className="border border-gray-300 bg-white rounded-md shadow-md hover:shadow-lg p-4 transition"
            >
              <NucleoItem data={n} />
            </div>
          ))}
        </div>

        {/* Mensaje si no hay núcleos */}
        {nucleos.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No se encontraron núcleos. ¡Crea el primero!
          </p>
        )}
      </div>
    </PageTemplate>
  );
};

export default Page;
