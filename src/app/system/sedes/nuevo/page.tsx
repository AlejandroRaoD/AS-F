import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import SedeForm from "../components/SedeForm";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Registrar Nueva Sede",
				hrefBackButton: RouterLinks.sedes.all,
			}}
		>
		
						{/* Formulario */}
						<SedeForm redirect={RouterLinks.sedes.all} />
				
		</PageTemplate>
	);
};

export default Page;
