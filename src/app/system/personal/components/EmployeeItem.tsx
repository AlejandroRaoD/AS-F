"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { employeeAttributes } from "../interfaces/employee.interface";
import useEmployee from "../hooks/useEmployee";

type typeItem = "item" | "inList";

interface props {
	data: employeeAttributes;
	type?: typeItem;
}

export const EmployeeItem = (props: props) => {
	const { data, type = "item" } = props;

	const { name, lastname, nationality, CI, phone_number, businessPosition } =
		data;

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.employee.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-3">{name}</div>
				<div className="col-span-2">
					{nationality}-{CI}
				</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.employee.one(data._id)}
			className="grid lg:grid-cols-12 border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="col-span-3">{name}</div>
			<div className="col-span-3">{lastname}</div>
			<div className="col-span-2">
				{nationality}-{CI}
			</div>
			<div className="col-span-3">{phone_number[0]}</div>
			<div className="col-span-1">{businessPosition}</div>
		</Link>
	);
};
