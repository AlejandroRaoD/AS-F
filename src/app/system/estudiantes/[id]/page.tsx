"use client";

import React, { useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF

import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useStudent from "../hooks/useStudent";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useStudentRelation from "../hooks/useStudentRelation";
import Button from "@/app/common/components/Button";
import StudentRelationItem from "../components/StudentRelationItem";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
  const { id } = useParams();
  const studentId = getOneStringParams(id);

  const { student } = useStudent({ id: studentId });
  const { studentRelations } = useStudentRelation({ query: { studentId } });

  const pageRef = useRef<HTMLDivElement>(null); // Referencia al contenido de la página

  // Función para generar el PDF con jsPDF
  const generatePDF = () => {
    const doc = new jsPDF(); // Crear una nueva instancia de jsPDF
    const element = pageRef.current; // Capturar el contenido de la página

    if (!element) return;

    // Cargar el logo de fondo con un tamaño adecuado
    doc.addImage("/images/logo-1.png", "PNG", 10, 10, 60, 20); // Logo de fondo (ajustado a un tamaño más pequeño)

    // Título del reporte
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("Reporte de Detalles del Estudiante", 10, 40); // Título en la parte superior

    // Agregar el contenido del estudiante al PDF (solo texto)
    let y = 60; // Coordenada Y para el texto (para que no se superponga al logo)
    if (student) {
      doc.setFontSize(12); // Establecer el tamaño de fuente para el contenido
      doc.text(`Nombre: ${student.name} ${student.lastname}`, 10, y);
      y += 10;
      doc.text(`Nacimiento: ${new Date(student.birthday).toDateString()}`, 10, y);
      y += 10;
      doc.text(`C.I.: ${student.nationality}-${student.CI}`, 10, y);
      y += 10;
      doc.text(`Dirección: ${student.address}`, 10, y);
      y += 10;
      doc.text(`Género: ${student.gender}`, 10, y);
      y += 10;
      doc.text(`Teléfono: ${student.phone_number}`, 10, y);
      y += 10;
      doc.text(`Email: ${student.email}`, 10, y);
    }

    // Guardar el PDF con el contenido del estudiante
    doc.save(`Detalles_estudiante_${studentId}.pdf`);
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles",
        hrefBackButton: RouterLinks.estudiantes.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.estudiantesEdit]}>
            <IconButton href={RouterLinks.estudiantes.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
      permissionsRequired={[UserPermissions.estudiantes]}
    >
      {/* Botón para generar PDF */}
      <div className="flex justify-end mb-4">
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Descargar PDF
        </button>
      </div>

      <SectionContainer ref={pageRef}> {/* Contenedor con la referencia */}
        {student && (
          <>
            <div className="grid grid-cols-2">
              <TextValue title="Nombre" value={student.name} />
              <TextValue title="Apellido" value={student.lastname} />
              <TextValue
                title="Nacimiento"
                value={new Date(student.birthday).toDateString()}
              />
              <TextValue
                title="C.I."
                value={`${student.nationality}-${student.CI}`}
              />
              <TextValue title="Direccion" value={student.address} />
              <TextValue title="Genero" value={student.gender} />
            </div>

            <div className="grid grid-cols-2">
              <TextValue title="Telefono" value={student.phone_number} />
              <TextValue title="Email" value={student.email} />
            </div>
          </>
        )}
      </SectionContainer>

      <SectionContainer>
        <div className="flex justify-between">
          <Title titleType="h3">Relaciones</Title>

          <Button href={RouterLinks.estudiantes.relaciones(studentId)}>
            Editar relaciones
          </Button>
        </div>

        <div>
          {studentRelations.map((a) => (
            <StudentRelationItem key={a._id} data={a} />
          ))}
        </div>
      </SectionContainer>
    </PageTemplate>
  );
};

export default Page;
