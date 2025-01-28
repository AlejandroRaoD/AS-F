import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import FurnitureForm from "../components/FurnitureForm";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo bien",
					hrefBackButton: RouterLinks.bienes.all,
				}}
				permissionsRequired={[UserPermissions.bienesEdit]}
			>
				<FurnitureForm redirect={RouterLinks.bienes.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
