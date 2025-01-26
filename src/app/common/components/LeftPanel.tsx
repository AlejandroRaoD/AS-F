"use client"; // Marca este archivo como un Client Component

import React, { useState } from "react";
import Image from "next/image";
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg";
import Link from "next/link"; // Importamos el componente Link de Next.js
import RouterLinks from "@/config/RouterLinks"; // Importamos RouterLinks
import clsx from "clsx";
import LeftPanelButton from "./LeftPanelButton";
import LeftPanelSpacer from "./LeftPanelSpacer";
import PerfilIcon from "./icons/PerfilIcon";
import IconButton from "./IconButton";
import HelpIcon from "./icons/HelpIcon";
import MusicIcon from "./icons/MusicIcon";
import ShareIcon from "./icons/ShareIcon";
import CalendarIcon from "./icons/CalendarIcon";
import PuzzleIcon from "./icons/PuzzleIcon";
import useAuth from "@/app/system/auth/hook/useAuth";
import LogoutIcon from "./icons/LogoutIcon";

interface LeftPanelProps {
	isPanelCollapsed: boolean;
	togglePanel: () => void;
}

const LeftPanel = ({ isPanelCollapsed, togglePanel }: LeftPanelProps) => {
	const { userProfile, singout } = useAuth();

	const storedIsTablesOpen =
		typeof window !== "undefined"
			? localStorage.getItem("isTablesOpen") === "true"
			: false;
	const [isTablesOpen, setIsTablesOpen] = useState(storedIsTablesOpen);

	const toggleTables = () => {
		const newState = !isTablesOpen;
		setIsTablesOpen(newState);
		localStorage.setItem("isTablesOpen", newState.toString());
	};

	return (
		<div
			className={clsx(
				"fixed left-0 top-0 bottom-0 flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-white shadow-xl border-r border-gray-200 transition-all duration-300",
				isPanelCollapsed ? "w-15" : "w-56"
			)}
			style={
				isPanelCollapsed
					? {}
					: {
							backgroundImage: "url('/images/pentagrama.png')",
							backgroundSize: "cover",
							backgroundPosition: "center",
					  }
			}
		>
			{/* Header */}
			<Link
				href={RouterLinks.landing}
				className="flex p-4 items-center border-b border-gray-100 group"
			>
				<div className="relative w-10 h-10">
					{!isPanelCollapsed && (
						<Image
							src={imagotipoImage}
							alt="Logo"
							className="w-full h-full rounded-full shadow-2xl transition-transform duration-200 transform group-hover:scale-110"
							width={30}
							height={30}
						/>
					)}
				</div>

				{!isPanelCollapsed && (
					<div className="flex flex-col flex-1 ml-2 ">
						<h1 className="font-extrabold text-gray-800 transition-all duration-200 group-hover:text-blue-600">
							Abreu System
						</h1>
						<p className="text-sm -mt-1 text-gray-500 transition-all duration-200 group-hover:text-blue-500">
							Gestión Musical
						</p>
					</div>
				)}
			</Link>

			{/* Navigation Links */}

			{!isPanelCollapsed && (
				<nav className="flex-1 overflow-y-auto flex flex-col mt-2 px-4 space-y-0.5">
					<LeftPanelButton
						label="Inicio"
						icon="🏠"
						href={RouterLinks.dashboard}
					/>

					<LeftPanelSpacer />
					<LeftPanelButton
						label="Estadísticas"
						icon="📊"
						href={RouterLinks.estadisticas.all}
					/>

					<LeftPanelSpacer />

					<LeftPanelButton
						label="Personal"
						icon="👩‍💼"
						href={RouterLinks.employee.all}
					/>
					<LeftPanelButton
						label="Representante"
						icon="👨‍👩‍👧"
						href={RouterLinks.representante.all}
					/>
					<LeftPanelButton
						label="Estudiantes"
						icon="🎓"
						href={RouterLinks.estudiantes.all}
					/>

					<LeftPanelButton
						label="Comodatos"
						icon={<ShareIcon />}
						href={RouterLinks.comodato.all}
					/>

					<LeftPanelButton
						label="Períodos de Inscripciones"
						icon={<CalendarIcon />}
						href={RouterLinks.enrollmentPeriod.all}
					/>

					<LeftPanelButton
						label="Inscripciones"
						icon={<PuzzleIcon />}
						href={RouterLinks.studentEnrollment.all}
					/>

					<LeftPanelSpacer />
					<div
						className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer"
						onClick={toggleTables}
					>
						<span className="text-xl mr-1 transition-all duration-200 text-blue-600 group-hover:text-white">
							📚
						</span>
						<span className="text-sm font-medium text-gray-700 group-hover:text-white">
							Tablas
						</span>
						<span
							className={`ml-auto transform transition-transform duration-300 ${
								isTablesOpen ? "rotate-180" : ""
							}`}
						>
							▼
						</span>
					</div>
					{isTablesOpen && (
						<>
							<LeftPanelButton
								label="Núcleo"
								icon="🏫"
								href={RouterLinks.nucleos.all}
							/>
							<LeftPanelButton
								label="Sede"
								icon="🏢"
								href={RouterLinks.sedes.all}
							/>
							<LeftPanelButton
								label="Programa"
								icon="📚"
								href={RouterLinks.programas.all}
							/>
							<LeftPanelButton
								label="Cátedra"
								icon="🎶"
								href={RouterLinks.catedra.all}
							/>

							<LeftPanelButton
								label="Bienes"
								icon="🏢"
								href={RouterLinks.bienes.all}
							/>
							<LeftPanelButton
								label="Instrumentos"
								icon={<MusicIcon />}
								href={RouterLinks.instrument.all}
							/>
						</>
					)}
					<LeftPanelSpacer />
					<LeftPanelButton
						label="Documentos"
						icon="📄"
						href={RouterLinks.documentos.all}
					/>
				</nav>
			)}

			{isPanelCollapsed || (
				<div className="flex items-center mt-auto  pl-2 py-2 bg-white">
					<Link
						href={RouterLinks.perfil.all}
						className="w-8 h-8 rounded-full overflow-hidden  "
					>
						<PerfilIcon />
					</Link>

					<div className="flex-1 ml-2">
						{userProfile && userProfile.employeeId ? (
							<>
								<div>{userProfile.employeeId.name}</div>
								<div className="text-xs">
									{userProfile.employeeId.nationality}-
									{userProfile.employeeId.CI}
								</div>
							</>
						) : (
							<div>Super admin</div>
						)}
					</div>

					<div className="flex flex-col">
						<IconButton onClick={() => singout()}>
							<LogoutIcon />
						</IconButton>
					</div>
				</div>
			)}

			{/* Botón para ocultar/desplegar el panel */}
			<button
				className={clsx(
					"absolute bottom-0 px-2 py-3 bg-blue-600 text-white focus:outline-none flex items-center",
					isPanelCollapsed ? "right-0 rounded-l-md" : "-right-8 rounded-r-md "
				)}
				onClick={togglePanel}
			>
				<span className="mr-1">{isPanelCollapsed ? "▶" : "◁"}</span>
				{isPanelCollapsed && (
					<Image
						src={imagotipoImage}
						alt="Logo"
						className="rounded-full transition-transform duration-200 transform"
						width={20}
						height={20}
					/>
				)}
			</button>
		</div>
	);
};

export default LeftPanel;
