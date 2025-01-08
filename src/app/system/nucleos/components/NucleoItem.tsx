import Link from "next/link";
import { nucleoAttributes } from "@/types";
import RouterLinks from "@/config/RouterLinks";

interface props {
	data: nucleoAttributes;
}

export const NucleoItem = (props: props) => {
	const { data } = props;
	const { _id, name } = data;


	
	return (
		<Link href={RouterLinks.nucleos.one(_id)}
		className="border border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all transform hover:scale-105 hover:border-green-500 hover:bg-gray-50"
		>
			<div>{name}</div>
		</Link>
	);
};
