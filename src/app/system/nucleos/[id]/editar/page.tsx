"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import useNucleo from "../../hooks/useNucleo";
import NucleoForm from "../../components/NucleoForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const { nucleo } = useNucleo({ id });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Nucleo",
					hrefBackButton: RouterLinks.nucleos.one(id),
				}}
				permissionsRequired={[UserPermissions.nucleosEdit]}
			>
				{nucleo && (
					<>
						<NucleoForm data={nucleo} redirect={RouterLinks.nucleos.one(id)} />
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
