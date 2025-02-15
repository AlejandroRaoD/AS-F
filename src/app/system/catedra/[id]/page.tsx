"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useCatedra from "../hook/useCatedra";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import usePrograma from "../../programas/hook/useProgramas";
import useSede from "../../sedes/hooks/useSede";
import useNucleo from "../../nucleos/hooks/useNucleo";
import { UserPermissions } from "../../user/interfaces/user.interface";
import NeedPermissions from "../../user/components/NeedPermissions";

const Page = () => {
  const { id } = useParams();
  const catedraId = getOneStringParams(id);

  const { catedra } = useCatedra({ id: catedraId });
  const { programa, getPrograma } = usePrograma();
  const { sede, getSede } = useSede();
  const { nucleo, getNucleo } = useNucleo();

  const pageRef = useRef(null);

  useEffect(() => {
    if (!catedra) return;

    getPrograma(catedra.programaId).then(async (i) => {
      const s = await getSede(i.sedeId);
      getNucleo(s.nucleoId);
    });
  }, [catedra]);

  // Función para generar el PDF con título y logo
  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar título centrado
    doc.setFontSize(16);
    doc.text("Reporte de la Cátedra", 105, 20, { align: "center" });

    // Agregar logo
    const logoUrl = "/images/logo-1.png";
    doc.addImage(logoUrl, "PNG", 10, 10, 40, 40); // (URL, formato, x, y, ancho, alto)

    // Agregar datos de la cátedra
    doc.setFontSize(12);
    let y = 60; // Posición inicial del texto

    if (catedra) {
      doc.text(`Nombre: ${catedra.name}`, 10, y);
      y += 10;
      doc.text(`Descripción: ${catedra.description}`, 10, y);
      y += 10;
    }

    if (programa) {
      doc.text(`Programa: ${programa.name}`, 10, y);
      y += 10;
    }

    if (sede) {
      doc.text(`Sede: ${sede.name}`, 10, y);
      y += 10;
    }

    if (nucleo) {
      doc.text(`Núcleo: ${nucleo.name}`, 10, y);
    }

    // Guardar el PDF con un nombre personalizado
    doc.save(`Reporte_Catedra_${catedraId}.pdf`);
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles",
        hrefBackButton: RouterLinks.catedra.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.catedraEdit]}>
            <IconButton href={RouterLinks.catedra.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
      permissionsRequired={[UserPermissions.catedra]}
    >
      <div className="flex justify-end mb-4">
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Descargar PDF
        </button>
      </div>

      <div id="pdf-content" ref={pageRef}>
        <SectionContainer>
          {catedra && (
            <>
              <TextValue largeContent title="Nombre" value={catedra.name} />
              <TextValue largeContent title="Descripción" value={catedra.description} />
              {programa && <TextValue largeContent title="Programa" value={programa.name} />}
              {sede && <TextValue largeContent title="Sede" value={sede.name} />}
              {nucleo && <TextValue largeContent title="Núcleo" value={nucleo.name} />}
            </>
          )}
        </SectionContainer>
      </div>
    </PageTemplate>
  );
};

export default Page;
