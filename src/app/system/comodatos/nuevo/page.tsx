import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import InstrumentForm from "../components/ComodatoForm";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo instrumento",
					hrefBackButton: RouterLinks.instrument.all,
				}}
			>
				<InstrumentForm redirect={RouterLinks.instrument.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
