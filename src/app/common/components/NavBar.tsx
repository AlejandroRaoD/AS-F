// NavBar.tsx

import React, { ReactNode } from "react";
import IconButton from "./IconButton";
import LeftIcon from "./icons/LeftIcon";
import Image from "next/image";

import systemNavbarImage from "@/assets/imagenes/system-navbar.png";
import MenuIcon from "./icons/MenuIcon";
import HelpIcon from "./icons/HelpIcon";
import RouterLinks from "@/config/RouterLinks";

export interface NavBarProps {
	navTitle: ReactNode;
	hrefBackButton?: string;
	rightButtons?: ReactNode;
	showProfileButton?: boolean;
	showHelpButton?: boolean;
}

const NavBar = (props: NavBarProps) => {
	const {
		navTitle,
		hrefBackButton,
		rightButtons,
		showProfileButton = true,
		showHelpButton = true,
	} = props;

	return (
		<nav className="navbar p-4 flex items-center justify-between bg-gradient-to-br from-gray-50 via-gray-200 to-white shadow-xl rounded-md border-b border-gray-200">
			{/* Parte izquierda del navbar - Icono y título */}
			<div className="flex items-center space-x-4">
				{hrefBackButton && (
					<IconButton href={hrefBackButton}>
						<LeftIcon />
					</IconButton>
				)}
				<div className="ml-2 text-gray-800 font-semibold text-lg">
					{navTitle}
				</div>
			</div>

			{/* Imagen central */}
			<div className="flex justify-center flex-grow">
				<Image
					src={systemNavbarImage}
					alt="Imagen Central"
					className="mx-auto"
					width={250} // Ajuste para ser más armónico
					height={80} // Ajuste de tamaño
				/>
			</div>

			{/* Parte derecha con los botones */}
			<div className="flex items-center">
				{rightButtons}

				<IconButton href={RouterLinks.help.all}>
					<HelpIcon />
				</IconButton>
			</div>

			{/* Botón de hamburguesa para dispositivos pequeños */}
			<div className="block lg:hidden ml-4">
				<button className="text-gray-800 hover:text-blue-600 focus:outline-none">
					<MenuIcon />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
