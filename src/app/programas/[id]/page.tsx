"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../hooks/useSede";

const Page = () => {
  const { id } = useParams();
  const { sede } = useSede({ id });

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles de la Sede",
        hrefBackButton: RouterLinks.sedes.all,
        rightButtons: (
          <IconButton href={RouterLinks.sedes.edit(id)}>
            <EditIcon />
          </IconButton>
        ),
      }}
    >
      {sede ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            {sede.name}
          </h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Núcleo: {sede.nucleoId}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-500">Cargando los detalles de la sede...</p>
      )}
    </PageTemplate>
  );
};

export default Page;
