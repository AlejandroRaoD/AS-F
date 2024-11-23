import React, { ReactNode } from "react";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "./IconButton";
import LeftIcon from "./icons/LeftIcon";
import Image from "next/image"; // Importa Image de Next.js

import systemNavbarImage from "@/assets/imagenes/system-navbar.png"; // Asegúrate de que la ruta sea correcta
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg"; // Asegúrate de que la ruta sea correcta

export interface NavBarProps {
  navTitle: ReactNode;
  hrefBackButton?: string;
  rightButtons?: ReactNode;
}

const NavBar = (props: NavBarProps) => {
  const { navTitle, hrefBackButton, rightButtons } = props;

  return (
    <nav className="navbar bg-white shadow-md p-4 flex items-center justify-between">
      {/* Parte izquierda del navbar - imagen redonda como icono */}
      <div className="navbar-left flex items-center">
        <div className="logo-circle mr-4">
          <Image
            src={imagotipoImage}
            alt="Logo"
            className="logo-image rounded-full" // Clase para hacerlo redondo
            width={48}  // Ajusta el tamaño del logo
            height={48} // Ajusta el tamaño del logo
          />
        </div>
        {hrefBackButton && (
          <IconButton href={hrefBackButton}>
            <LeftIcon />
          </IconButton>
        )}
        <div className="ml-2">{navTitle}</div>
      </div>

      {/* Parte central del navbar - imagen más grande */}
      <div className="navbar-center flex justify-center w-full">
        <Image
          src={systemNavbarImage}
          alt="Centered Image"
          className="center-image mx-auto" // Asegura que la imagen esté centrada
          width={250} // Aumentamos el tamaño de la imagen
          height={80} // Ajustamos la altura para que se vea más proporcionada
        />
      </div>

      {/* Parte derecha del navbar */}
      <div className="navbar-right flex items-center">
        {rightButtons ? (
          rightButtons
        ) : (
          <>
            <Link href={RouterLinks.perfil.all}>
              <button className="profile-button px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Perfil
              </button>
            </Link>
            <Link href="/help">
              <button className="help-button ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Ayuda
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
