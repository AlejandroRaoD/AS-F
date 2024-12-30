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
		<Link href={RouterLinks.nucleos.one(_id)}>
			<div>{name}</div>
		</Link>
	);
};
