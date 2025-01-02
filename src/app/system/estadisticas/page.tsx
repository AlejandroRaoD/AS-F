// src/app/estadisticas/page.tsx
"use client";

import { useState, useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import useStudentCount from "./hooks/useStudentCount"; // Importa el hook que creamos

// Registra los elementos de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function EstadisticasPage() {
  const studentCount = useStudentCount(); // Obtén el número total de estudiantes

  // Configuración de los datos del gráfico
  const data = {
    labels: ["Estudiantes"], // Solo necesitamos una categoría
    datasets: [
      {
        label: "Cantidad",
        data: [studentCount], // Usa el número de estudiantes
        backgroundColor: "#4CAF50", // Color del gráfico
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Asegúrate de usar un valor válido, 'top' es un valor aceptable
      },
      title: {
        display: true,
        text: "Estadísticas de Estudiantes",
      },
    },
    maintainAspectRatio: false, // Mantener relación de aspecto
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Estadísticas",
        hrefBackButton: RouterLinks.dashboard,
      }}
    >
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-700 mb-8">Estadísticas de Estudiantes</h1>

        {/* Contenedor del gráfico */}
        <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-96">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
