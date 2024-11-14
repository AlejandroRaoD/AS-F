import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import NucleoForm from "../components/NucleoForm";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	return (
		<>
			<PageTemplate pageTitle="Crear Nucleo">
				<NucleoForm redirect={RouterLinks.nucleos.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
