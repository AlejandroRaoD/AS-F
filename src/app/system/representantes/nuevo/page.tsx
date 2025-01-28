import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RepresentativeForm from "../components/RepresentativeForm";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo representante",
					hrefBackButton: RouterLinks.representante.all,
				}}
	

		permissionsRequired={[UserPermissions.representantesEdit]}

			>
				<RepresentativeForm redirect={RouterLinks.representante.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
