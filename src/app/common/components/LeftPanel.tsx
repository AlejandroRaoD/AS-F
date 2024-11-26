import React, { ReactNode } from "react";
import Image from "next/image";
import imagotipoImage from "@/assets/imagenes/IMAGOTIPO.jpg";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";

interface props {
	href: string;
	children: ReactNode;
}
const LeftPanelButtom = (props: props) => {
	const { children, href } = props;

	return (
		<Link href={href} className="px-6 py-4 hover:bg-gray-50">
			{children}
		</Link>
	);
};

const LeftPanel = () => {
	return (
		<div className="absolute left-0 top-0 bottom-0 w-52 bg-white ">
			<div className="flex items-center px-2 h-16">
				<div className="logo-circle mr-2 flex-shrink-0">
					<Image
						src={imagotipoImage}
						alt="Logo"
						className="rounded-full"
						width={48}
						height={48}
					/>
				</div>

				<div>Abreu System</div>
			</div>

			<div className="flex flex-col">
				<LeftPanelButtom href={RouterLinks.dashboard}>inicio</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.estudiantes.all}>
					estudiantes
				</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.representante.all}>
					representantes
				</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.nucleos.all}>
					nucleos
				</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.sedes.all}>sedes</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.programas.all}>
					programas
				</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.personal.all}>
					personal
				</LeftPanelButtom>
				<LeftPanelButtom href={RouterLinks.bienes.all}>bienes</LeftPanelButtom>
			</div>
		</div>
	);
};

export default LeftPanel;
