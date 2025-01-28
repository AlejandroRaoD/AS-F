"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import usePrograma from "../hook/useProgramas";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import SectionContainer from "@/app/common/components/SectionContainer";
import useSede from "../../sedes/hooks/useSede";
import useEmployee from "../../personal/hooks/useEmployee";
import TextValue from "@/app/common/components/TextValue";
import useNucleo from "../../nucleos/hooks/useNucleo";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();
	const programaId = getOneStringParams(id);

	const { programa } = usePrograma({ id: programaId });
	const { sede, getSede } = useSede();
	const { employee, getEmployee } = useEmployee();
	const { nucleo, getNucleo } = useNucleo();

	useEffect(() => {
		if (!programa) return;

		getEmployee(programa.directorId);
		getSede(programa.sedeId).then((item) => getNucleo(item.nucleoId));
	}, [programa]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.programas.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.programaEdit]}>
						<IconButton href={RouterLinks.programas.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.programa]}
		>
			<SectionContainer>
				{programa && (
					<>
						<TextValue largeContent title="Nombre" value={programa.name} />
						<TextValue
							largeContent
							title="Descripción"
							value={programa.description}
						/>
					</>
				)}
			</SectionContainer>

			<SectionContainer>
				<Title titleType="h3">Sede</Title>

				{sede && <TextValue largeContent title="Nombre" value={sede.name} />}

				{nucleo && (
					<TextValue largeContent title="Núcleo" value={nucleo.name} />
				)}
			</SectionContainer>

			<SectionContainer>
				<Title titleType="h3">Director</Title>

				{employee && (
					<div className="grid grid-cols-2">
						<TextValue
							title="Nombre"
							value={`${employee.name} ${employee.lastname}`}
						/>

						<TextValue title="Teléfono" value={employee.phone_number[0]} />
					</div>
				)}
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
