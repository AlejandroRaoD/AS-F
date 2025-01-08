"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { employeeAttributes } from "../interfaces/employee.interface";
import useEmployee from "../hooks/useEmployee";

interface props {
	data: employeeAttributes;
}

export const EmployeeItem = (props: props) => {
	const { data } = props;

	return (
		<div
			key={data._id}
			className="border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition"
		>
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
				<p className="text-sm text-gray-600">
					<span className="font-semibold">Cedula:</span>
					{data.CI}
				</p>
			</div>
			<div className="mt-4 flex justify-between items-center">
				<Link
					href={RouterLinks.employee.one(data._id)}
					className="text-sm text-blue-500 hover:underline"
				>
					Ver detalles
				</Link>
			</div>
		</div>
	);
};
