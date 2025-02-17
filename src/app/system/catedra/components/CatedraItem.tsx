import Link from "next/link";
import { catedraAttributes } from "../interfaces/catedra.interface";
import RouterLinks from "@/config/RouterLinks";
import usePrograma from "../../programas/hook/useProgramas";
import { useEffect } from "react";
import useSede from "../../sedes/hooks/useSede";

type typeItem = "item" | "inList";

interface props {
	data: catedraAttributes;
	type?: typeItem;
}

// Componente recibe objeto 'data' de tipo CatedraProps y lo muestra
export const CatedraItem = (props: props) => {
	const { data, type } = props;
	const { _id, name, description, programaId } = data;

	const { programa } = usePrograma({ id: programaId });
	const { sede, getSede } = useSede({ id: programaId });

	useEffect(() => {
		if (programa) getSede(programa.sedeId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [programa]);

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.programas.one(data._id)}
				className="flex justify-between p-2 border-b hover:shadow"
			>
				<div>{data.name}</div>
				<div>{programa && programa.name}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.catedra.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="grid grid-cols-2">
				<div>{name}</div>

				<div>{programa && programa.name}</div>
			</div>
			<div className="grid grid-cols-2">
				<p className="text-sm text-gray-500">{description}</p>
				<p className="text-sm text-gray-500">{sede && sede.name}</p>
			</div>
		</Link>
	);
};
