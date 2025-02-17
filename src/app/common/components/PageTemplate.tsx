"use client";
import React, { ReactNode, useEffect, useState } from "react";
import NavBar, { NavBarProps } from "./NavBar";
import { Toaster } from "react-hot-toast";
import LeftPanel from "./LeftPanel";
import useAuth from "@/app/system/user/hook/useAuth";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

interface props {
	children?: ReactNode;
	navBarProps: NavBarProps;
	permissionsRequired?: UserPermissions[];
}

const PageTemplate = (props: props) => {
	const { children, navBarProps, permissionsRequired = [] } = props;
	const [isPanelCollapsed, setIsPanelCollapsed] = useState(false); // Estado para saber si el panel está colapsado

	const { redirectWithoutPermission } = useAuth();

	useEffect(() => {
		if (permissionsRequired.length)
			redirectWithoutPermission(permissionsRequired);
		 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Función para manejar el colapso del panel
	const togglePanel = () => {
		setIsPanelCollapsed(!isPanelCollapsed);
	};

	return (
		<>
			<div
				className="h-screen grid grid-rows-[4rem_1fr] transition-all duration-300"
				style={{
					marginLeft: isPanelCollapsed ? "3.5rem" : "14rem",
					backgroundColor: "#bbdefb", // Fondo blanco ligeramente más oscuro y azulado
				}}
			>
				{/* Pasa la función togglePanel como prop a LeftPanel */}
				<NavBar {...navBarProps} />

				<div className="overflow-y-auto p-6">{children}</div>

				<Toaster />
			</div>

			{/* Pasa el estado isPanelCollapsed y la función togglePanel a LeftPanel */}
			<LeftPanel
				isPanelCollapsed={isPanelCollapsed}
				togglePanel={togglePanel}
			/>
		</>
	);
};

export default PageTemplate;
