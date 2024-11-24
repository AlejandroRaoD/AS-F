import NavBar from "../common/components/NavBar";

export default function PerfilPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {}
      <NavBar
        navTitle="Página de Perfil"
        hrefBackButton="/" // Retroceder
        showProfileButton={false} // Ocultar perfil
      />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Página de Perfil</h1>
        <p className="text-lg text-gray-600 mb-8">
          Aquí podrás gestionar los perfiles
        </p>

        {/* Contenedor de los botones */}
        <div className="flex gap-6">
          {/* Botón Usuario Normal */}
          <button className="w-64 h-64 bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition">
            Usuario Normal
          </button>

          {/* Botón Super Usuario */}
          <button className="w-64 h-64 bg-green-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition">
            Super Usuario
          </button>
        </div>
      </div>
    </div>
  );
}
