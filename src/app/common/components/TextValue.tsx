import React from "react";

interface props {
	title: string;
	value: string | string[];
}

const TextValue = ({ title, value }: props) => (
	<div className="grid grid-cols-6">
		<b className="col-span-2">{title}:</b>

		<div className="col-span-4">
			{value instanceof Array ? (
				value.map((item) => <div key={item}>{item}</div>)
			) : (
				<div>{value}</div>
			)}
		</div>
	</div>
);

export default TextValue;
