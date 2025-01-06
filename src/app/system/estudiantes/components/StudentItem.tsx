"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import {
	StudentStatus,
	studentAttributes,
} from "../interfaces/student.interface";
import useStudent from "../hooks/useStudent";

interface props {
	data: studentAttributes;
}

// Helper function to get the status label and color
const getStatusInfo = (status: StudentStatus) => {
	switch (status) {
		case StudentStatus.active:
			return { label: "Active", color: "bg-green-100 text-green-800" };
		case StudentStatus.inArchive:
			return { label: "Archived", color: "bg-yellow-100 text-yellow-800" };
		case StudentStatus.delete:
			return { label: "Deleted", color: "bg-red-100 text-red-800" };
	}
};

export const StudentItem = (props: props) => {
	const { deleteStudent } = useStudent();

	const { data } = props;
	const statusInfo = getStatusInfo(data.status);

	const haddleDelete = () => {
		deleteStudent(data._id);
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
					<span className="font-semibold">Edad:</span>{" "}
					{(data as any).age ?? "No disponible"} años
				</p>
				<p className="text-sm text-gray-600">
					<span className="font-semibold">Teléfono:</span>{" "}
					{(data as any).phone_number[0] ?? "No disponible"}
				</p>
			</div>
			<div className="mt-4 flex justify-between items-center">
				<Link
					href={RouterLinks.estudiantes.one(data._id)}
					className="text-sm text-blue-500 hover:underline"
				>
					Ver detalles
				</Link>
			</div>
		</div>
	);
};
