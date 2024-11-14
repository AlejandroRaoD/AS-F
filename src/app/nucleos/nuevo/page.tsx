import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import NucleoForm from "../components/NucleoForm";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar Nucleo",
					hrefBackButton: RouterLinks.nucleos.all,
				}}
			>
				<NucleoForm redirect={RouterLinks.nucleos.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
