'use client';

import React, { useState, useRef } from 'react';
import ReactDOMServer from 'react-dom/server'
import PageTemplate from '../../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks';

const CertificadoPage = () => {
  const [form, setForm] = useState({
    participantName: "",
    eventName: "",
    date: "",
  });

  const docRef = useRef(null)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleGeneratePDF = async () => {
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

  const { participantName, eventName, date } = form;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Certificado de Participación",
        hrefBackButton: RouterLinks.documentos.all,
        showHelpButton: false,
      }}
    >
      <div className="p-6 font-sans" >
        <style>
          {`
            #PagePDF {
              width: 28cm;
              height: 22cm;
              margin: 0 auto;
              padding: 2cm; /* Asegúrate de que el contenido no se corte */
              border-radius: 5px;
              background-color: #fff;
              font-size: 12pt;
              font-family: Arial, sans-serif;
              text-align: center; /* Centrar todo el contenido */
              overflow: hidden;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .underline-bold { 
              text-decoration: underline; 
              font-weight: bold; 
            }
          `}
        </style>

        <header className="border-b-2 border-gray-300 mb-6 pb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Generar Certificado de Participación</h1>
          <p className="text-gray-500">Completa los datos necesarios para generar el certificado.</p>
        </header>

        <main>
          <form className="space-y-6 max-w-xl mx-auto">
            <div id="PagePDF" ref={docRef}>
              <div className="text-center mb-6" style={{ paddingTop: '1cm' }}>
                <h2 className="text-2xl font-semibold underline-bold">Certificado de Participación</h2>
              </div>

              <p style={{ marginTop: '2cm' }}>
                Se certifica que <span className="underline-bold">{participantName || "_____________"}</span>,
                ha participado en el evento <span className="underline-bold">{eventName || "_____________"}</span>,
                llevado a cabo el día <span className="underline-bold">{date || "_____________"}</span>,
                demostrando compromiso y excelencia.
              </p>

              <p style={{ marginTop: '1.5cm' }}>
                Este certificado se emite en San Juan de los Morros a los {day} días del mes de {month} del año {year}.
              </p>

              <div className="text-center" style={{ marginTop: '3cm' }}>
                <p className="text-xl font-semibold">Atentamente,</p>
                <div className="flex justify-center space-x-12 my-10">
                  <div className="border-t-2 w-1/2"><p>____________________</p></div>
                  <div className="border-t-2 w-1/2"><p>____________________</p></div>
                </div>

                <p className="font-semibold">Comité Organizador.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Campos de entrada */}
              <div>
                <label htmlFor="participantName" className="block text-gray-700">Nombre del Participante</label>
                <input
                  type="text"
                  id="participantName"
                  name="participantName"
                  value={participantName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="eventName" className="block text-gray-700">Nombre del Evento</label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={eventName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-gray-700">Fecha del Evento</label>
                <input
                  type="date"
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
            >Generar Certificado</button>
          </form>
        </main>
      </div>
    </PageTemplate>
  );
};

export default CertificadoPage;
