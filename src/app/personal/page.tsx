import NavBar from "../common/components/NavBar";

export default function PerfilPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {}
      <NavBar
        navTitle="Página de Perfil"
        hrefBackButton="/" 
        showProfileButton={false}
      />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Página de Perfil</h1>
        <p className="text-lg text-gray-600">
          Aquí podrás gestionar los perfiles
        </p>
      </div>
    </div>
  );
}
