import NavBar from "@/app/common/components/NavBar";

export default function PersonalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {}
      <NavBar
        navTitle="Gestión del personal"
        hrefBackButton="/"
      />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Página de Personal</h1>
        <p className="text-lg text-gray-600">Info del Personal</p>
      </div>
    </div>
  );
}
