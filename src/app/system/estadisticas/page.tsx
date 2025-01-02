"use client";

import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useStudentCount from "./hooks/useStudentCount";
import useStaffCount from "./hooks/useStaffCount";
import useGoodsCount from "./hooks/useGoodsCount";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function EstadisticasPage() {
  const studentCount = useStudentCount();
  const staffCount = useStaffCount();
  const goodsCount = useGoodsCount();

  const data = {
    labels: ["Estudiantes", "Personal", "Bienes"],
    datasets: [
      {
        label: "Cantidad",
        data: [studentCount, staffCount, goodsCount],
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Estadísticas Globales",
      },
    },
    maintainAspectRatio: false, // Asegúrate de que esta opción está configurada
  };

  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Estadísticas",
        hrefBackButton: RouterLinks.dashboard, // Botón de volver atrás en el navbar
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-700 mt-6 mb-8">Estadísticas Globales</h1>

        <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-96"> {/* Contenedor para el gráfico */}
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}