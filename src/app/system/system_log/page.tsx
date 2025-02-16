"use client";
import React, { useEffect, useRef } from "react";
import jsPDF from "jspdf"; // Importa jsPDF

import useSystemLog from "./hooks/useSystemLog";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../user/interfaces/user.interface";
import { SystemLogItem } from "./components/systemLogItem";

const Page = () => {
  const { systemLogs, getSystemLogs } = useSystemLog();
  const logRef = useRef(null); // Referencia al contenido del log

  useEffect(() => {
    getSystemLogs();
  }, []);

  // Función para generar el PDF
  const generatePDF = () => {
    const doc = new jsPDF(); // Crea una nueva instancia de jsPDF
    const element = logRef.current; // Capturar el contenido del log
    if (!element) return;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Título del PDF
    doc.text("Historial de Registros del Sistema", 105, 20, { align: "center" });

    // Ajuste para agregar contenido del log
    let y = 30; // Comienza desde una posición vertical de 30 mm
    systemLogs.forEach((log, index) => {
      doc.text(`Log #${index + 1}:`, 10, y);
      y += 10;

      // Aquí puedes personalizar cómo mostrar los datos del log
      doc.text(`Fecha: ${log.createdAt}`, 20, y);
      y += 10;
      doc.text(`Acción: ${log.systemAction}`, 20, y);
      y += 10;
      doc.text(`Descripción: ${log.text}`, 20, y);
      y += 20; // Espacio entre logs

      // Verificar si se llegó al final de la página para agregar una nueva página
      if (y > 270) {
        doc.addPage();
        y = 20; // Reiniciar la posición para la nueva página
      }
    });

    // Guardar el archivo PDF
    doc.save("Historial_de_Registros.pdf");
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Historial de Registros del Sistema",
        hrefBackButton: RouterLinks.dashboard,
      }}
      permissionsRequired={[UserPermissions.logs]}
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

      {/* Contenedor del log para imprimir */}
      <div ref={logRef} className="flex flex-col border p-4 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
        {/* Aquí puedes agregar más estilo si es necesario, por ejemplo, márgenes y fuentes */}
        {systemLogs.map((n) => (
          <SystemLogItem data={n} key={n._id} />
        ))}
      </div>
    </PageTemplate>
  );
};

export default Page;
