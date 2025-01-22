"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { instrumentAttributes } from "../interfaces/instrument.interface";
import useInstrument from "../hooks/useInstrument";
import useSede from "../../sedes/hooks/useSede";

type typeItem = "item" | "inList";

interface props {
	data: instrumentAttributes;
	type?: typeItem;
}

export const InstrumentItem = (props: props) => {
	const { data, type = "item" } = props;

	const { name, serialNumber, brand, description, model, observation, sedeId } =
		data;

	const { sede } = useSede({ id: sedeId });

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.instrument.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-3">{name}</div>
				<div className="col-span-2">{serialNumber}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.instrument.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="grid lg:grid-cols-4">
				<div>{name}</div>
				<div>{brand}</div>
				<div>{model}</div>
				<div>{serialNumber}</div>
			</div>

			<div className="text-sm">
				{/* <div className="col-span-3">Descripción: {description}</div> */}
				<div className="col-span-2">Sede: {sede && sede.name}</div>
			</div>
		</Link>
	);
};
