import React, { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	labelTitle?: string;
	error?: string;
	containerClassName?: string;
}
const Input = (props: props) => {
	const {
		name,
		labelTitle,
		error,
		containerClassName,
		className,
		...inputProps
	} = props;

	return (
		<div className={`flex flex-1 flex-col ${containerClassName}`}>
			{labelTitle && (
				<label className="" htmlFor={name}>
					{labelTitle}
				</label>
			)}

			<input
				// className="px-4 py-3 mt-1 w-full rounded focus:shadow focus:outline-gray-400"
				className={`px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
				name={name}
				id={name}
				{...inputProps}
			/>
			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default Input;
