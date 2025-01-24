import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import StudentEnrollmentForm from "../components/StudentEnrollmentForm";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar inscripción",
					hrefBackButton: RouterLinks.studentEnrollment.all,
				}}
			>
				<StudentEnrollmentForm redirect={RouterLinks.studentEnrollment.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
