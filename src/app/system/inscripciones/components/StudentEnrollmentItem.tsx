"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import useStudent from "../../estudiantes/hooks/useStudent";
import { studentEnrollmentAttributes } from "../interfaces/studentEnrollment.interface";
import useEnrollmentPeriod from "../../periodo_inscripciones/hooks/useEnrollmentPeriod";
import useSede from "../../sedes/hooks/useSede";

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

	const { enrollmentPeriod } = useEnrollmentPeriod({
		id: data.enrollmentPeriodId,
	});
	const { sede } = useSede({ id: data.sedeId });
	const { student } = useStudent({ id: data.studentId });

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.studentEnrollment.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-2">
					{enrollmentPeriod &&
						`${enrollmentPeriod.year}-${enrollmentPeriod.step}`}
				</div>
				<div className="col-span-3">
					{student && `${student.name} ${student.lastname}`}
				</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.studentEnrollment.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="grid lg:grid-cols-6">
				<div className="col-span-1">
					{enrollmentPeriod &&
						`${enrollmentPeriod.year}-${enrollmentPeriod.step}`}
				</div>

				{student && (
					<>
						<div>
							{student.nationality}-{student.CI}
						</div>

						<div className="col-span-2">
							{student.name} {student.lastname}
						</div>
					</>
				)}

				<div className="col-span-2">{sede && sede.name}</div>
			</div>
		</Link>
	);
};
