import React, { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	labelTitle?: string;
	error?: string;
}
const Input = (props: props) => {
	const { name, labelTitle, error, ...inputProps } = props;

	return (
		<div>
			<label htmlFor="name">{labelTitle}</label>
			<input name={name} id={name} {...inputProps} />
			<div>{error}</div>
		</div>
	);
};

export default Input;
