{/*"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { bienAttributes } from "../interfaces/bien.interface";
import useBienes from "../hooks/useBienes";

// Helper function to get the status label and color (optional, depending on the "status" of the bien)
const getStatusInfo = (status: string) => {
  switch (status) {
    case "activo":
      return { label: "Activo", color: "bg-green-100 text-green-800" };
    case "en_uso":
      return { label: "En uso", color: "bg-yellow-100 text-yellow-800" };
    case "eliminado":
      return { label: "Eliminado", color: "bg-red-100 text-red-800" };
    default:
      return { label: "Desconocido", color: "bg-gray-100 text-gray-800" };
  }
};

interface props {
  data: bienAttributes;
}

export const BienesItem = (props: props) => {
  const { deleteBien } = useBienes();
  
  const { data } = props;
  const statusInfo = getStatusInfo(data.status);

  const handleDelete = () => {
    deleteBien(data._id);
  };

  return (
    <div
      key={data._id}
      className="border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Descripción:</span> {data.description ?? "No disponible"}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Ubicación:</span> {data.location ?? "No disponible"}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Fecha de adquisición:</span> {data.purchaseDate ?? "No disponible"}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Link
          href={RouterLinks.bienes.one(data._id)}
          className="text-sm text-blue-500 hover:underline"
        >
          Ver detalles
        </Link>

        <button
          className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-md hover:bg-red-600 transition"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};*/}
