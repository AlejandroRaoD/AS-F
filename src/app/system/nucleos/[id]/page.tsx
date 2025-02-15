"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la generación del PDF
import useNucleo from "../hooks/useNucleo";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../../sedes/hooks/useSede";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import SectionContainer from "@/app/common/components/SectionContainer";
import { SedeItem } from "../../sedes/components/SedeItem";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
  const { id } = useParams();
  const nucleoId = getOneStringParams(id);
  const { nucleo } = useNucleo({ id: nucleoId });
  const { sedes } = useSede({ query: { nucleoId } });

  const pageRef = useRef(null); // Ref para el contenedor de la página

  // Función para generar el PDF con los detalles del núcleo y sedes
  const generatePDF = () => {
    const doc = new jsPDF();

     // Título del reporte
  doc.setFontSize(16);  // Tamaño de fuente más grande para el título
  doc.text("Reporte del Núcleo", 10, 50);  // Agregar título en la parte superior

    // Agregar logo al PDF
    const logoUrl = '/images/logo-1.png';  // Ruta del logo
    doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

    if (nucleo) {
      // Detalles del núcleo
      doc.text(`Nombre del Núcleo: ${nucleo.name}`, 10, 60);
    }

    // Listado de sedes
    if (sedes && sedes.length > 0) {
      doc.text("Sedes:", 10, 80);
      sedes.forEach((sede, index) => {
        doc.text(`${index + 1}. ${sede.name}`, 10, 90 + index * 10);
      });
    } else {
      doc.text("No hay sedes disponibles", 10, 90);
    }

    // Guardar el PDF con un nombre personalizado
    doc.save(`Detalles_nucleo_${nucleoId}.pdf`);
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles del Núcleo",
        hrefBackButton: RouterLinks.nucleos.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.nucleosEdit]}>
            <IconButton href={RouterLinks.nucleos.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
      permissionsRequired={[UserPermissions.nucleos]}
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

      {/* Detalles del núcleo */}
      <SectionContainer>
        {nucleo ? (
          <Title titleType="h2">
            <b>Nombre: </b> {nucleo.name}
          </Title>
        ) : (
          <p className="text-center text-gray-500">
            Cargando los detalles del núcleo...
          </p>
        )}
      </SectionContainer>

      {/* Listado de sedes */}
      <SectionContainer>
        <Title titleType="h1"> Sedes</Title>

        <div className="flex flex-col">
          {sedes.map((sede) => (
            <SedeItem key={sede._id} data={sede} type="inList" />
          ))}
        </div>
      </SectionContainer>
    </PageTemplate>
  );
};

export default Page;
