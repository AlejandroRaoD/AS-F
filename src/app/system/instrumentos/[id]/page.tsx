"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la generación del PDF
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useInstrument from "../hooks/useInstrument";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
  const { id } = useParams();
  const instrumentId = getOneStringParams(id);
  const { instrument } = useInstrument({ id: instrumentId });
  const { sede, getSede } = useSede();

  const pageRef = useRef(null); // Ref para el contenedor de la página

  useEffect(() => {
    if (instrument) getSede(instrument.sedeId);
  }, [instrument]);

  // Función para generar el PDF con texto y el logo
  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar logo al PDF
    const logoUrl = '/images/logo-1.png';  // Ruta del logo
    doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

    if (instrument) {
      // Detalles del instrumento
      doc.text(`Nombre: ${instrument.name}`, 10, 60);
      doc.text(`Marca: ${instrument.brand}`, 10, 70);
      doc.text(`Modelo: ${instrument.model}`, 10, 80);
      doc.text(`Serial N°: ${instrument.serialNumber}`, 10, 90);

      if (sede) {
        doc.text(`Sede: ${sede.name}`, 10, 100);
      }

      doc.text(`Descripción: ${instrument.description}`, 10, 110);
      doc.text(`Observación: ${instrument.observation}`, 10, 120);
    }

    // Guardar el PDF con un nombre personalizado
    doc.save(`Detalles_instrumento_${instrumentId}.pdf`);
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles del instrumento",
        hrefBackButton: RouterLinks.instrument.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.inscripcionesEdit]}>
            <IconButton href={RouterLinks.instrument.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
      permissionsRequired={[UserPermissions.instrumentos]}
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
      {instrument && (
        <SectionContainer>
          <div className="grid grid-cols-2">
            <TextValue title="Nombre" value={instrument.name} />
            <TextValue title="Marca" value={instrument.brand} />
            <TextValue title="Modelo" value={instrument.model} />
            <TextValue title="Serial N°" value={instrument.serialNumber} />

            {sede && <TextValue title="Sede" value={sede.name} />}
          </div>

          <TextValue title="Descripción" value={instrument.description} largeContent />
          <TextValue title="Observación" value={instrument.observation} largeContent />
        </SectionContainer>
      )}
    </PageTemplate>
  );
};

export default Page;
