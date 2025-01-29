"use client";
import Link from "next/link";
import PageTemplate from "../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import NeedPermissions from "./user/components/NeedPermissions";
import { UserPermissions } from "./user/interfaces/user.interface";
import Button from "../common/components/Button";
import clsx from "clsx";

const ImageLink = [
	{
		href: RouterLinks.estudiantes.all,
		bgClass: "bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500",
		image: "/images/estudiantes.jpg",
		label: "Estudiantes",
		permissions: [UserPermissions.estudiantes],
	},
	{
		href: RouterLinks.employee.all,
		bgClass: "bg-gradient-to-br from-green-700 via-green-600 to-green-500",
		image: "/images/personal.jpg",
		label: "Personal",
		permissions: [UserPermissions.personal],
	},
	{
		href: RouterLinks.bienes.all,
		bgClass: "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500",
		image: "/images/bienes.png",
		label: "Bienes",
		permissions: [UserPermissions.bienes],
	},
];
const buttonLink = [
	{
		href: RouterLinks.nucleos.all,
		label: "Nucleos",
		permissions: [UserPermissions.nucleos],
	},
	{
		href: RouterLinks.sedes.all,
		label: "Sedes",
		permissions: [UserPermissions.sedes],
	},
	{
		href: RouterLinks.programas.all,
		label: "Programa",
		permissions: [UserPermissions.programa],
	},
	{
		href: RouterLinks.catedra.all,
		label: "Catedras",
		permissions: [UserPermissions.catedra],
	},
	{
		href: RouterLinks.representante.all,
		label: "Representantes",
		permissions: [UserPermissions.representantes],
	},
];

export default function Home() {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Inicio",
			}}
		>
			<div
				className="h-screen flex bg-cover bg-center relative overflow-hidden"
				style={{
					backgroundImage: "url('/images/background.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
			 // Altura mínima igual a la del viewport
				}}
			>
				{/* Overlay */}

				<div className="flex-1 pt-8  backdrop-brightness-50 backdrop-blur-[1px]">
					{/* Main Content */}
					<h1 className="text-4xl mb-8 md:text-5xl font-extrabold text-white drop-shadow-lg ml-8 text-center px-4">
						Sistema de Gestión para el Núcleo Jesús María Torrealba
					</h1>

					<div className="grid grid-cols-4 px-8 gap-2 p-4 items-center">
						{/* Left Section */}
						<div className="flex flex-col col-span-3 -space-y-8">
							{ImageLink.map(
								({ href, bgClass, image, label, permissions }, index) => (
									<NeedPermissions key={index} permissions={permissions}>
										<Link
											href={href}
											className={clsx(
												"pw-[300px] h-[180px] md:w-[350px] md:h-[200px] text-center px-8 py-6 md:px-12 md:py-8",
												"text-white rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 relative overflow-hidden"
											)}
											style={{
												marginLeft: `${index * 50}px`,
											}}
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
									</NeedPermissions>
								)
							)}
						</div>

						{/* Right Section */}
						<div className="flex flex-col space-y-2 col-span-1">
							{buttonLink.map(({ href, label, permissions }, index) => (
								<NeedPermissions key={index} permissions={permissions}>
									<Button key={index} href={href}>
										{label}
									</Button>
								</NeedPermissions>
							))}
						</div>

						{/* Statistics Button */}
					</div>
				</div>

			</div>
				{/* Footer */}
			<footer className="text-white py-4 mt-auto bg-gray-900 text-center">
				<p className="text-xs md:text-sm">
					© 2024 Sistema de Gestión para el Núcleo Jesús María Torrealba
				</p>
			</footer>

			{/* <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
				<Link
					href={RouterLinks.estadisticas.all}
					className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-200"
				>
					<span className="text-xl md:text-2xl font-bold">📊</span>
				</Link>
			</div> */}
		</PageTemplate>
	);
}
