import React, { SelectHTMLAttributes } from "react";

interface listItem {
	title: string;
	value: string;
}

interface props extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	dataList: listItem[];
	labelTitle?: string;
	error?: string;
}
const Select = (props: props) => {
	const { name, dataList, labelTitle, error, ...inputProps } = props;

	return (
		<div className="">
			<label className="" htmlFor="name">
				{labelTitle}
			</label>

			<select
				className="px-4 py-3 mt-1 w-full rounded focus:shadow focus:outline-gray-400"
				name={name}
				id={name}
				{...inputProps}
			>
				<option key={""} value={""}>
					seleccione un valor
				</option>
				{dataList.map(({ title, value }) => (
					<option key={value} value={value}>
						{title}
					</option>
				))}
			</select>
			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default Select;
