/* "use client"; // Esta línea asegura que el código solo se ejecute en el cliente

import React from 'react';
import ReactDOMServer from 'react-dom/server';

const generatePDF = async (elementId, filename = 'documento.pdf') => {
  // Cargar html2pdf.js de manera dinámica
  const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default;

  // Buscar el elemento con el ID que se pasa
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`No se encontró un elemento con el ID "${elementId}".`);
    return;
  }

  // Obtener el HTML del elemento
  const content = element.innerHTML;

  // Configurar las opciones para html2pdf
  const options = {
    margin: [0.5, 0.5, 0.5, 0.5], // Ajusta los márgenes si es necesario
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 3,  // Aumentar escala mejora la calidad
      logging: true,  // Habilita el log para ver qué está pasando
      useCORS: true,  // Permite cargar imágenes desde URLs externas
    },
    jsPDF: {
      unit: 'in',
      format: [22 / 2.54, 28 / 2.54], // Tamaño A4 en pulgadas
      orientation: 'portrait', // Orientación vertical
    },
  };

  // Generar y guardar el PDF
  html2pdf().set(options).from(content).save();
};

export default generatePDF;
 */