// import html2pdf from 'html2pdf.js';

// const generateCertif = (elementId, filename = 'document.pdf') => {
//   const element = document.getElementById(elementId);
//   if (!element) {
//     console.error(`No se encontró un elemento con el ID "${elementId}".`);
//     return;
//   }

//   const options = {
//     margin: [0.1, 0.2, 0.2, 0.2], // Márgenes ajustados
//     filename: filename,
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 3 },
//     jsPDF: {
//       unit: 'in',
//       format: [11, 8.5], // Tamaño A4 en orientación horizontal
//       orientation: 'landscape', // Orientación horizontal
//       putOnlyUsedFonts: true, // Asegura que solo se usen las fuentes necesarias
//     },
//   };

//   // Usamos html2pdf para generar el PDF
//   html2pdf()
//     .set(options)
//     .from(element)
//     .save()
//     .catch((error) => {
//       console.error('Error generando el PDF: ', error);
//     });
// };

// export default generateCertif;
