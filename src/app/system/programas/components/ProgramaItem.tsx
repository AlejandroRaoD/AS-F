import Link from "next/link";
import { programaAttributes } from "../interfaces/programa.interface";
import RouterLinks from "@/config/RouterLinks";

interface props {
	data: programaAttributes;
}

// Componente recibe objeto 'data' de tipo ProgramaProps y lo muestra
export const ProgramaItem = (props: props) => {
	const { data } = props;
	const { _id, name, description } = data;

	return (
		<Link
			className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:border-green-500 hover:bg-gray-50"
			href={RouterLinks.programas.one(_id)}
		>
			<h2 className="text-lg font-semibold text-gray-700">{name}</h2>
			<p className="text-sm text-gray-500">{description}</p>
		</Link>
	);
};
