import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import StudentForm from "../components/StudentForm";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo estudiante",
					hrefBackButton: RouterLinks.estudiantes.all,
				}}
				permissionsRequired={[UserPermissions.estudiantes]}
			>
				<StudentForm redirect={RouterLinks.estudiantes.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
