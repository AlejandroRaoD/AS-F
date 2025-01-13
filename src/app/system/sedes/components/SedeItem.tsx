import Link from "next/link";
import { sedeAttributes } from "@/types";
import RouterLinks from "@/config/RouterLinks";

type typeItem = "item" | "inList";
interface props {
	data: sedeAttributes;

	type?: typeItem;
}

export const SedeItem = (props: props) => {
	const { data, type = "item" } = props;
	const { _id, name } = data;

	const className =
		type == "item"
			? "border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
			: "p-1 border-b hover:shadow";

	return (
		<Link href={RouterLinks.sedes.one(_id)} className={className}>
			<div>{name}</div>
		</Link>
	);
};
