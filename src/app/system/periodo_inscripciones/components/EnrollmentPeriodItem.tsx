"use client";

import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";
import { enrollmentPeriodAttributes } from "../interfaces/enrollmentPeriod.interface";

type typeItem = "item" | "inList";

interface props {
	data: enrollmentPeriodAttributes;
	type?: typeItem;
}

export const EnrollmentPeriodItem = (props: props) => {
	const { data, type = "item" } = props;

	const { step, year } = data;

	if (type == "inList")
		return (
			<Link
				href={RouterLinks.enrollmentPeriod.one(data._id)}
				className="p-2 border-b hover:shadow"
			>
				<div>
					{year.toString()} - {step.toString()}
				</div>
			</Link>
		);

	return (
		<Link
			href={RouterLinks.enrollmentPeriod.one(data._id)}
			className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:border-green-500 hover:bg-gray-50"
		>
			<div>
				{year.toString()} - {step.toString()}
			</div>
		</Link>
	);
};

