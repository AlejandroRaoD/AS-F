'use client';

import React, { useState } from 'react';
import PageTemplate from '../../../common/components/PageTemplate'; // Ajusta la ruta si es necesario
import RouterLinks from '@/config/RouterLinks'; // Importa las rutas configuradas

const ConstEstudioPage = () => {
  const [dates, setDates] = useState<string[]>([]); // Estado para manejar las fechas
  const [newDate, setNewDate] = useState<string>(""); // Estado para la nueva fecha

  const handleAddDate = () => {
    if (newDate.trim() !== "") {
      setDates([...dates, newDate]);
      setNewDate("");
    }
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Constancia de Estudio",
        hrefBackButton: RouterLinks.documentos.all,
        showHelpButton: false,
      }}
    >
      <div className="p-6 font-sans">
        <header className="border-b-2 border-gray-300 mb-6 pb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Generar Constancia de Estudio</h1>
          <p className="text-gray-500">
            Completa los datos necesarios para generar la constancia.
          </p>
        </header>

        <main>
          <form className="space-y-6 max-w-xl mx-auto">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                Nombre del Estudiante
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Ej: Juan Pérez"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
                Curso o Programa
              </label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                placeholder="Ej: Piano Básico"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="catedra" className="block text-sm font-medium text-gray-700">
                Cátedra
              </label>
              <select
                id="catedra"
                name="catedra"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="teclado">Teclado</option>
                <option value="coro">Coro</option>
                <option value="guitarra">Guitarra</option>
              </select>
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
