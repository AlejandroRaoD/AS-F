import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import {
	StudentStatus,
	studentAttributes,
} from "../interfaces/student.interface";

interface props {
	data: studentAttributes;
}

interface StudentListItemProps {
	student: studentAttributes;
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
	const { data: student } = props;
	const statusInfo = getStatusInfo(student.status);

	return (
		<li className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
				<h3 className="text-xl font-semibold text-gray-800">
					{student.name} {student.lastname}
				</h3>
				<span
					className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}
				>
					{statusInfo.label}
				</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<p className="text-sm text-gray-600">Email:</p>
					<p className="text-gray-800">{student.email}</p>
				</div>
				<div>
					<p className="text-sm text-gray-600">Phone:</p>
					<p className="text-gray-800">{student.phone_number.join(", ")}</p>
				</div>
				<div>
					<p className="text-sm text-gray-600">Nationality:</p>
					<p className="text-gray-800">{student.nationality}</p>
				</div>
				<div>
					<p className="text-sm text-gray-600">Birthday:</p>
					<p className="text-gray-800">
						{new Date(student.birthday).toLocaleDateString()}
					</p>
				</div>
			</div>
			<div className="mt-4 flex justify-between items-center">
				<p className="text-sm text-gray-600">
					{student.hasInstrument ? "Has instrument" : "No instrument"}
				</p>

				<Link
					href={RouterLinks.estudiantes.one(student._id)}
					className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
				>
					View Details
				</Link>
			</div>
		</li>
	);
};
