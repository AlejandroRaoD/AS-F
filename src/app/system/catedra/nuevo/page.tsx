import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import CatedraForm from "../components/CatedraForm";

const Page = () => {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Registrar nueva catedra",
				hrefBackButton: RouterLinks.catedra.all,
			}}
		>
			{/* <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
				<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="p-8">
		
						<div className="text-center mb-8">
							<h1 className="text-4xl font-bold text-gray-800 mb-4">
								Registrar Nueva catedra
							</h1>
						</div>

					
					</div>
				</div>
			</div> */}
			<CatedraForm redirect={RouterLinks.catedra.all} />
		</PageTemplate>
	);
};

export default Page;
