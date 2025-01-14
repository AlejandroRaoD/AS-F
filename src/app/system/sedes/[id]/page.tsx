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

const Page = () => {
	const { id } = useParams();

	const sedeId = getOneStringParams(id);

	const { nucleo, getNucleo } = useNucleo();
	const { sede } = useSede({ id: sedeId });
	const { employees } = useEmployee({ query: { sedeId } });

	useEffect(() => {
		if (!sede) return;
		if (!nucleo) getNucleo(sede.nucleoId);
	}, [sede]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de la Sede",
				hrefBackButton: RouterLinks.sedes.all,
				rightButtons: (
					<IconButton href={RouterLinks.sedes.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			<SectionContainer>
				{sede ? (
					<>
						<Title titleType="h1">{sede.name}</Title>
						<p className="-mt-4">Núcleo: {nucleo && nucleo.name}</p>
					</>
				) : (
					// <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
					// </div>
					<p className="text-center text-gray-500">
						Cargando los detalles de la sede...
					</p>
				)}
			</SectionContainer>

			<div className="grid grid-cols-2 gap-4">
				<SectionContainer>
					<Title titleType="h2">Empleados ({employees.length})</Title>

					<div className="flex flex-col">
						{employees.slice(0, 10).map((item) => (
							<EmployeeItem key={item._id} data={item} type="inList" />
						))}
					</div>

					{/* <p className="-mt-4">Núcleo: {nucleo && nucleo.name}</p> */}
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">Estudiantes</Title>
					{/* <p className="-mt-4">Núcleo: {nucleo && nucleo.name}</p> */}
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">Bienes</Title>
					{/* <p className="-mt-4">Núcleo: {nucleo && nucleo.name}</p> */}
				</SectionContainer>
			</div>
		</PageTemplate>
	);
};

export default Page;
