import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { representativeAttributes } from "../interfaces/representative.interface";

interface props {
	data: representativeAttributes;
}

export const RepresentativeItem = (props: props) => {
	const { data } = props;
	const {
		_id,
		name,
		CI,
		address,
		email,
		gender,
		lastname,
		nationality,
		phone_number,
	} = data;

	return (
		<Link href={RouterLinks.representante.one(_id)}>
			<div>{name}</div>
			<div>{CI}</div>
			<div>{address}</div>
			<div>{email}</div>
			<div>{gender}</div>
			<div>{lastname}</div>
			<div>{nationality}</div>
			<div>{phone_number}</div>
		</Link>
	);
};
