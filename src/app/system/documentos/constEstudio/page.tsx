'use client';

import React, { useState } from 'react';
import PageTemplate from '../../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks';
import generatePDF from '../../../common/utils/generatePDF'; // Ajusta la ruta de importación

const ConstEstudioPage = () => {
  const [form, setForm] = useState({
    nucleus: "",
    sede: "",
    enrollmentPeriod: "",
    studentName: "",
    idNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleGeneratePDF = () => {
    generatePDF('PagePDF', 'constancia-inscripcion.pdf');
  };

  const { nucleus, sede, enrollmentPeriod, studentName, idNumber } = form;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "CONSTANCIA DE INSCRIPCIÓN",
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
              position: relative;
            }

            .header-logos {
              display: flex;
              justify-content: space-between; /* Asegura que los logos estén a los extremos */
              align-items: center; /* Alinea verticalmente */
              margin-bottom: 2cm;
            }

            .header-logo-left,
            .header-logo-right {
              width: 5cm; /* Tamaño uniforme para ambos logos */
              height: auto; /* Mantiene la proporción de los logos */
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

            /* Estilo para los inputs sin borde inferior */
            input {
              border: none;
              border-bottom: none;
              outline: none;
              border-radius: 0;
              background-color: transparent;
              font-size: 1rem;
              width: 100%;
              padding: 0.5rem;
            }
          `}
        </style>

        <header className="border-b-2 border-gray-300 mb-6 pb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Generar Constancia de Inscripción</h1>
          <p className="text-gray-500">Completa los datos necesarios para generar la constancia.</p>
        </header>

        <main>
          <form className="space-y-6 max-w-xl mx-auto">
            <div id="PagePDF">
              {/* Logos superiores */}
              <div className="header-logos">
                <img src="/images/logo-1.png" alt="Logo Izquierdo" className="header-logo-left" />
                <img src="/images/logo-2.png" alt="Logo Derecho" className="header-logo-right" />
              </div>

              <div className="text-center mb-6" style={{ paddingTop: '1cm' }}>
                <h2 className="text-2xl font-semibold underline-bold">Constancia de Inscripción</h2>
              </div>

              <p style={{ marginTop: '2cm' }}>
                El Comité del Núcleo <span className="underline-bold">{nucleus || "_____________"}</span>, sede <span className="underline-bold">{sede || "_____________"}</span>, hace constar por medio de la presente que el/la estudiante <span className="underline-bold">{studentName || "_____________"}</span>, portador de la cédula de identidad Nº <span className="underline-bold">{idNumber || "_____________"}</span>, ha sido formalmente inscrito/a en la cátedra correspondiente durante el periodo de inscripción <span className="underline-bold">{enrollmentPeriod || "_____________"}</span>.
              </p>

              <p style={{ marginTop: '1.5cm' }}>
                La presente constancia se expide a petición de la parte interesada en San Juan de los Morros, a los {day} días del mes de {month} del año {year}.
              </p>

              <div className="text-center" style={{ marginTop: '3cm' }}>
                <p className="text-xl font-semibold">Atentamente,</p>
                <div className="flex justify-center space-x-12 my-10">
                  <div className="w-1/2"><p>____________________</p></div>
                  <div className="w-1/2"><p>____________________</p></div>
                </div>

                <div className="w-1/3 mx-auto my-2"></div>
                <p className="font-semibold">Comité Núcleo.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="nucleus" className="block text-gray-700">Núcleo</label>
                <input
                  type="text"
                  id="nucleus"
                  name="nucleus"
                  value={nucleus}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="sede" className="block text-gray-700">Sede</label>
                <input
                  type="text"
                  id="sede"
                  name="sede"
                  value={sede}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="enrollmentPeriod" className="block text-gray-700">Periodo de Inscripción</label>
                <input
                  type="text"
                  id="enrollmentPeriod"
                  name="enrollmentPeriod"
                  value={enrollmentPeriod}
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
            </div>

            <button
              type="button"
              onClick={handleGeneratePDF}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:bg-blue-600"
            >
              Generar Constancia
            </button>
          </form>
        </main>
      </div>
    </PageTemplate>
  );
};

export default ConstEstudioPage;
