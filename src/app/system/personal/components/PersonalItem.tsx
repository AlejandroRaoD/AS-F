{/*"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { PersonalStatus, personalAttributes } from "../interfaces/personal.interface";
import usePersonal from "../hooks/usePersonal";

interface props {
	data: personalAttributes;
}

// Helper function to get the status label and color
const getStatusInfo = (status: PersonalStatus) => {
	switch (status) {
		case PersonalStatus.active:
			return { label: "Activo", color: "bg-green-100 text-green-800" };
		case PersonalStatus.inArchive:
			return { label: "Archivado", color: "bg-yellow-100 text-yellow-800" };
		case PersonalStatus.delete:
			return { label: "Eliminado", color: "bg-red-100 text-red-800" };
	}
};

export const PersonalItem = (props: props) => {
	const { deletePersonal } = usePersonal();

	const { data } = props;
	const statusInfo = getStatusInfo(data.status);

	const handleDelete = () => {
		deletePersonal(data._id);
	};

	return (
		<div
			key={data._id}
			className="border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition"
		>
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
				<p className="text-sm text-gray-600">
					<span className="font-semibold">Correo:</span> {data.email}
				</p>
				<p className="text-sm text-gray-600">
					<span className="font-semibold">Teléfono:</span> {data.phone ?? "No disponible"}
				</p>
				<p className="text-sm text-gray-600">
					<span className="font-semibold">Rol:</span> {data.role ?? "No asignado"}
				</p>
			</div>
			<div className="mt-4 flex justify-between items-center">
				<Link
					href={RouterLinks.personal.one(data._id)}
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
