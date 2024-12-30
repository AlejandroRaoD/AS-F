"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useStudent from "../hooks/useStudent";

const Page = () => {
	const { id } = useParams();
	const { student } = useStudent({ id });
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Detalles",
					hrefBackButton: RouterLinks.estudiantes.all,
					rightButtons: (
						<>
							<IconButton href={RouterLinks.estudiantes.edit(id)}>
								<EditIcon />
							</IconButton>
						</>
					),
				}}
			>
				{student && (
					<>
						<Title>{student.name}</Title>
						{student.phone_number.map((a) => (
							<Title key={a}>{a}</Title>
						))}
						<Title>{student.address}</Title>
						<Title>{student.gender}</Title>
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
