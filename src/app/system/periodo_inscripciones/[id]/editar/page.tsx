"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useEnrollmentPeriod from "../../hooks/useEnrollmentPeriod";
import EnrollmentPeriodForm from "../../components/EnrollmentPeriodForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const enrollmentPeriodId = getOneStringParams(id);
	const { enrollmentPeriod } = useEnrollmentPeriod({ id: enrollmentPeriodId });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar período de inscripciones",
					hrefBackButton: RouterLinks.enrollmentPeriod.one(id),
				}}
				permissionsRequired={[UserPermissions.periodosEdit]}
			>
				{enrollmentPeriod && (
					<EnrollmentPeriodForm
						data={enrollmentPeriod}
						redirect={RouterLinks.enrollmentPeriod.one(id)}
					/>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
