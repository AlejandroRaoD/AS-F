import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import FurnitureForm from "../components/FurnitureForm";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo bien",
					hrefBackButton: RouterLinks.bienes.all,
				}}
			>
				<FurnitureForm redirect={RouterLinks.bienes.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
