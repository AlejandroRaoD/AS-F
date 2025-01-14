import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	labelTitle?: string;
	error?: string;
	containerClassName?: string;
	notPadding?: boolean;
}
const Input = (props: props) => {
	const {
		name,
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

			<input
				className={clsx(
					`px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500`,
					className
				)}
				name={name}
				id={name}
				{...inputProps}
			/>
			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default Input;
