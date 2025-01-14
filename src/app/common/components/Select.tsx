import clsx from "clsx";
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
	containerClassName?: string;
	notPadding?: boolean;
}
const Select = (props: props) => {
	const {
		name,
		dataList,
		labelTitle,
		error,
		containerClassName,
		className,
		notPadding,

		...inputProps
	} = props;

	return (
		<div
			className={clsx(
				"flex flex-1 flex-col",
				notPadding || "mb-4",
				containerClassName
			)}
		>
			{labelTitle && (
				<label className="" htmlFor={name}>
					{labelTitle}
				</label>
			)}

			<select
				className={`px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
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
