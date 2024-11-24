import NavBar from "@/app/common/components/NavBar";

export default function BienesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {}
      <NavBar
        navTitle="Gestión de Bienes"
        hrefBackButton="/"
      />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Página de Bienes</h1>
        <p className="text-lg text-gray-600">Info de los bienes</p>
      </div>
    </div>
  );
}
