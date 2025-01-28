import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import InstrumentForm from "../components/InstrumentForm";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo instrumento",
					hrefBackButton: RouterLinks.instrument.all,
				}}

				permissionsRequired={[UserPermissions.instrumentosEdit]}
>
				<InstrumentForm redirect={RouterLinks.instrument.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
