"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import useComodato from "../hooks/useComodato";
import useSede from "../../sedes/hooks/useSede";
import { ComodatoAttributes } from "../interfaces/comodato.interface";

type typeItem = "item" | "inList";

interface props {
	data: ComodatoAttributes;
	type?: typeItem;
}

export const ComodatoItem = (props: props) => {
	const { data, type = "item" } = props;

	const { contractNumber, endDate, initDate, instrumentId, status, studentId } =
		data;

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.comodato.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-3">{instrumentId}</div>
				<div className="col-span-2">{contractNumber}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.comodato.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="grid lg:grid-cols-4">
				<div>{instrumentId}</div>
				<div>{contractNumber}</div>
				<div>{initDate}</div>
				<div>{endDate}</div>
			</div>
		</Link>
	);
};
