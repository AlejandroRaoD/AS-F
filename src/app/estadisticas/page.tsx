"use client";

import PageTemplate from "@/app/common/components/PageTemplate";

export default function EstadisticasPage() {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Estadísticas",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-700 mb-8">Estadísticas Globales</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-6xl">
          {/* Cuadro de Estadísticas 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl text-blue-500 mb-4">
              <span role="img" aria-label="icon">📊</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600">Total de Estudiantes</h3>
            <p className="text-xl text-gray-500 mt-2">1,250</p>
          </div>

          {/* Cuadro de Estadísticas 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl text-green-500 mb-4">
              <span role="img" aria-label="icon">👥</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600">Personal Registrado</h3>
            <p className="text-xl text-gray-500 mt-2">320</p>
          </div>

          {/* Cuadro de Estadísticas 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl text-orange-500 mb-4">
              <span role="img" aria-label="icon">🏫</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600">Núcleos Activos</h3>
            <p className="text-xl text-gray-500 mt-2">8</p>
          </div>

          {/* Cuadro de Estadísticas 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl text-red-500 mb-4">
              <span role="img" aria-label="icon">🎸</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600">Instrumentos Disponibles</h3>
            <p className="text-xl text-gray-500 mt-2">1,500</p>
          </div>

          {/* Cuadro de Estadísticas 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl text-purple-500 mb-4">
              <span role="img" aria-label="icon">📚</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600">Programas Ofrecidos</h3>
            <p className="text-xl text-gray-500 mt-2">15</p>
          </div>

          {/* Cuadro de Estadísticas 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl text-yellow-500 mb-4">
              <span role="img" aria-label="icon">🎶</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600">Bienes Disponibles</h3>
            <p className="text-xl text-gray-500 mt-2">350</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
