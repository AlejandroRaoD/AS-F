import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import EmployeeForm from "../components/EmployeeForm";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo personal",
					hrefBackButton: RouterLinks.employee.all,
				}}
				permissionsRequired={[UserPermissions.personalEdit]}
			>
				<EmployeeForm redirect={RouterLinks.employee.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
