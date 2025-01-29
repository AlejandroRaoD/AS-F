"use client";
import React, { useEffect } from "react";

import useSystemLog from "./hooks/useSystemLog";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../user/interfaces/user.interface";
import { SystemLogItem } from "./components/systemLogItem";

const Page = () => {
	const { systemLogs, getSystemLogs } = useSystemLog();

	useEffect(() => {
		getSystemLogs();
	}, []);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Logs",
				hrefBackButton: RouterLinks.dashboard,
				// rightButtons: (
				// 	<NeedPermissions permissions={[UserPermissions.systemLogsEdit]}>
				// 		<IconButton href={RouterLinks.systemLogs.create}>
				// 			<PlusIcon />
				// 		</IconButton>
				// 	</NeedPermissions>
				// ),
			}}
			permissionsRequired={[UserPermissions.logs]}
		>
			{/* Filtros */}

			{/* <SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} /> */}

			{/* Lista de núcleos */}

			<div className="flex flex-col">
				{systemLogs.map((n) => (
					<SystemLogItem data={n} key={n._id} />
				))}
			</div>
		</PageTemplate>
	);
};

export default Page;
