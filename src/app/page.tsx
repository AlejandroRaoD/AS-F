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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 blur-[3px]"></div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-start min-h-screen pt-16 relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-12 drop-shadow-lg ml-8">
            Sistema de Gestión para el Núcleo Jesús María Torrealba
          </h1>

          <div className="grid grid-cols-2 gap-12">
            {/* Left Section */}
            <div className="relative">
              <div className="flex flex-col space-y-8">
                {[ 
                  {
                    href: RouterLinks.estudiantes.all,
                    bgClass: "bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500",
                    image: "/images/estudiantes.jpg",
                    label: "Estudiantes",
                    position: "top-[10px] left-[50px]",
                  },
                  {
                    href: RouterLinks.employee.all,
                    bgClass: "bg-gradient-to-br from-green-700 via-green-600 to-green-500",
                    image: "/images/personal.jpg",
                    label: "Personal",
                    position: "top-[190px] left-[100px]",
                  },
                  {
                    href: RouterLinks.bienes.all,
                    bgClass: "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500",
                    image: "/images/bienes.png",
                    label: "Bienes",
                    position: "top-[400px] left-[150px]",
                  },
                ].map(({ href, bgClass, image, label, position }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className={`absolute ${position} group w-[350px] h-[200px] text-center px-12 py-8 ${bgClass} text-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl"
                      style={{
                        backgroundImage: `url('${image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 30%",
                        filter: "blur(2px)",
                      }}
                    ></div>
                    <span className="relative z-10 text-3xl font-bold flex items-center justify-center h-full drop-shadow-md">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-4 flex flex-col items-end pl-[300px]">
              {[ 
                { href: RouterLinks.nucleos.all, label: "Nucleos" },
                { href: RouterLinks.sedes.all, label: "Sedes" },
                { href: RouterLinks.programas.all, label: "Programa" },
                { href: RouterLinks.catedra.all, label: "Catedras" },
                { href: RouterLinks.representante.all, label: "Representantes" },
              ].map(({ href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-40 transform hover:scale-105 active:scale-95"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Statistics Button */}
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
        <footer className="text-white py-8 mt-auto bg-gray-900 text-center">
          <p className="text-sm">
            © 2024 Sistema de Gestión para el Núcleo Jesús María Torrealba
          </p>
        </footer>
      </div>
    </PageTemplate>
  );
}
