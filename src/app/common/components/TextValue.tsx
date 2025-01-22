import clsx from "clsx";
import React from "react";

interface props {
	title: string;
	value: string | string[];
	largeContent?: boolean;
}

const TextValue = ({ title, value, largeContent }: props) => (
	<div className="grid grid-cols-6">
		<b className={clsx("col-span-2", largeContent && "lg:col-span-1")}>
			{title}:
		</b>

		<div className={clsx("col-span-4", largeContent && "lg:col-span-5")}>
			{value instanceof Array ? (
				value.map((item) => <div key={item}>{item}</div>)
			) : (
				<div>{value}</div>
			)}
		</div>
	</div>
);

export default TextValue;
