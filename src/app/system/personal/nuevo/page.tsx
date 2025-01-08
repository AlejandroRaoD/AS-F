import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import EmployeeForm from "../components/EmployeeForm";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo personal",
					hrefBackButton: RouterLinks.employee.all,
				}}
			>
				<EmployeeForm redirect={RouterLinks.employee.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
