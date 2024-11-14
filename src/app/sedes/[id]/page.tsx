"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../hooks/useSede";

const Page = () => {
	const { id } = useParams();
	const { sede } = useSede({ id });
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Detalles",
					hrefBackButton: RouterLinks.sedes.all,
					rightButtons: (
						<>
							<IconButton href={RouterLinks.sedes.edit(id)}>
								<EditIcon />
							</IconButton>
							{/* <Link href={RouterLinks.nucleos.edit(id)}>editar</Link> */}
						</>
					),
				}}
			>
				{sede && (
					<>
						<Title>{sede.name}</Title>
						<Title>{sede.phone_number}</Title>
						<Title>{sede.address}</Title>
						<Title>{sede.nucleoId}</Title>
						</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
