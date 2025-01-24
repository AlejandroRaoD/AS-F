import Link from "next/link";
import { programaAttributes } from "../interfaces/programa.interface";
import RouterLinks from "@/config/RouterLinks";
import useSede from "../../sedes/hooks/useSede";

type typeItem = "item" | "inList";

interface props {
	data: programaAttributes;
	type?: typeItem;
}

// Componente recibe objeto 'data' de tipo ProgramaProps y lo muestra
export const ProgramaItem = (props: props) => {
	const { data, type } = props;
	const { _id, name, description, sedeId, directorId } = data;

	const { sede } = useSede({ id: sedeId });

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.programas.one(data._id)}
				className="flex p-2 border-b hover:shadow"
			>
				<div>{data.name}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.programas.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="grid lg:grid-cols-6">
				<div className="col-span-3">{name}</div>

				<div className="col-span-3">{sede && sede.name}</div>
			</div>
			
			<div className="col-span-3 text-sm">{description}</div>
		</Link>
	);
};
