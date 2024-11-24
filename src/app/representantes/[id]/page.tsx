"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useRepresentative from "../hooks/useRepresentative";

const Page = () => {
	const { id } = useParams();
	const { representative } = useRepresentative({ id });
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Detalles",
					hrefBackButton: RouterLinks.representante.all,
					rightButtons: (
						<>
							<IconButton href={RouterLinks.representante.edit(id)}>
								<EditIcon />
							</IconButton>
						</>
					),
				}}
			>
				{representative && (
					<>
						<Title>{representative.name}</Title>
						{representative.phone_number.map((a) => (
							<Title key={a}>{a}</Title>
						))}
						<Title>{representative.address}</Title>
						<Title>{representative.gender}</Title>
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
