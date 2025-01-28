"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useProgramas from "./hook/useProgramas"; // Hook personalizado para manejar Programas
import PageTemplate from "../../common/components/PageTemplate";
import { ProgramaItem } from "./components/ProgramaItem"; // Componente para renderizar cada programa
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import NeedPermissions from "../user/components/NeedPermissions";
import { UserPermissions } from "../user/interfaces/user.interface";

const Page = () => {
	const { programas, getProgramas } = useProgramas();

	useEffect(() => {
		getProgramas();
	}, []);

	const onSubmitQuery = async (name: string) => getProgramas({ name });
	const onClearQuery = async () => getProgramas();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Programas",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.programaEdit]}>
						<IconButton href={RouterLinks.programas.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.programa]}
		>
			{/* Lista de programas */}
			<div className="flex flex-col">
				<SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} />

				<div className="grid grid-cols-2 mb-2 px-4 text-gray-700">
					<div>Nombre</div>
					<div>Sede</div>
				</div>

				{programas.map((p) => (
					<ProgramaItem data={p} key={p._id} />
				))}
			</div>
		</PageTemplate>
	);
};

export default Page;
