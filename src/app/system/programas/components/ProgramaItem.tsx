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
		<Link href={RouterLinks.programas.one(_id)}>
			<h2 className="text-lg font-semibold text-gray-700">{name}</h2>
			<p className="text-sm text-gray-500">{description}</p>
		</Link>
	);
};
