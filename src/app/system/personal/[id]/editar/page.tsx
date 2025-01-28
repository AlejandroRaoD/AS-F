"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useEmployee from "../../hooks/useEmployee";
import EmployeeForm from "../../components/EmployeeForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const employeeId = getOneStringParams(id);
	const { employee } = useEmployee({ id: employeeId });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Personal",
					hrefBackButton: RouterLinks.employee.one(id),
				}}
				permissionsRequired={[UserPermissions.personalEdit]}
			>
				{employee && (
					<EmployeeForm
						data={employee}
						redirect={RouterLinks.employee.one(id)}
					/>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
