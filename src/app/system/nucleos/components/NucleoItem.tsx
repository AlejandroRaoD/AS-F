import Link from "next/link";
import { nucleoAttributes } from "@/types";
import RouterLinks from "@/config/RouterLinks";

interface props {
	href?: string;
	data: nucleoAttributes;
}

export const NucleoItem = (props: props) => {
	const { data, href } = props;
	const { _id, name } = data;

	return (
		<Link
			href={href || RouterLinks.nucleos.one(_id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div>{name}</div>
		</Link>
	);
};
