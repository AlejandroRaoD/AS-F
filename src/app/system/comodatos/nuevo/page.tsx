import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import ComodatoForm from "../components/ComodatoForm";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar Comodato",
					hrefBackButton: RouterLinks.comodato.all,
				}}
			>
				<ComodatoForm redirect={RouterLinks.comodato.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
