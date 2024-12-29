"use client";
import Link from "next/link";
import PageTemplate from "./common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Inicio",
      }}
    >
      <div
        className="flex flex-col min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Cortina de humo / Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 blur-[3px]"></div>

        {/* Contenido Principal */}
        <div className="flex flex-col items-center justify-start min-h-screen pt-16 relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-12 drop-shadow-lg ml-8">
            Sistema de Gestión para el Núcleo Jesús María Torrealba
          </h1>

          <div className="grid grid-cols-2 gap-12">
            {/* Sección izquierda */}
            <div className="relative">
              <div className="flex flex-col space-y-8">
                {/* LINK DE ESTUDIANTES */}
                <Link
                  href={RouterLinks.estudiantes.all}
                  className="absolute top-[10px] left-[50px] group w-[350px] h-[200px] text-center px-12 py-8 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: "url('/images/estudiantes.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                      filter: "blur(2px)",
                    }}
                  ></div>
                  <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full drop-shadow-md">
                    Estudiantes
                  </span>
                </Link>

                {/* LINK DE PERSONAL */}
                <Link
                  href={RouterLinks.personal.all}
                  className="absolute top-[190px] left-[100px] group w-[350px] h-[200px] text-center px-12 py-8 bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: "url('/images/personal.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                      filter: "blur(2px)",
                    }}
                  ></div>
                  <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full drop-shadow-md">
                    Personal
                  </span>
                </Link>

                {/* LINK DE BIENES */}
                <Link
                  href={RouterLinks.bienes.all}
                  className="absolute top-[400px] left-[150px] group w-[350px] h-[200px] text-center px-12 py-8 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 text-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: "url('/images/bienes.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                      filter: "blur(2px)",
                    }}
                  ></div>
                  <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full drop-shadow-md">
                    Bienes
                  </span>
                </Link>
              </div>
            </div>

            {/* Sección derecha */}
            <div className="space-y-4 flex flex-col items-end pl-[300px]">
              <Link
                href={RouterLinks.nucleos.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-40 transform hover:scale-105 active:scale-95"
              >
                Nucleos
              </Link>
              <Link
                href={RouterLinks.sedes.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-40 transform hover:scale-105 active:scale-95"
              >
                Sedes
              </Link>
              <Link
                href={RouterLinks.programas.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-40 transform hover:scale-105 active:scale-95"
              >
                Programa
              </Link>
              <Link
                href={RouterLinks.catedra.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-40 transform hover:scale-105 active:scale-95"
              >
                Catedras
              </Link>
              <Link
                href={RouterLinks.representante.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-40 transform hover:scale-105 active:scale-95"
              >
                Representantes
              </Link>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="absolute bottom-6 right-6">
            <Link
              href={RouterLinks.estadisticas.all}
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-200"
            >
              <span className="text-2xl font-bold">📊</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="text-white py-8 mt-auto"
          style={{
            backgroundImage: "url('/images/marble-white.jpg')", // Asegúrate de tener la imagen de mármol blanco en la carpeta public/images
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto text-center">
            <p className="mb-6 text-lg font-semibold">
              © 2024 Sistema de Gestión para el Núcleo Jesús María Torrealba
            </p>

            <div className="flex justify-center space-x-6 mb-6">
              <Link
                href="#"
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                Instagram
              </Link>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <Link
                href="/terminos"
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                Términos de Uso
              </Link>
              <Link
                href="/politicas"
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                Política de Privacidad
              </Link>
            </div>

            <p className="text-sm">
              <Link
                href="/contacto"
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                Contacto
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </PageTemplate>
  );
}
