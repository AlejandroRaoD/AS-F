import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { systemLogAttributes } from "../interfaces/systemLog.interface";

interface props {
	data: systemLogAttributes;
}

export const SystemLogItem = (props: props) => {
	const { data } = props;
	const {
		_id,
		createdAt,
		systemAction,
		userEmail,
		userId,
		moduleItem,
		itemId,
		text,
	} = data;

	return (
		<div className="text-sm border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50">
			<div className="flex space-x-2">
				<b className="">{createdAt}</b>
				<div>{userId || "Admin-Id"}</div>
				<div>{userEmail || "admin-Email"}</div>
				<div>{systemAction}</div>
				<div>{moduleItem}</div>
				<div>{itemId}</div>
				<div>{text}</div>
			</div>
		</div>
	);
};
