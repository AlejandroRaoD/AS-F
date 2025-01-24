import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import EnrollmentPeriodForm from "../components/EnrollmentPeriodForm";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo período de inscripciones",
					hrefBackButton: RouterLinks.enrollmentPeriod.all,
				}}
			>
				<EnrollmentPeriodForm redirect={RouterLinks.enrollmentPeriod.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
