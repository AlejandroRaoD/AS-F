"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useCatedra from "../hook/useCatedra";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import usePrograma from "../../programas/hook/useProgramas";
import useSede from "../../sedes/hooks/useSede";
import useNucleo from "../../nucleos/hooks/useNucleo";

const Page = () => {
	const { id } = useParams();
	const catedraId = getOneStringParams(id);

	const { catedra } = useCatedra({ id: catedraId });
	const { programa, getPrograma } = usePrograma();
	const { sede, getSede } = useSede();
	const { nucleo, getNucleo } = useNucleo();

	useEffect(() => {
		if (!catedra) return;

		getPrograma(catedra.programaId).then(async (i) => {
			const s = await getSede(i.sedeId);

			getNucleo(s.nucleoId);
		});
	}, [catedra]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.catedra.all,
				rightButtons: (
					<IconButton href={RouterLinks.catedra.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			<SectionContainer>
				{catedra && (
					<>
						<TextValue largeContent title="Nombre" value={catedra.name} />

						<TextValue
							largeContent
							title="Descripción"
							value={catedra.description}
						/>

						{programa && (
							<TextValue largeContent title="Programa" value={programa.name} />
						)}
						{sede && <TextValue largeContent title="Sede" value={sede.name} />}
						{nucleo && (
							<TextValue largeContent title="Núcleo" value={nucleo.name} />
						)}
					</>
				)}
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
