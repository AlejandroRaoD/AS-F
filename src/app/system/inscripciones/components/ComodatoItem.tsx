"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import useStudentEnrollment from "../hooks/useStudentEnrollment";
import useSede from "../../sedes/hooks/useSede";
import useInstrument from "../../instrumentos/hooks/useInstrument";
import useStudent from "../../estudiantes/hooks/useStudent";
import { studentEnrollmentAttributes } from "../interfaces/studentEnrollment.interface";

type typeItem = "item" | "inList";

interface props {
	data: studentEnrollmentAttributes;
	type?: typeItem;
}

export const StudentEnrollmentItem = (props: props) => {
	const { data, type = "item" } = props;

	const { studentId, enrollmentPeriodId, sedeId, content } = data;

	// catedraId
	// comodatoId

	const { student } = useStudent({ id: studentId });

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.studentEnrollment.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-2">{contractNumber}</div>
				<div className="col-span-3">{instrument && instrument.name}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.studentEnrollment.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="grid lg:grid-cols-4">
				<div>{contractNumber}</div>
				<div>{instrument && instrument.name}</div>
				<div>
					{student && (
						<>
							<div>
								{student.nationality}-{student.CI}
							</div>

							<div className="text-xs -mt-1">
								{student.name} {student.lastname}
							</div>
						</>
					)}
				</div>
				<div>{new Date(endDate).toLocaleDateString()}</div>
			</div>
		</Link>
	);
};
