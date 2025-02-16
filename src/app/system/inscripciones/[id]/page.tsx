"use client";

import React, { useEffect, useState } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import useStudentEnrollment from "../hooks/useStudentEnrollment";
import useStudent from "../../estudiantes/hooks/useStudent";
import Title from "@/app/common/components/Title";
import Button from "@/app/common/components/Button";
import useEnrollmentPeriod from "../../periodo_inscripciones/hooks/useEnrollmentPeriod";
import CatedraEnrollmentItem from "../components/CatedraEnrollmentItem";
import Spacer from "@/app/common/components/Spacer";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";
import { jsPDF } from "jspdf"; // Importa jsPDF
import useNucleo from "../../nucleos/hooks/useNucleo";

const Page = () => {
  const { id } = useParams();
  const studentEnrollmentId = getOneStringParams(id);

  const { studentEnrollment } = useStudentEnrollment({
    id: studentEnrollmentId,
  });
  const { enrollmentPeriod, getEnrollmentPeriod } = useEnrollmentPeriod();
  const { sede, getSede } = useSede();
  const { nucleo, getNucleo } = useNucleo();
  const { student, getStudent } = useStudent();
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    if (studentEnrollment) {
      getStudent(studentEnrollment.studentId);
      getSede(studentEnrollment.sedeId).then((s) => getNucleo(s.nucleoId));
      getEnrollmentPeriod(studentEnrollment.enrollmentPeriodId);
    }
  }, [studentEnrollment]);

  useEffect(() => {
    if (student && sede && enrollmentPeriod && nucleo) {
      setPdfData({
        studentName: `${student.name} ${student.lastname}`,
        studentCI: `${student.nationality}-${student.CI}`,
        studentEmail: student.email,
        studentPhone: student.phone_number[0],
        sedeName: sede.name,
        enrollmentPeriod: `${enrollmentPeriod.year}-${enrollmentPeriod.step}`,
        date: new Date(),
        nucleo: nucleo.name,
      });
    }
  }, [student, sede, enrollmentPeriod, nucleo]);

  const handleGeneratePDF = () => {
    if (pdfData) {
      const doc = new jsPDF();
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      // Agregar los logos
      doc.addImage("/images/logo-1.png", "PNG", 10, 10, 50, 50);
      doc.addImage("/images/logo-2.png", "PNG", 130, 10, 50, 50);

      // Título centrado
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text("Constancia de Inscripción", 105, 80, { align: "center" });

      // Párrafo 1 (modificado para manejar el texto largo)
      doc.setFontSize(12);
      const paragraph1 = `El Comité del Núcleo ${pdfData.nucleo}, sede ${pdfData.sedeName}, hace constar por medio de la presente que el/la estudiante ${pdfData.studentName}, portador de la cédula de identidad Nº ${pdfData.studentCI}, ha sido formalmente inscrito/a en la cátedra correspondiente durante el periodo de inscripción ${pdfData.enrollmentPeriod}.`;
      const lines1 = doc.splitTextToSize(paragraph1, 170); // Divide el texto en varias líneas
      let y = 100; // Establece la posición inicial
      lines1.forEach((line) => {
        doc.text(line, 20, y); // Imprime cada línea
        y += 10; // Ajusta la posición para la siguiente línea
      });

      // Párrafo 2 "La presente..." (modificado para manejar el texto largo)
      const paragraph2 = `La presente constancia se expide a petición de la parte interesada en San Juan de los Morros, a los ${pdfData.date.getDate()} días del mes ${pdfData.date.getMonth() + 1} del año ${pdfData.date.getFullYear()}.`;
      const lines2 = doc.splitTextToSize(paragraph2, 170); // Divide el texto en varias líneas
      lines2.forEach((line) => {
        doc.text(line, 20, y); // Imprime cada línea
        y += 10; // Ajusta la posición para la siguiente línea
      });

      // Firmas
      doc.text("Atentamente,", 105, y + 10, { align: "center" });
      doc.line(20, y + 20, 90, y + 20); // Firma 1
      doc.text("Firma", 20, y + 25);
      doc.line(120, y + 20, 190, y + 20); // Firma 2
      doc.text("Firma", 120, y + 25);

      // Guardar el PDF
      doc.save("Constancia_Estudio.pdf");
    }
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Detalles de la inscripción",
        hrefBackButton: RouterLinks.studentEnrollment.all,
        rightButtons: (
          <NeedPermissions permissions={[UserPermissions.inscripcionesEdit]}>
            <IconButton href={RouterLinks.studentEnrollment.edit(id)}>
              <EditIcon />
            </IconButton>
          </NeedPermissions>
        ),
      }}
      permissionsRequired={[UserPermissions.inscripciones]}
    >
      {studentEnrollment && (
        <SectionContainer>
          <div className="grid grid-cols-2 gap-2">
            {sede && <TextValue title="Sede" value={sede.name} />}
            {enrollmentPeriod && (
              <TextValue title="Periodo" value={pdfData?.enrollmentPeriod} />
            )}
          </div>
          <Spacer />
          <Title titleType="h3">Cátedras inscritas</Title>
          {studentEnrollment.content.map((item) => (
            <CatedraEnrollmentItem key={item.catedraId} data={item} />
          ))}
        </SectionContainer>
      )}

      {student && (
        <SectionContainer>
          <Title titleType="h3">Estudiante</Title>
          <div className="grid grid-cols-2 gap-2">
            <TextValue title="Nombre" value={pdfData?.studentName} />
            <TextValue title="Cédula" value={pdfData?.studentCI} />
            <TextValue title="Email" value={pdfData?.studentEmail} />
            <TextValue title="Teléfono" value={pdfData?.studentPhone} />
          </div>
          <div className="flex justify-end">
            <Button href={RouterLinks.estudiantes.one(student._id)}>Detalles</Button>
          </div>
        </SectionContainer>
      )}

      {student && sede && enrollmentPeriod && nucleo && (
        <SectionContainer>
          <div className="flex justify-center mt-4">
            <Button onClick={handleGeneratePDF}>
              Generar Constancia de Estudio
            </Button>
          </div>
        </SectionContainer>
      )}
    </PageTemplate>
  );
};

export default Page;
