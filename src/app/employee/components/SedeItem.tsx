import Link from "next/link";
import { sedeAttributes } from "@/types";
import RouterLinks from "@/config/RouterLinks";

interface props {
	data: sedeAttributes;
}

export const SedeItem = (props: props) => {
	const { data } = props;
	const { _id, name } = data;

	return (
		<Link href={RouterLinks.sedes.one(_id)}>
			<div>{name}</div>
		</Link>
	);
};
