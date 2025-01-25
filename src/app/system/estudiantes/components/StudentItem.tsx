"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import {
	StudentStatus,
	studentAttributes,
} from "../interfaces/student.interface";
import useStudent from "../hooks/useStudent";

type typeItem = "item" | "inList";

interface props {
	data: studentAttributes;
	type?: typeItem;
}

// Helper function to get the status label and color
// const getStatusInfo = (status: StudentStatus) => {
// 	switch (status) {
// 		case StudentStatus.active:
// 			return { label: "Active", color: "bg-green-100 text-green-800" };
// 		case StudentStatus.inArchive:
// 			return { label: "Archived", color: "bg-yellow-100 text-yellow-800" };
// 		case StudentStatus.delete:
// 			return { label: "Deleted", color: "bg-red-100 text-red-800" };
// 	}
// };

export const StudentItem = (props: props) => {
	const { deleteStudent } = useStudent();

	const { data, type } = props;
	const { name, CI, lastname, nationality, birthday } = data;
	// const statusInfo = getStatusInfo(data.status);

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.estudiantes.one(data._id)}
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
			href={RouterLinks.estudiantes.one(data._id)}
			className="grid lg:grid-cols-10 border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="col-span-3">{name}</div>
			<div className="col-span-3">{lastname}</div>
			<div className="col-span-2">
				{nationality}-{CI}
			</div>

			<div className="col-span-2">
				{new Date(birthday).toLocaleDateString()}
			</div>
		</Link>
	);
};
