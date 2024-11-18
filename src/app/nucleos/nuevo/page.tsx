import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import NucleoForm from "../components/NucleoForm";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Registrar Núcleo",
				hrefBackButton: RouterLinks.nucleos.all,
			}}
		>
			{/* Contenedor principal */}
			<div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
				{/* Tarjeta central con fondo y sombra */}
				<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
					{/* Contenido del formulario */}
					<div className="p-8">
						{/* Título y descripción */}
						<div className="text-center mb-8">
							<h1 className="text-4xl font-bold text-gray-800 mb-4">Registrar Núcleo</h1>
						</div>

						{/* Formulario */}
						<NucleoForm redirect={RouterLinks.nucleos.all} />
					</div>
				</div>
			</div>
		</PageTemplate>
	);
};

export default Page;
