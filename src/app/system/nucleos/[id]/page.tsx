"use client";

import React from "react";
import useNucleo from "../hooks/useNucleo";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";

const Page = () => {
  const { id } = useParams();
  const { nucleo } = useNucleo({ id });

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles del Núcleo",
        hrefBackButton: RouterLinks.nucleos.all,
        rightButtons: (
          <IconButton href={RouterLinks.nucleos.edit(id)}>
            <EditIcon />
          </IconButton>
        ),
      }}
    >
      {nucleo ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            {nucleo.name}
          </h1>
        </div>
      ) : (
        <p className="text-center text-gray-500">Cargando los detalles del núcleo...</p>
      )}
    </PageTemplate>
  );
};

export default Page;
