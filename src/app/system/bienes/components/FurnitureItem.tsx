"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { furnitureAttributes } from "../interfaces/furniture.interface";
import useFurniture from "../hooks/useFurniture";

interface props {
	data: furnitureAttributes;
}

export const FurnitureItem = (props: props) => {
	const { deleteFurniture } = useFurniture();

	const { data } = props;

	const handleDelete = () => {
		deleteFurniture(data._id);
	};

	return (
		<div
			key={data._id}
			className="border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition"
		>
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
				<p className="text-sm text-gray-600">
					<span className="font-semibold">Descripción:</span>{" "}
					{data.description ?? "No disponible"}
				</p>
			</div>
			<div className="mt-4 flex justify-between items-center">
				<Link
					href={RouterLinks.bienes.one(data._id)}
					className="text-sm text-blue-500 hover:underline"
				>
					Ver detalles
				</Link>
			</div>
		</div>
	);
};
