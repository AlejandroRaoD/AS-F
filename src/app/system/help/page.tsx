// help.tsx

import React from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

const HelpPage = () => {
  return (
    <PageTemplate
      navBarProps={{
        navTitle: "Ayuda",
        hrefBackButton: RouterLinks.dashboard, 
        showHelpButton: false, // ocultar ayuda
      }}
    >
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Página de Ayuda</h1>
        <p className="text-lg text-gray-600 mb-4">
          Aquí podrás encontrar recursos y asistencia para resolver tus dudas sobre el sistema.
        </p>

        {/* Sección de Guías */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Guías y Referencias</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              Para registrar un nuevo estudiante, accede al módulo de estudiantes en el menú principal y sigue los pasos indicados en el formulario de registro.
            </li>
            <li>
              Para generar una constancia de estudio, dirígete al apartado {"Documentos"} y selecciona la opción correspondiente. Asegúrate de tener los datos del estudiante actualizados.
            </li>
            <li>
              La gestión de usuarios y permisos se realiza en la sección de {"Configuración"}. Allí puedes agregar, editar o eliminar usuarios, y asignarles roles específicos.
            </li>
            <li>
              Para configurar el sistema, como ajustes de horarios o actualizaciones de datos generales, utiliza las opciones disponibles en el apartado de {"Ajustes del Sistema"}.
            </li>
          </ul>
        </section>

        {/* Sección de Contacto */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Información de Contacto</h2>
          <p className="text-md text-gray-600 mb-2">
            Si necesitas asistencia adicional, no dudes en contactarme directamente:
          </p>
          <p className="text-md text-gray-600">
            <strong>Nombre:</strong> Raúl Alejandro Oca De Palma
          </p>
          <p className="text-md text-gray-600">
            <strong>Teléfono:</strong> 0412-5881397
          </p>
          <p className="text-md text-gray-600">
            <strong>Horario de atención:</strong> Lunes a Viernes, 8:00 AM - 5:00 PM
          </p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default HelpPage;
