'use client';

import React, { useState, useRef } from 'react';
import ReactDOMServer from 'react-dom/server'
import PageTemplate from '../../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks';


const ComodatoPage = () => {
  const [form, setForm] = useState({
    itemName: "",
    studentName: "",
    idNumber: "",
    date: "",
    condition: ""
  });


  const docRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const fillPDFData = (data) => {
    // Esta función rellena el PDF con los datos proporcionados
    const { itemName, studentName, idNumber, date, condition } = data;

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    // Llenar el contenido del PDF
    const pdfContent = document.getElementById('PagePDF');

    pdfContent.querySelector('.student-name').textContent = studentName || "_____________";
    pdfContent.querySelector('.id-number').textContent = idNumber || "_____________";
    pdfContent.querySelector('.item-name').textContent = itemName || "_____________";
    pdfContent.querySelector('.condition').textContent = condition || "_____________";
    pdfContent.querySelector('.date').textContent = `Este comodato se firma en San Juan de los Morros a los ${day} días del mes ${month} del año ${year}.`;
  };

  const handleGeneratePDF = async() => {
    // Llamar a la función para llenar el documento con los datos
    fillPDFData(form);
    // Ahora generar el PDF
     const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default
        const element = ReactDOMServer.renderToString(docRef.current);
    
        const options = {
          margin: [0.1, 0.2, 0.2, 0.2], // Márgenes ajustados
          filename: "certificado.pdf",
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 3 },
          jsPDF: {
            unit: 'in',
            format: [11, 8.5], // Tamaño A4 en orientación horizontal
            orientation: 'landscape', // Orientación horizontal
            putOnlyUsedFonts: true, // Asegura que solo se usen las fuentes necesarias
          },
        };
    
        // Usamos html2pdf para generar el PDF
        html2pdf()
          .set(options)
          .from(element)
          .save()
          .catch((error) => {
            console.error('Error generando el PDF: ', error);
          });
  };

  const { itemName, studentName, idNumber, date, condition } = form;

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Comodato",
        hrefBackButton: RouterLinks.documentos.all,
        showHelpButton: false,
      }}
    >
      <div className="p-6 font-sans">
        <style>
          {`
            #PagePDF {
              width: 22cm;
              height: 28cm;
              margin: 0 auto;
              padding: 2cm;
              border-radius: 5px;
              background-color: #fff;
              font-size: 12pt;
              font-family: Arial, sans-serif;
              text-align: justify;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
            }

            .header-logos {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 2cm;
            }

            .header-logo-left,
            .header-logo-right {
              width: 5cm;
              height: auto;
            }

            .underline-bold {
              text-decoration: underline; 
              font-weight: bold; 
            }

            .corner-logo {
              position: absolute;
              top: 2cm;
              right: 2cm;
              width: 4cm;
              height: auto;
            }
          `}
        </style>

        <header className="border-b-2 border-gray-300 mb-6 pb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Generar Comodato</h1>
          <p className="text-gray-500">Completa los datos necesarios para generar el comodato.</p>
        </header>

        <main>
          <form className="space-y-6 max-w-xl mx-auto">
            <div id="PagePDF" ref={docRef}>
              {/* Logos superiores */}
              <div className="header-logos">
                <img src="/images/logo-1.png" alt="Logo Izquierdo" className="header-logo-left" />
                <img src="/images/logo-2.png" alt="Logo Derecho" className="header-logo-right" />
              </div>

              <div className="text-center mb-6" style={{ paddingTop: '1cm' }}>
                <h2 className="text-2xl font-semibold underline-bold">Comodato</h2>
              </div>

              <p style={{ marginTop: '2cm' }}>
                El presente comodato tiene lugar entre el núcleo {"Jesús María Torrealba"}, San Juan de los Morros, de El Sistema Nacional de Orquestas y Coros Juveniles e Infantiles de Venezuela y el/la estudiante <span className="underline-bold student-name">_____________</span>, portador de la cédula de identidad Nº <span className="underline-bold id-number">_____________</span> por el cual se le otorga el siguiente bien en comodato: <span className="underline-bold item-name">_____________</span>, con las siguientes condiciones: <span className="underline-bold condition">_____________</span>.
              </p>

              <p style={{ marginTop: '1.5cm' }} className="date">
                Este comodato se firma en San Juan de los Morros a los _____ días del mes _____ del año _____.
              </p>

              <div className="text-center" style={{ marginTop: '3cm' }}>
                <p className="text-xl font-semibold">Atentamente,</p>
                <div className="flex justify-center space-x-12 my-10">
                  <div className="border-t-2 w-1/2"><p>____________________</p></div>
                  <div className="border-t-2 w-1/2"><p>____________________</p></div>
                </div>

                <div className="border-t-2 w-1/3 mx-auto my-2"></div>
                <p className="font-semibold">Comité Núcleo.</p>
              </div>
            </div>

            {/* Campos de entrada */}
            <div className="space-y-6">
              <div>
                <label htmlFor="itemName" className="block text-gray-700">Instrumento en prestamo</label>
                <input
                  type="text"
                  id="itemName"
                  name="itemName"
                  value={itemName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="studentName" className="block text-gray-700">Nombre del Estudiante</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={studentName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="idNumber" className="block text-gray-700">Cédula de Identidad</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={idNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="condition" className="block text-gray-700">Condiciones</label>
                <input
                  type="text"
                  id="condition"
                  name="condition"
                  value={condition}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-gray-700">Fecha</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleGeneratePDF}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:bg-blue-600"
            >Generar Comodato</button>
          </form>
        </main>
      </div>
    </PageTemplate>
  );
};

export default ComodatoPage;
