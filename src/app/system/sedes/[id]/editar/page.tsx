"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import SedeForm from "../../components/SedeForm";
import useSede from "../../hooks/useSede";

const Page = () => {
	const { id } = useParams();

	const { sede } = useSede({ id });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Sede",
					hrefBackButton: RouterLinks.sedes.one(id),
				}}
			>
				{sede && (
					<>
						<SedeForm data={sede} redirect={RouterLinks.sedes.one(id)} />
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
