import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import UserForm from "../components/UserForm";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../interfaces/user.interface";

const Page = () => {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Registrar Nuevo Usuario",
				hrefBackButton: RouterLinks.users.all,
			}}
			permissionsRequired={[UserPermissions.users]}
		>
			{/* Formulario */}
			<UserForm redirect={RouterLinks.users.all} />
		</PageTemplate>
	);
};

export default Page;
