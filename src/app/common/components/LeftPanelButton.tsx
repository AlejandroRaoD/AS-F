import Link from "next/link";

interface LeftPanelButtonProps {
	label: string;
	icon: string;
	href?: string; // Hacemos la prop href opcional
}

const LeftPanelButton = ({ label, icon, href }: LeftPanelButtonProps) =>
	href ? (
		<Link href={href} passHref>
			<div className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
				<span className="text-xl mr-1 transition-all duration-200 text-blue-600 group-hover:text-white">
					{icon}
				</span>
				<span className="text-sm font-medium text-gray-700 group-hover:text-white">
					{label}
				</span>
			</div>
		</Link>
	) : (
		<div className="flex items-center px-1.5 py-1 my-0.5 rounded-lg transition-all duration-200 bg-gray-200/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group cursor-pointer">
			<span className="text-xl mr-1 transition-all duration-200 text-blue-600 group-hover:text-white">
				{icon}
			</span>
			<span className="text-sm font-medium text-gray-700 group-hover:text-white">
				{label}
			</span>
		</div>
	);

export default LeftPanelButton;
