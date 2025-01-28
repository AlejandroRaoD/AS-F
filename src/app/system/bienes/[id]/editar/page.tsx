"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useFurniture from "../../hooks/useFurniture";
import FurnitureForm from "../../components/FurnitureForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const furnitureId = getOneStringParams(id);
	const { furniture } = useFurniture({ id: furnitureId });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Bien",
					hrefBackButton: RouterLinks.bienes.one(id),
				}}
				permissionsRequired={[UserPermissions.bienesEdit]}
			>
				{furniture && (
					<FurnitureForm
						data={furniture}
						redirect={RouterLinks.bienes.one(id)}
					/>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
