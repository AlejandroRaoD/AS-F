import Link from "next/link";
import { studentAttributes } from "@/types";
import RouterLinks from "@/config/RouterLinks";

interface props {
	data: studentAttributes;
}

export const StudentItem = (props: props) => {
	const { data } = props;
	const {
		_id,
		name,
		CI,
		address,
		birthday,
		email,
		gender,
		hasInstrument,
		lastname,
		nationality,
		phone_number,
		status,
	} = data;

	return (
		<Link href={RouterLinks.estudiantes.one(_id)}>
			<div>{name}</div>
			<div>{CI}</div>
			<div>{address}</div>
			<div>{birthday}</div>
			<div>{email}</div>
			<div>{gender}</div>
			<div>{hasInstrument}</div>
			<div>{lastname}</div>
			<div>{nationality}</div>
			<div>{phone_number}</div>
			<div>{status}</div>
		</Link>
	);
};
