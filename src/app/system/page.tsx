"use client";
import Link from "next/link";
import PageTemplate from "../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Inicio",
      }}
    >
      <div
  className="flex flex-col bg-cover bg-center relative overflow-hidden"
  style={{
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "50vh", // Altura mínima igual a la del viewport
  }}
>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 blur-[3px]"></div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg ml-8 text-center px-4">
            Sistema de Gestión para el Núcleo Jesús María Torrealba
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4 md:px-0">
            {/* Left Section */}
            <div className="relative flex flex-col space-y-8">
              {[ 
                {
                  href: RouterLinks.estudiantes.all,
                  bgClass: "bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500",
                  image: "/images/estudiantes.jpg",
                  label: "Estudiantes",
                  position: "top-[50px] left-[50px]",
                },
                {
                  href: RouterLinks.employee.all,
                  bgClass: "bg-gradient-to-br from-green-700 via-green-600 to-green-500",
                  image: "/images/personal.jpg",
                  label: "Personal",
                  position: "top-[-50px] left-[100px]",
                },
                {
                  href: RouterLinks.bienes.all,
                  bgClass: "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500",
                  image: "/images/bienes.png",
                  label: "Bienes",
                  position: "top-[-150px] left-[150px]",
                },
              ].map(({ href, bgClass, image, label, position }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`absolute ${position} group w-[300px] h-[180px] md:w-[350px] md:h-[200px] text-center px-8 py-6 md:px-12 md:py-8 ${bgClass} text-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 relative overflow-hidden`}
                >
                  {/* Image Background with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: `url('${image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 30%",
                    }}
                  ></div>

                  {/* Color Overlay */}
                  <div className="absolute inset-0 bg-black opacity-60 blur-[2px] group-hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>

                  {/* Label */}
                  <span className="relative z-10 text-2xl md:text-3xl font-bold flex items-center justify-center h-full drop-shadow-md">
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="space-y-4 flex flex-col items-end pl-[200px] md:pl-[300px] -translate-y-[300px] md:-translate-y-[-100px]">
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
                  className="block text-center px-3 md:px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-32 md:w-40 transform hover:scale-105 active:scale-95"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Statistics Button */}
          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
            <Link
              href={RouterLinks.estadisticas.all}
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-200"
            >
              <span className="text-xl md:text-2xl font-bold">📊</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-white py-4 bg-gray-900 text-center">
          <p className="text-xs md:text-sm">
            © 2024 Sistema de Gestión para el Núcleo Jesús María Torrealba
          </p>
        </footer>
      </div>
    </PageTemplate>
  );
}
