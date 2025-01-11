import html2pdf from 'html2pdf.js';

const generatePDF = (elementId, filename = 'document.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`No se encontró un elemento con el ID "${elementId}".`);
    return;
  }

  const options = {
    margin: [0.1, 0.2, 0.2, 0.2], // Márgenes ajustados: margen izquierdo un poco más pequeño
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: {
      unit: 'in',
      format: [22 / 2.54, 28 / 2.54], // Tamaño de hoja A4 en pulgadas
      orientation: 'portrait',
    },
  };

  html2pdf().set(options).from(element).save();
};

export default generatePDF;
