import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { representativeAttributes } from "../interfaces/representative.interface";

type typeItem = "item" | "inList";

interface props {
	data: representativeAttributes;
	type?: typeItem;
}

export const RepresentativeItem = (props: props) => {
	const { data, type } = props;
	const { name, CI, lastname, nationality, phone_number, job } = data;

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.representante.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-3">{name}</div>
				<div className="col-span-2">
					{nationality}-{CI}
				</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.representante.one(data._id)}
			className="grid lg:grid-cols-12 border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div className="col-span-3">{name}</div>
			<div className="col-span-3">{lastname}</div>
			<div className="col-span-2">
				{nationality}-{CI}
			</div>
			<div className="col-span-2">{phone_number[0]}</div>
			<div className="col-span-2">{job}</div>
		</Link>
	);
};
