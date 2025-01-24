"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useRepresentative from "../hooks/useRepresentative";
import TextValue from "@/app/common/components/TextValue";
import SectionContainer from "@/app/common/components/SectionContainer";

const Page = () => {
	const { id } = useParams();
	const { representative } = useRepresentative({ id });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del Representante",
				hrefBackButton: RouterLinks.representante.all,
				rightButtons: (
					<IconButton href={RouterLinks.representante.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			{representative && (
				<SectionContainer>
					<div className="grid grid-cols-2">
						<TextValue title="Nombre" value={representative.name} />

						<TextValue title="Apellido" value={representative.lastname} />

						<TextValue
							title="Nacimiento"
							value={new Date(representative.birthday).toLocaleDateString()}
						/>

						<TextValue
							title="C.I."
							value={`${representative.nationality}-${representative.CI}`}
						/>
						<TextValue title="Genero" value={representative.gender} />
						<TextValue title="Trabajo" value={representative.job} />
					</div>

					<TextValue
						largeContent
						title="Dirección"
						value={representative.address}
					/>

					<div className="grid grid-cols-2">
						<TextValue title="Telefono" value={representative.phone_number} />
						<TextValue title="Email" value={representative.email} />
					</div>
				</SectionContainer>
			)}
		</PageTemplate>
	);
};

export default Page;
