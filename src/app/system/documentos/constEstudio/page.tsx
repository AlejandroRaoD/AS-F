'use client';

import React, { useState } from 'react';
import PageTemplate from '../../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks'; // Importa las rutas configuradas

const ConstEstudioPage = () => {
  const [studentName, setStudentName] = useState(""); // Nombre del estudiante
  const [idNumber, setIdNumber] = useState(""); // Número de cédula
  const [course, setCourse] = useState(""); // Cátedra
  const [schedule, setSchedule] = useState(""); // Horario
  const [dates, setDates] = useState<string[]>([]); // Estado para manejar las fechas
  const [newDate, setNewDate] = useState<string>(""); // Estado para la nueva fecha

  const handleAddDate = () => {
    if (newDate.trim() !== "") {
      setDates([...dates, newDate]);
      setNewDate("");
    }
  };

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Constancia de Estudio",
        hrefBackButton: RouterLinks.documentos.all,
        showHelpButton: false,
      }}
    >
      <div className="p-6 font-sans">
        {/* Estilo en línea para el tamaño de la hoja y desplazamiento hacia la izquierda */}
        <style>
          {`
            #PagePDF {
              width: 21.59cm; /* Ancho de la hoja carta */
              height: 27.94cm; /* Alto de la hoja carta */
              margin: 0 auto; /* Centrado en la página */
              padding: 2cm; /* Espaciado interno para evitar que el contenido quede demasiado cerca del borde */
              border: 2px dashed #007BFF;
              border-radius: 5px;
              background-color: #fff; /* Fondo blanco para simular la hoja */
              font-size: 12pt; /* Tamaño de texto adecuado para simular el formato estándar */
              font-family: Arial, sans-serif; /* Definir Arial como fuente */
              overflow: hidden; /* Evita que el contenido se desborde fuera de la "hoja" */
              margin-left: -100px; /* Mueve el contenido 100px hacia la izquierda */
            }
            .underline-bold {
              text-decoration: underline;
              font-weight: bold;
            }
          `}
        </style>

        <header className="border-b-2 border-gray-300 mb-6 pb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Generar Constancia de Estudio</h1>
          <p className="text-gray-500">
            Completa los datos necesarios para generar la constancia.
          </p>
        </header>

        <main>
          <form className="space-y-6 max-w-xl mx-auto">
            {/* Contenedor con ID PagePDF */}
            <div
              id="PagePDF"
              className="border-2 border-dashed border-blue-500 p-4 rounded-md"
            >
              <div className="text-center mb-6" style={{ paddingTop: '5cm' }}>
                <h2 className="text-2xl font-semibold underline-bold">Constancia</h2>
              </div>

              <p style={{ marginTop: '2cm' }}>
                El suscrito comité del núcleo "Jesús María Torrealba", San Juan de los Morros - de El Sistema Nacional de Orquestas y Coros Juveniles e Infantiles de Venezuela, hace constar por medio de la presente, que el/la escolar: <span className="underline-bold">{studentName || "_____________"}</span>, portador de la cédula de identidad Nº <span className="underline-bold">{idNumber || "_____________"}</span> es un estudiante formal de nuestro núcleo en la cátedra de <span className="underline-bold">{course || "_____________"}</span> en un horario comprendido entre los días <span className="underline-bold">{schedule || "_____________"}</span>.
              </p>

              <p style={{ marginTop: '1.5cm' }}>
                Constancia que se expide a petición de la parte interesada en San Juan de los Morros a los {day} días del mes de {month} del año {year}.
              </p>

              <div className="text-center" style={{ marginTop: '3cm' }}>
                <p className="text-xl font-semibold">Atentamente,</p>
                <div className="my-6">
                  <div className="border-t-2 w-1/3 mx-auto my-2"></div>
                  <div className="border-t-2 w-1/3 mx-auto my-2"></div>
                </div>
                <p className="font-semibold">Comité Núcleo.</p>
              </div>

              {/* Líneas para la firma */}
              <div className="text-center" style={{ marginTop: '2cm' }}>
                <div className="border-t-2 w-1/3 mx-auto my-4"></div> {/* Línea 1 para firma */}
                <div className="border-t-2 w-1/3 mx-auto my-4"></div> {/* Línea 2 para firma */}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                  Nombre del Estudiante
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ej: Juan Pérez"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
                  Cédula de Identidad
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  placeholder="Ej: 12345678"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Cátedra
                </label>
                <select
                  id="course"
                  name="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 text-gray-800"
                >
                  <option value="">Selecciona una cátedra</option>
                  <option value="teclado">Teclado</option>
                  <option value="coro">Coro</option>
                  <option value="guitarra">Guitarra</option>
                </select>
              </div>

              <div>
                <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
                  Horario (Días)
                </label>
                <input
                  type="text"
                  id="schedule"
                  name="schedule"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder="Ej: Lunes, martes, miércoles, etc. de 9:00 AM a 11:00 AM"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
                  Días y Fechas
                </label>
                <div className="space-y-2">
                  {dates.map((date, index) => (
                    <div
                      key={index}
                      className="border rounded-md px-3 py-2 text-gray-700 bg-gray-100"
                    >
                      {date}
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleAddDate}
                      className="px-3 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón Generar fuera del contenedor */}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
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
