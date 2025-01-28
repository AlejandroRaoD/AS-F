"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { UserItem } from "./components/UserItem";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import useNucleo from "../nucleos/hooks/useNucleo";
import useUser from "./hook/useUser";
import NeedPermissions from "./components/NeedPermissions";
import { UserPermissions } from "./interfaces/user.interface";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();
	const { users, getUsers } = useUser();

	useEffect(() => {
		// getNucleos();
		getUsers();
	}, []);

	// const onSubmitQuery = async (name: string) => getUsers({ name });
	// const onClearQuery = async () => getUsers();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Users",
				hrefBackButton: RouterLinks.dashboard,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.usersEdit]}>
						<IconButton href={RouterLinks.users.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.users]}
		>
			{/* <SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} /> */}

			{/* Lista de users */}
			<div className="flex flex-col">
				<div className="grid grid-cols-3 mb-2 px-4 text-gray-700">
					<div>Email</div>
					<div>Nombre</div>
					<div>Cédula</div>
				</div>

				{users.length === 0 ? (
					<p className="text-center text-gray-500 mt-12 text-lg">
						No se encontraron users. ¡Crea la primera!
					</p>
				) : (
					users.map((user) => <UserItem key={user._id} data={user} />)
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
