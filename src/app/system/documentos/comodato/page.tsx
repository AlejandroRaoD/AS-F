'use client';

import React, { useState } from 'react';
import PageTemplate from '../../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks';
import generatePDF from '../../../common/utils/generatePDF'; // Ajusta la ruta de importación

const ComodatoPage = () => {
  const [form, setForm] = useState({
    studentName: "",
    idNumber: "",
    instrument: "",
    serialNumber: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleGeneratePDF = () => {
    generatePDF('PagePDF', 'comodato.pdf');
  };

  const { studentName, idNumber, instrument, serialNumber, returnDate } = form;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Comodato de Instrumento",
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
              padding: 2cm; /* Asegúrate de que el contenido no se corte */
              border-radius: 5px;
              background-color: #fff;
              font-size: 12pt;
              font-family: Arial, sans-serif;
              text-align: justify; /* Justificar todo el texto */
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
          <h1 className="text-3xl font-semibold text-gray-800">Generar Comodato de Instrumento</h1>
          <p className="text-gray-500">Completa los datos necesarios para generar el comodato.</p>
        </header>

        <main>
          <form className="space-y-6 max-w-xl mx-auto">
            <div id="PagePDF">
              <div className="text-center mb-6" style={{ paddingTop: '1cm' }}>
                <h2 className="text-2xl font-semibold underline-bold">Comodato</h2>
              </div>

              <p style={{ marginTop: '2cm' }}>
                Por medio del presente documento, se hace constar que el/la estudiante <span className="underline-bold">{studentName || "_____________"}</span>, portador de la cédula de identidad Nº <span className="underline-bold">{idNumber || "_____________"}</span>, ha recibido en calidad de préstamo el instrumento <span className="underline-bold">{instrument || "_____________"}</span> con el número de serie <span className="underline-bold">{serialNumber || "_____________"}</span>. El instrumento deberá ser devuelto el día <span className="underline-bold">{returnDate || "_____________"}</span> en las mismas condiciones en las que fue entregado.
              </p>

              <p style={{ marginTop: '1.5cm' }}>
                Este documento se emite en San Juan de los Morros a los {day} días del mes de {month} del año {year}.
              </p>

              <div className="text-center" style={{ marginTop: '3cm' }}>
                <p className="text-xl font-semibold">Atentamente,</p>
                <div className="flex justify-center space-x-12 my-10">
                  <div className="border-t-2 w-1/2"><p>____________________</p></div>
                  <div className="border-t-2 w-1/2"><p>____________________</p></div>
                </div>

                <p className="font-semibold">Comité Núcleo.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Campos de entrada */}
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
                <label htmlFor="instrument" className="block text-gray-700">Instrumento</label>
                <input
                  type="text"
                  id="instrument"
                  name="instrument"
                  value={instrument}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="serialNumber" className="block text-gray-700">Número de Serie</label>
                <input
                  type="text"
                  id="serialNumber"
                  name="serialNumber"
                  value={serialNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="returnDate" className="block text-gray-700">Fecha de Devolución</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={returnDate}
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
