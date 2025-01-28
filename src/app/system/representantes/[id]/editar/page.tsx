"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import useRepresentative from "../../hooks/useRepresentative";
import RepresentativeForm from "../../components/RepresentativeForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const { representative } = useRepresentative({ id });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Representante",
					hrefBackButton: RouterLinks.representante.one(id),
				}}
				permissionsRequired={[UserPermissions.representantesEdit]}
			>
				{representative && (
					<>
						<RepresentativeForm
							data={representative}
							redirect={RouterLinks.representante.one(id)}
						/>
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
