import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import StudentEnrollmentForm from "../components/StudentEnrollmentForm";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar inscripción",
					hrefBackButton: RouterLinks.studentEnrollment.all,
				}}
				permissionsRequired={[UserPermissions.inscripcionesEdit]}
			>
				<StudentEnrollmentForm redirect={RouterLinks.studentEnrollment.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
