import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import ComodatoForm from "../components/ComodatoForm";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar Comodato",
					hrefBackButton: RouterLinks.comodato.all,
				}}
				permissionsRequired={[UserPermissions.comodatosEdit]}
			>
				<ComodatoForm redirect={RouterLinks.comodato.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
