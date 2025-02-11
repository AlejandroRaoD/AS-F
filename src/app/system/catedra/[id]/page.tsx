"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la generación del PDF
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

  const pageRef = useRef(null); // Ref para el contenedor de la página

  useEffect(() => {
    if (!catedra) return;

    getPrograma(catedra.programaId).then(async (i) => {
      const s = await getSede(i.sedeId);

      getNucleo(s.nucleoId);
    });
  }, [catedra]);

  // Función para generar el PDF con texto y el logo
  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar logo al PDF
    const logoUrl = '/images/logo-1.png';  // Ruta del logo
    doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

    if (catedra) {
      // Detalles de la cátedra
      doc.text(`Nombre: ${catedra.name}`, 10, 60);
      doc.text(`Descripción: ${catedra.description}`, 10, 70);
    }

    if (programa) {
      doc.text(`Programa: ${programa.name}`, 10, 80);
    }

    if (sede) {
      doc.text(`Sede: ${sede.name}`, 10, 90);
    }

    if (nucleo) {
      doc.text(`Núcleo: ${nucleo.name}`, 10, 100);
    }

    // Guardar el PDF con un nombre personalizado
    doc.save(`Detalles_catedra_${catedraId}.pdf`);
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
