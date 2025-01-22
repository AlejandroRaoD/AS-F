"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useInstrument from "../hooks/useInstrument";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";

const Page = () => {
	const { id } = useParams();
	const instrumentId = getOneStringParams(id);
	const { instrument } = useInstrument({ id: instrumentId });
	const { sede, getSede } = useSede();

	useEffect(() => {
		if (instrument) getSede(instrument.sedeId);
	}, [instrument]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de personal",
				hrefBackButton: RouterLinks.instrument.all,
				rightButtons: (
					<IconButton href={RouterLinks.instrument.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			{/* <Button href={RouterLinks.instrument.edit(id)}>Editar datos</Button> */}

			{instrument && (
				<SectionContainer>
					<div className="grid grid-cols-2">
						<TextValue title="Nombre" value={instrument.name} />
						<TextValue title="Marca" value={instrument.brand} />
						<TextValue title="Modelo" value={instrument.model} />
						<TextValue title="Serian N°" value={instrument.serialNumber} />

						{sede && <TextValue title="Sede" value={sede.name} />}
					</div>

					<TextValue
						title="Descripción"
						value={instrument.description}
						largeContent
					/>
					<TextValue
						title="Observación"
						value={instrument.observation}
						largeContent
					/>
				</SectionContainer>
			)}
		</PageTemplate>
	);
};

export default Page;
