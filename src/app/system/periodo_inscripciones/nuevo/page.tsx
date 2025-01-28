import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import EnrollmentPeriodForm from "../components/EnrollmentPeriodForm";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo período de inscripciones",
					hrefBackButton: RouterLinks.enrollmentPeriod.all,
				}}
				permissionsRequired={[UserPermissions.periodosEdit]}
			>
				<EnrollmentPeriodForm redirect={RouterLinks.enrollmentPeriod.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
