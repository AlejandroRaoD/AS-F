"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import UserForm from "../../components/UserForm";
import useUser from "../../hook/useUser";

const Page = () => {
	const { id } = useParams();

	const { user } = useUser({ id });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Editar User",
				hrefBackButton: RouterLinks.users.one(id),
			}}
		>
			{user && <UserForm data={user} redirect={RouterLinks.users.one(id)} />}
		</PageTemplate>
	);
};

export default Page;
