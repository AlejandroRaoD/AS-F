"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../hooks/useSede";
import useNucleo from "../../nucleos/hooks/useNucleo";
import SectionContainer from "@/app/common/components/SectionContainer";
import useEmployee from "../../personal/hooks/useEmployee";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import { EmployeeItem } from "../../personal/components/EmployeeItem";
import useFurniture from "../../bienes/hooks/useFurniture";
import { FurnitureItem } from "../../bienes/components/FurnitureItem";
import TextValue from "@/app/common/components/TextValue";
import usePrograma from "../../programas/hook/useProgramas";
import { ProgramaItem } from "../../programas/components/ProgramaItem";
import useCatedra from "../../catedra/hook/useCatedra";
import { CatedraItem } from "../../catedra/components/CatedraItem";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const sedeId = getOneStringParams(id);

	const { nucleo, getNucleo } = useNucleo();
	const { sede } = useSede({ id: sedeId });
	const { employees } = useEmployee({ query: { sedeId } });
	const { furnitures } = useFurniture({ query: { sedeId } });
	const { programas } = usePrograma({ query: { sedeId } });
	const { catedras, getCatedrasOfThisPrograms } = useCatedra();

	useEffect(() => {
		if (!sede) return;

		if (!nucleo) getNucleo(sede.nucleoId);

		if (programas.length && !catedras.length)
			getCatedrasOfThisPrograms(programas.map((i) => i._id));
	}, [sede, programas.length]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de la Sede",
				hrefBackButton: RouterLinks.sedes.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.sedesEdit]}>
						<IconButton href={RouterLinks.sedes.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.sedes]}
		>
			<SectionContainer>
				{sede ? (
					<>
						<div className="grid grid-cols-2">
							<TextValue title="Nombre" value={sede.name} />
							<TextValue title="Teléfono" value={sede.phone_number} />
						</div>

						<TextValue largeContent title="Dirección" value={sede.address} />

						{nucleo && (
							<TextValue largeContent title="Núcleo" value={nucleo.name} />
						)}
					</>
				) : (
					// <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
					// </div>
					<p className="text-center text-gray-500">
						Cargando los detalles de la sede...
					</p>
				)}
			</SectionContainer>

			<div className="grid grid-cols-2 gap-2">
				<SectionContainer>
					<Title titleType="h2">Empleados ({employees.length})</Title>

					<div className="flex flex-col">
						{employees.slice(0, 5).map((item) => (
							<EmployeeItem key={item._id} data={item} type="inList" />
						))}
					</div>
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">
						Bienes ({furnitures.reduce((a, b) => a + b.quantity, 0)})
					</Title>

					{furnitures.slice(0, 5).map((item) => (
						<FurnitureItem key={item._id} data={item} type="inList" />
					))}
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">Programas ({programas.length})</Title>

					{programas.slice(0, 5).map((item) => (
						<ProgramaItem key={item._id} data={item} type="inList" />
					))}
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">Catedras ({catedras.length})</Title>

					{catedras.slice(0, 5).map((item) => (
						<CatedraItem key={item._id} data={item} type="inList" />
					))}
				</SectionContainer>
			</div>
		</PageTemplate>
	);
};

export default Page;
