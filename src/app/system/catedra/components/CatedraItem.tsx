import Link from "next/link";
import { catedraAttributes } from "../interfaces/catedra.interface";
import RouterLinks from "@/config/RouterLinks";

interface props {
	data: catedraAttributes;
}

// Componente recibe objeto 'data' de tipo CatedraProps y lo muestra
export const CatedraItem = (props: props) => {
	const { data } = props;
	const { _id, name, description, programaId } = data;

	return (
		<Link
			className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:border-green-500 hover:bg-gray-50"
			href={RouterLinks.catedra.one(_id)}
		>
			<h2 className="text-lg font-semibold text-gray-700">{name}</h2>
			<p className="text-sm text-gray-500">{description}</p>
			<p className="text-sm text-gray-500">{programaId}</p>
		</Link>
	);
};
