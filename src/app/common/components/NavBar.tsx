// NavBar.tsx

import React, { ReactNode } from "react";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "./IconButton";
import LeftIcon from "./icons/LeftIcon";
import Image from "next/image";

import systemNavbarImage from "@/assets/imagenes/system-navbar.png"; 
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg"; 

export interface NavBarProps {
  navTitle: ReactNode;
  hrefBackButton?: string;
  showProfileButton?: boolean;
  showHelpButton?: boolean;
}

const NavBar = (props: NavBarProps) => {
  const { navTitle, hrefBackButton, showProfileButton = true, showHelpButton = true } = props;  // Valor por defecto para que sea true

  return (
    <nav className="navbar bg-white shadow-md p-4 flex items-center justify-between">
      {/* Parte izquierda del navbar - imagen redonda como icono */}
      <div className="navbar-left flex items-center">
        <div className="logo-circle mr-4 flex-shrink-0">
          <Image
            src={imagotipoImage}
            alt="Logo"
            className="logo-image rounded-full"
            width={48}  
            height={48} 
          />
        </div>

        {}
        {hrefBackButton && (
          <IconButton href={hrefBackButton}>
            <LeftIcon />
          </IconButton>
        )}

        <div className="ml-2">{navTitle}</div>
      </div>

      {}
      <div className="navbar-center flex justify-center w-full">
        <Image
          src={systemNavbarImage}
          alt="Centered Image"
          className="center-image mx-auto"
          width={250}
          height={80}
        />
      </div>

      {}
      <div className="navbar-right flex items-center">
        {/* Solo mostrar botón perfil si showProfileButton es verdadero */}
        {showProfileButton && (
          <Link href={RouterLinks.perfil.all}>
            <button className="profile-button px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
              Perfil
            </button>
          </Link>
        )}
        
        {/* Solo mostrar botón ayuda si showHelpButton es verdadero */}
        {showHelpButton && (
          <Link href={RouterLinks.help.all}>
            <button className="help-button ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
              Ayuda
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
