"use client";

import React from "react";
import useNucleo from "../hooks/useNucleo";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";

const Page = () => {
	const { id } = useParams();
	const { nucleo } = useNucleo({ id });
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Detalles",
					hrefBackButton: RouterLinks.nucleos.all,
					rightButtons: (
						<>
							<IconButton href={RouterLinks.nucleos.edit(id)}>
								<EditIcon />
							</IconButton>
							{/* <Link href={RouterLinks.nucleos.edit(id)}>editar</Link> */}
						</>
					),
				}}
			>
				{nucleo && (
					<>
						<Title>{nucleo?.name}</Title>
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
