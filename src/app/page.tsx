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
        <div className="absolute inset-0 bg-black opacity-40 blur-[3px]"></div> {/* Overlay más suave con blur */}

        {/* Contenido Principal */}
        <div className="flex flex-col items-center justify-start min-h-screen pt-16 relative z-10">
          {/* Título con margen a la izquierda */}
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
                  className="absolute top-[10px] left-[50px] group w-[350px] h-[200px] mb-8 text-center px-12 py-8 bg-blue-500 bg-opacity-70 text-white rounded-xl shadow-md hover:bg-blue-600 transition-all ease-in-out duration-300 border-2 border-transparent hover:border-blue-400"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-opacity-70 group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: "url('/images/estudiantes.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                      filter: "blur(2px)",
                    }}
                  ></div>
                  <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full">Estudiantes</span>
                </Link>

                {/* LINK DE PERSONAL */}
                <Link
                  href={RouterLinks.personal.all}
                  className="absolute top-[190px] left-[100px] group w-[350px] h-[200px] mb-8 text-center px-12 py-8 bg-blue-600 bg-opacity-70 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all ease-in-out duration-300 border-2 border-transparent hover:border-blue-400"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-opacity-70 group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: "url('/images/personal.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                      filter: "blur(2px)",
                    }}
                  ></div>
                  <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full">Personal</span>
                </Link>

                {/* LINK DE BIENES */}
                <Link
                  href={RouterLinks.bienes.all}
                  className="absolute top-[400px] left-[150px] group w-[350px] h-[200px] mb-8 text-center px-12 py-8 bg-blue-500 bg-opacity-70 text-white rounded-xl shadow-md hover:bg-blue-600 transition-all ease-in-out duration-300 border-2 border-transparent hover:border-blue-400"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-opacity-70 group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: "url('/images/bienes.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                      filter: "blur(2px)",
                    }}
                  ></div>
                  <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full">Bienes</span>
                </Link>

              </div>
            </div>

            {/* Sección derecha */}
            <div className="space-y-4 flex flex-col items-end pl-[300px]">
              <Link
                href={RouterLinks.nucleos.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Nucleos
              </Link>
              <Link
                href={RouterLinks.sedes.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Sedes
              </Link>
              <Link
                href={RouterLinks.programas.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Programa
              </Link>
              <Link
                href={RouterLinks.catedra.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Catedras
              </Link>
              <Link
                href={RouterLinks.representante.all}
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-40"
              >
                Representantes
              </Link>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <Link
          href={RouterLinks.estadisticas.all}
          className="fixed bottom-6 right-6 w-16 h-16 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-200 z-20"
        >
          <span className="text-2xl font-bold">📊</span> {/* Icono */}
        </Link>

      </div>
    </PageTemplate>
  );
}
