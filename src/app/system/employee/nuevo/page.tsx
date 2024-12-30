import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import SedeForm from "../components/SedeForm";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nueva sede",
					hrefBackButton: RouterLinks.sedes.all,
				}}
			>
				<SedeForm redirect={RouterLinks.sedes.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
