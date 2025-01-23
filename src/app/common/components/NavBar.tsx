// NavBar.tsx

import React, { ReactNode } from "react";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "./IconButton";
import LeftIcon from "./icons/LeftIcon";
import Image from "next/image";

import systemNavbarImage from "@/assets/imagenes/system-navbar.png";
import MenuIcon from "./icons/MenuIcon";

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
        <div className="ml-2 text-gray-800 font-semibold text-lg">{navTitle}</div>
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
      <div className="flex items-center space-x-4">
        {rightButtons ? (
          rightButtons
        ) : (
          <>
            {/* Mostrar solo si showProfileButton es verdadero */}
            {/* {showProfileButton && (
              <Link href={RouterLinks.perfil.all}>
                <button className="profile-button px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                  Perfil
                </button>
              </Link>
            )} */}

            {/* Mostrar solo si showHelpButton es verdadero */}
            {/* {showHelpButton && (
              <Link href={RouterLinks.help.all}>
                <button className="help-button px-4 py-2 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105">
                  Ayuda
                </button>
              </Link>
            )} */}
          </>
        )}
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
