import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import SedeForm from "../components/SedeForm";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Registrar Nueva Sede",
				hrefBackButton: RouterLinks.sedes.all,
			}}
			permissionsRequired={[UserPermissions.sedesEdit]}
		>
			{/* Formulario */}
			<SedeForm redirect={RouterLinks.sedes.all} />
		</PageTemplate>
	);
};

export default Page;
