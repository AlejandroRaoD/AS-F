"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useStudentEnrollment from "../../hooks/useStudentEnrollment";
import StudentEnrollmentForm from "../../components/StudentEnrollmentForm";

const Page = () => {
	const { id } = useParams();

	const studentEnrollmentId = getOneStringParams(id);
	const { studentEnrollment } = useStudentEnrollment({
		id: studentEnrollmentId,
	});

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar StudentEnrollment",
					hrefBackButton: RouterLinks.studentEnrollment.one(id),
				}}
			>
				{studentEnrollment && (
					<StudentEnrollmentForm
						data={studentEnrollment}
						redirect={RouterLinks.studentEnrollment.one(id)}
					/>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
