"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { furnitureAttributes } from "../interfaces/furniture.interface";
import useFurniture from "../hooks/useFurniture";
type typeItem = "item" | "inList";

interface props {
	data: furnitureAttributes;
	type?: typeItem;
}

export const FurnitureItem = (props: props) => {
	const { data, type } = props;

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.bienes.one(data._id)}
				className="flex p-2 border-b hover:shadow"
			>
				<div className="w-8">{data.quantity}</div>
				<div>{data.name}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.bienes.one(data._id)}
			className="grid lg:grid-cols-12 border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="col-span-1">{data.quantity}</div>
			<div className="col-span-3">{data.name}</div>
			<div className="col-span-2">{data.brand}</div>
			<div className="col-span-1">{data.model}</div>
			<div className="col-span-2">{data.serialNumber}</div>
			<div className="col-span-3">{data.localLocation}</div>
		</Link>
	);
};
