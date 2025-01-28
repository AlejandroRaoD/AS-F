import SectionContainer from "@/app/common/components/SectionContainer";
import Title from "@/app/common/components/Title";
import React from "react";
import { UserPermissions } from "../interfaces/user.interface";
import SquareCheckIcon from "@/app/common/components/icons/SquareCheckIcon";
import SquareIcon from "@/app/common/components/icons/SquareIcon";
import clsx from "clsx";

interface props {
	value: string[];
	setValue?(v: string[]);
}

const UserPermissionsList = (props: props) => {
	const { value, setValue } = props;

	return (
		<SectionContainer className={clsx(setValue ? "border-orange-500" : "")}>
			<Title titleType="h2">Permisos</Title>

			<div className="grid lg:grid-cols-3 gap-2">
				{Object.values(UserPermissions).map((name) => (
					<div
						className={clsx(
							"flex items-center px-4 py-2 rounded ",
							setValue && "hover:bg-slate-100",
							props.value.includes(name) && "border border-green-500"
						)}
						key={name}
						onClick={() => {
							if (!setValue) return;

							const arr = props.value;

							const newArr = arr.includes(name)
								? arr.filter((targets) => targets != name)
								: [...arr, name];

							setValue(newArr);
						}}
					>
						<div className="w-8">
							{value.includes(name) ? <SquareCheckIcon /> : <SquareIcon />}
						</div>
						<div>{name}</div>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};

export default UserPermissionsList;
