import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import NucleoForm from "../components/NucleoForm";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Registrar Núcleo",
				hrefBackButton: RouterLinks.nucleos.all,
			}}
			permissionsRequired={[UserPermissions.nucleosEdit]}
			>
			{/* <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
				<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="p-8">
						<div className="text-center mb-8">
							<h1 className="text-4xl font-bold text-gray-800 mb-4">Registrar Núcleo</h1>
						</div>

					</div>
				</div>
			</div> */}

			{/* Formulario */}
			<NucleoForm redirect={RouterLinks.nucleos.all} />
		</PageTemplate>
	);
};

export default Page;
