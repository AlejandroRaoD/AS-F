"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useComodato from "../../hooks/useComodato";
import ComodatoForm from "../../components/ComodatoForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const comodatoId = getOneStringParams(id);
	const { comodato } = useComodato({ id: comodatoId });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Comodato",
					hrefBackButton: RouterLinks.comodato.one(id),
				}}
				permissionsRequired={[UserPermissions.comodatosEdit]}
			>
				{comodato && (
					<ComodatoForm
						data={comodato}
						redirect={RouterLinks.comodato.one(id)}
					/>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
