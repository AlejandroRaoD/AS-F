import RouterLinks from "@/config/RouterLinks";
import Button from "./common/components/Button";

export default function LandingPage() {
	return (
		<div
			className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex flex-col justify-center items-center p-5 text-white"
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(43, 2, 2, 0.3), rgba(11, 4, 43, 0.3)), url('/path/to/your/background-image.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="mb-8 text-center">
				<h1 className="text-5xl font-extrabold mb-4">
					<span className="text-blue-600">Bienvenido</span> a AbreuSystem
				</h1>
				<blockquote className="text-lg font-medium italic text-center">
				"La música es un derecho de todos los niños y jóvenes del mundo." 
				<footer className="mt-2 text-sm">- José Antonio Abreu, 1995</footer>
				</blockquote>

			</div>

			<div className="bg-blue-800 bg-opacity-90 p-8 rounded-2xl shadow-xl w-full max-w-md transform transition hover:scale-105 duration-300 ease-in-out">
				<form className="flex flex-col items-center space-y-6">

					<div className="w-full">
						<label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
							Correo electrónico
						</label>
						<input
							type="email"
							id="email"
							placeholder="ejemplo@correo.com"
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md"
							required
						/>
					</div>


					<div className="w-full">
						<label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">
							Contraseña
						</label>
						<input
							type="password"
							id="password"
							placeholder="••••••••"
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md"
							required
						/>
					</div>


					<div className="w-full">
						<Button
							href={RouterLinks.login}
							className="w-full bg-green-500 py-3 rounded-lg font-bold hover:bg-green-600 transition-shadow duration-300 shadow-lg"
						>
							Iniciar sesión
						</Button>
					</div>
				</form>
			</div>

			<div className="mt-8 text-center">
				<p className="text-gray-200 mb-4">¿No tienes una cuenta?</p>
				<Button
					href={RouterLinks.register}
					className="bg-gray-200 text-blue-600 py-2 px-6 rounded-lg font-medium hover:bg-gray-300 hover:shadow-md transition duration-300"
				>
					Regístrate
				</Button>
			</div>

			<footer className="mt-12 text-center text-gray-500 text-sm">
				Sistema de Gestion para el Nucleo de Sistemas de Orquestas
			</footer>
		</div>
	);
}
