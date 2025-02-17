import html2pdf from 'html2pdf.js';

const generatePDF = (elementId, filename = 'documento.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`No se encontró un elemento con el ID "${elementId}".`);
    return;
  }

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

  // Aquí aplicamos los estilos CSS internos
  const styleSheets = document.styleSheets;
  const cssRules = [];

  for (let sheet of styleSheets) {
    if (sheet.href) {
      cssRules.push(sheet.href); // Agrega las hojas de estilo externas
    } else if (sheet.rules) {
      for (let rule of sheet.rules) {
        cssRules.push(rule.cssText); // Agrega reglas internas
      }
    }
  }

  // Aplica los estilos a través de html2canvas
  html2pdf()
    .from(element)
    .set(options)
    .set({
      html2canvas: {
        css: cssRules.join(' '), // Agrega los estilos al PDF
      },
    })
    .save();
};

export default generatePDF;
