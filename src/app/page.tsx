'use client'; // Marca el archivo como un componente de cliente

import React, { useEffect } from "react";
import RouterLinks from "@/config/RouterLinks";
import Button from "./common/components/Button";
import "aos/dist/aos.css"; // Asegúrate de haber instalado AOS y esta importación
import AOS from "aos";

export default function LandingPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Bloque de Bienvenida */}
      <section 
        className="bg-blue-600 text-white py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/welcome-bg.jpg')" }}
        data-aos="fade-down" 
        data-aos-duration="1000"
      >
        <h1 className="text-5xl font-extrabold tracking-wide">Sistema de Gestión Educativa</h1>
        <p className="mt-4 text-xl opacity-80">Optimiza los procesos de tu institución educativa de manera fácil y eficiente.</p>
        <div className="mt-10 flex justify-center gap-6">
          <Button
            href={RouterLinks.login}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-xl transform transition duration-300 hover:bg-blue-700 hover:scale-105"
            data-aos="fade-right" data-aos-duration="1000"
          >
            Iniciar sesión
          </Button>
          <Button
            href={RouterLinks.register}
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-xl transform transition duration-300 hover:bg-green-700 hover:scale-105"
            data-aos="fade-left" data-aos-duration="1000"
          >
            Regístrate
          </Button>
        </div>
      </section>

      {/* Bloque sobre el Sistema de Orquestas */}
      <section 
        className="bg-white py-16 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/orchestra-bg.jpg')" }}
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-semibold text-blue-700">Sistema de Orquestas de Venezuela</h2>
        <p className="mt-6 text-lg text-gray-700 opacity-80">
          Fundado en 1975 por el maestro José Antonio Abreu, el Sistema de Orquestas es una red de enseñanza musical única en el mundo. Este programa no solo forma músicos, sino también ciudadanos responsables y comprometidos, proporcionando una plataforma para el desarrollo personal y social a través de la música.
        </p>
        <ul className="mt-6 text-left text-lg list-disc list-inside mx-auto max-w-3xl text-gray-700">
          <li>Oportunidades para aprender y tocar en orquestas sin costo alguno.</li>
          <li>Formación integral que abarca valores como la disciplina y el trabajo en equipo.</li>
          <li>Participación en conciertos nacionales e internacionales.</li>
          <li>Programas para fomentar la inclusión social a través de la música.</li>
        </ul>
      </section>

      {/* Bloque sobre AbreuSystem */}
      <section 
        className="bg-gray-100 py-16 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/abreu-system-bg.jpg')" }}
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-semibold text-blue-700">AbreuSystem</h2>
        <p className="mt-6 text-lg text-gray-700 opacity-80">
          AbreuSystem es una plataforma diseñada para gestionar de forma eficiente los procesos de las instituciones educativas y musicales, integrando funcionalidades para la administración académica, logística y administrativa en un solo lugar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-left">
            <h3 className="text-xl font-bold text-blue-700">Gestión Estudiantil</h3>
            <p className="mt-4 text-gray-700">
              Organiza y optimiza las cátedras y programas formativos para estudiantes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-left">
            <h3 className="text-xl font-bold text-blue-700">Gestión Administrativa</h3>
            <p className="mt-4 text-gray-700">
              Simplifica procesos administrativos como generar constancias e inscripciones.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-left">
            <h3 className="text-xl font-bold text-blue-700">Gestión de Recursos</h3>
            <p className="mt-4 text-gray-700">
              Lleva un control detallado de instrumentos, materiales y recursos.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque de Frase inspiradora */}
      <section 
        className="text-center py-16 px-8 bg-gray-200 rounded-xl mx-8 shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/images/quote-bg.jpg')" }}
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        <blockquote className="text-lg font-medium italic">
          "La música es un derecho de todos los niños y jóvenes del mundo."
          <footer className="mt-2 text-sm text-gray-700">- José Antonio Abreu, 1995</footer>
        </blockquote>
      </section>

	</div>
  );
}
