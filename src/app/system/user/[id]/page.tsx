"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import SectionContainer from "@/app/common/components/SectionContainer";
import useEmployee from "../../personal/hooks/useEmployee";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import TextValue from "@/app/common/components/TextValue";
import useUser from "../hook/useUser";
import UserPermissionsList from "../components/UserPermissionsList";

const Page = () => {
	const { id } = useParams();

	const userId = getOneStringParams(id);

	const { user } = useUser({ id: userId });
	const { employee, getEmployee } = useEmployee();

	useEffect(() => {
		if (!user) return;
		getEmployee(user.employeeId);
	}, [user]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del usuario",
				hrefBackButton: RouterLinks.users.all,
				rightButtons: (
					<IconButton href={RouterLinks.users.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			{user ? (
				<>
					<SectionContainer>
						<div className="grid grid-cols-2">
							<TextValue title="Email" value={user.email} />

							{employee && (
								<>
									<TextValue
										title="Nombre"
										value={`${employee.name} ${employee.lastname}`}
									/>
									<TextValue
										title="Cédula"
										value={`${employee.nationality}-${employee.CI}`}
									/>
								</>
							)}
						</div>
					</SectionContainer>

					<UserPermissionsList value={user.permissions} />
				</>
			) : (
				// <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-6">
				// </div>
				<p className="text-center text-gray-500">
					Cargando los detalles de la user...
				</p>
			)}
		</PageTemplate>
	);
};

export default Page;
