import Link from "next/link";
import { ReactNode } from "react";

interface LeftPanelButtonProps {
	label: string;
	icon: ReactNode;
	href?: string; // Hacemos la prop href opcional
}

const LeftPanelButton = ({ label, icon, href }: LeftPanelButtonProps) => {
	const content = (
		<div className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
			<span className="text-xl w-8 mx-1 transition-all duration-200 text-blue-600 group-hover:text-white">
				{icon}
			</span>
			<span className="text-sm font-medium text-gray-700 group-hover:text-white">
				{label}
			</span>
		</div>
	);

	return href ? (
		<Link href={href} passHref>
			{content}
		</Link>
	) : (
		content
	);
};

export default LeftPanelButton;
