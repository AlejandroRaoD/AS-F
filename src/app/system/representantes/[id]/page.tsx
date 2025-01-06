"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useRepresentative from "../hooks/useRepresentative";

const Page = () => {
  const { id } = useParams();
  const { representative } = useRepresentative({ id });

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles del Representante",
        hrefBackButton: RouterLinks.representante.all,
        rightButtons: (
          <IconButton href={RouterLinks.representante.edit(id)}>
            <EditIcon />
          </IconButton>
        ),
      }}
    >
      {representative ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            {representative.name}
          </h1>

          {/* Información de contacto */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-medium text-gray-700">Teléfonos</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {representative.phone_number.map((phone) => (
                  <li key={phone} className="text-lg">{phone}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-700">Dirección</h2>
              <p className="text-lg text-gray-600">{representative.address}</p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-700">Género</h2>
              <p className="text-lg text-gray-600">{representative.gender}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Cargando los detalles del representante...</p>
      )}
    </PageTemplate>
  );
};

export default Page;
