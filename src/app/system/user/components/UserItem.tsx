"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { UserAttributes } from "../interfaces/user.interface";
import useEmployee from "../../personal/hooks/useEmployee";

type typeItem = "item" | "inList";

interface props {
	data: UserAttributes;
	type?: typeItem;
}

export const UserItem = (props: props) => {
	const { data, type = "item" } = props;

	const { email, _id, employeeId } = data;
	const { employee } = useEmployee({ id: employeeId });

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.users.one(data._id)}
				className="grid grid-cols-5 p-2 border-b hover:shadow"
			>
				<div className="col-span-2">{email}</div>
				<div className="col-span-3">{employee && employee.name}</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.users.one(data._id)}
			className="grid lg:grid-cols-3 border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div>
				<div>{email}</div>
				<div className="text-xs">{_id}</div>
			</div>

			{employee && (
				<>
					<div>
						{employee.name} {employee.lastname}
					</div>

					<div>
						{employee.nationality}-{employee.CI}
					</div>
				</>
			)}
		</Link>
	);
};
