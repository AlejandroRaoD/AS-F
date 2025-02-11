import html2pdf from 'html2pdf.js';

const generatePDF = (elementId, filename = 'document.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`No se encontró un elemento con el ID "${elementId}".`);
    return;
  }

  const options = {
    margin: [0.1, 0.2, 0.2, 0.2], // Márgenes ajustados
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: {
      unit: 'in',
      format: [22 / 2.54, 28 / 2.54], // Tamaño de hoja A4 en pulgadas
      orientation: 'portrait',
    },
  };

  // Configuración para el logo pequeño en la parte superior
  const logoUrl = '/images/logo-1.png'; // Asegúrate de que la ruta sea correcta
  const img = new Image();
  img.src = logoUrl;

  img.onload = () => {
    const doc = new jsPDF(options.jsPDF);

    // Añadir el logo a la página
    doc.addImage(img, 'JPEG', 10, 10, 50, 50); // Ajusta la posición y tamaño del logo

    // Generar el contenido a partir del elemento de la página
    doc.html(element, {
      margin: [60, 20, 20, 20], // Deja espacio para el logo en la parte superior
      callback: function (doc) {
        doc.save(filename); // Guarda el PDF generado
      },
    });
  };
};

export default generatePDF;
