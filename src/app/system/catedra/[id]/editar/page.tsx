"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import CatedraForm from "../../components/CatedraForm";
import useCatedra from "../../hook/useCatedra";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const { catedra } = useCatedra({ id });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar catedra",
					hrefBackButton: RouterLinks.catedra.one(id),
				}}
				permissionsRequired={[UserPermissions.catedraEdit]}
			>
				{catedra && (
					<CatedraForm data={catedra} redirect={RouterLinks.catedra.one(id)} />
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
