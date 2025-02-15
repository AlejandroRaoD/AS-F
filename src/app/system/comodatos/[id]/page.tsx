"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la generación del PDF
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import useComodato from "../hooks/useComodato";
import useInstrument from "../../instrumentos/hooks/useInstrument";
import useStudent from "../../estudiantes/hooks/useStudent";
import Title from "@/app/common/components/Title";
import Button from "@/app/common/components/Button";
import { UserPermissions } from "../../user/interfaces/user.interface";
import NeedPermissions from "../../user/components/NeedPermissions";

const Page = () => {
  const { id } = useParams();
  const comodatoId = getOneStringParams(id);

  const { comodato } = useComodato({ id: comodatoId });
  const { sede, getSede } = useSede();
  const { instrument, getInstrument } = useInstrument();
  const { student, getStudent } = useStudent();

  // Creamos un ref para el contenedor que engloba TODOS los divs a incluir en el PDF
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (comodato) {
      getInstrument(comodato.instrumentId).then(async (d) => {
        await getSede(d.sedeId);
      });
      getStudent(comodato.studentId);
    }
  }, [comodato]);

  // Función para generar el PDF solo con texto y el logo
  const generatePDF = () => {
    const doc = new jsPDF();

    // Título del reporte
    doc.setFontSize(16); // Puedes ajustar el tamaño de la fuente
    doc.text("Reporte del Comodato", 10, 50); // (Texto, x, y)

    // Agregar logo al PDF
    const logoUrl = '/images/logo-1.png';  // Ruta del logo
    doc.addImage(logoUrl, 'PNG', 10, 60, 40, 40);  // (URL, formato, x, y, ancho, alto)

    if (comodato) {
      // Detalles del comodato
      doc.text(`Fecha inicio: ${new Date(comodato.initDate).toLocaleDateString()}`, 10, 100);
      doc.text(`Fecha final: ${new Date(comodato.endDate).toLocaleDateString()}`, 10, 110);
      doc.text(`N° contrato: ${comodato.contractNumber}`, 10, 120);
    }

    if (instrument) {
      doc.text("Instrumento", 10, 130);
      doc.text(`Nombre: ${instrument.name}`, 10, 140);
      doc.text(`Modelo: ${instrument.model}`, 10, 150);
      doc.text(`Marca: ${instrument.brand}`, 10, 160);
      if (sede) {
        doc.text(`Sede: ${sede.name}`, 10, 170);
      }
    }

    if (student) {
      doc.text("Estudiante", 10, 180);
      doc.text(`Nombre: ${student.name} ${student.lastname}`, 10, 190);
      doc.text(`Cédula: ${student.nationality}-${student.CI}`, 10, 200);
      doc.text(`Email: ${student.email}`, 10, 210);
      doc.text(`Teléfono: ${student.phone_number[0]}`, 10, 220);
    }

    // Guardar el PDF con un nombre personalizado
    doc.save(`Detalles_comodato_${comodatoId}.pdf`);
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles del comodato",
        hrefBackButton: RouterLinks.comodato.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.comodatosEdit]}>
            <IconButton href={RouterLinks.comodato.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
      permissionsRequired={[UserPermissions.comodatos]}
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
        {comodato && (
          <SectionContainer className="grid grid-cols-2">
            <TextValue
              title="Fecha inicio"
              value={new Date(comodato.initDate).toLocaleDateString()}
            />
            <TextValue
              title="Fecha final"
              value={new Date(comodato.endDate).toLocaleDateString()}
            />
            <TextValue title="N° contrato" value={comodato.contractNumber} />
          </SectionContainer>
        )}

        <div className="grid grid-cols-2 gap-2">
          {instrument && (
            <SectionContainer>
              <Title>Instrumento</Title>
              <TextValue title="Nombre" value={instrument.name} />
              <TextValue title="Modelo" value={instrument.model} />
              <TextValue title="Marca" value={instrument.brand} />
              {sede && <TextValue title="Sede" value={sede.name} />}
              <div className="flex justify-end">
                <Button href={RouterLinks.instrument.one(instrument._id)}>
                  Detalles
                </Button>
              </div>
            </SectionContainer>
          )}

          {student && (
            <SectionContainer>
              <Title>Estudiante</Title>
              <TextValue
                title="Nombre"
                value={`${student.name} ${student.lastname}`}
              />
              <TextValue
                title="Cédula"
                value={`${student.nationality}-${student.CI}`}
              />
              <TextValue title="Email" value={student.email} />
              <TextValue title="Telefono" value={student.phone_number[0]} />
              <div className="flex justify-end">
                <Button href={RouterLinks.estudiantes.one(student._id)}>
                  Detalles
                </Button>
              </div>
            </SectionContainer>
          )}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page;
