"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la generación del PDF
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useFurniture from "../hooks/useFurniture";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
  const { id } = useParams();
  const furnitureId = getOneStringParams(id);
  const { furniture } = useFurniture({ id: furnitureId });
  const { sede, getSede } = useSede();

  const pageRef = useRef(null); // Ref para el contenedor de la página

  useEffect(() => {
    if (!furniture) return;

    getSede(furniture.sedeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [furniture]);

  // Función para generar el PDF con texto y el logo
  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar logo al PDF
    const logoUrl = '/images/logo-1.png';  // Ruta del logo
    doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

    if (furniture) {
      // Detalles del mobiliario
      doc.text(`Nombre: ${furniture.name}`, 10, 60);
      doc.text(`Cantidad: ${furniture.quantity}`, 10, 70);
      doc.text(`Descripción: ${furniture.description}`, 10, 80);
      doc.text(`Serial: ${furniture.serialNumber}`, 10, 90);
      doc.text(`Marca: ${furniture.brand}`, 10, 100);
      doc.text(`Modelo: ${furniture.model}`, 10, 110);
      doc.text(`Observación: ${furniture.observation}`, 10, 120);
      doc.text(`Lugar: ${furniture.localLocation}`, 10, 130);

      if (sede) {
        doc.text(`Sede: ${sede.name}`, 10, 140);
      }
    }

    // Guardar el PDF con un nombre personalizado
    doc.save(`Detalles_mobiliario_${furnitureId}.pdf`);
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles",
        hrefBackButton: RouterLinks.bienes.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.bienesEdit]}>
            <IconButton href={RouterLinks.bienes.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
    >
      {/* Botón para generar el PDF */}
      <div className="flex justify-end mb-4">
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Descargar PDF
        </button>
      </div>

      {/* Contenedor de datos (para visualización, no se imprime en el PDF) */}
      <div id="pdf-content" ref={pageRef}>
        <SectionContainer className="grid lg:grid-cols-2">
          {furniture ? (
            <>
              <TextValue title="Nombre" value={furniture.name} />
              <TextValue title="Cantidad" value={furniture.quantity} />
              <TextValue title="Descripción" value={furniture.description} />
              <TextValue title="Serial" value={furniture.serialNumber} />
              <TextValue title="Marca" value={furniture.brand} />
              <TextValue title="Modelo" value={furniture.model} />
              <TextValue title="Observación" value={furniture.observation} />
              <TextValue title="Lugar" value={furniture.localLocation} />

              {sede && <TextValue title="Sede" value={sede.name} />}
            </>
          ) : (
            <p className="text-center text-gray-500">Cargando los detalles del mobiliario...</p>
          )}
        </SectionContainer>
      </div>
    </PageTemplate>
  );
};

export default Page;
