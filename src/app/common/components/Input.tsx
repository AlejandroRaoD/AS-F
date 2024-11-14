import React, { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	labelTitle?: string;
	error?: string;
}
const Input = (props: props) => {
	const { name, labelTitle, error, ...inputProps } = props;

	return (
		<div className="">
			<label className="" htmlFor="name">
				{labelTitle}
			</label>
			<input
				className="px-4 py-3 mt-1 w-full rounded focus:shadow focus:outline-gray-400"
				name={name}
				id={name}
				{...inputProps}
			/>
			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default Input;
