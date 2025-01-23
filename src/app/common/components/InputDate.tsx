import clsx from "clsx";
import React, { InputHTMLAttributes, useState } from "react";
import Datepicker, { DatepickerType } from "react-tailwindcss-datepicker";

interface props extends DatepickerType {
	name: string;
	labelTitle?: string;
	error?: string;
	containerClassName?: string;
	className?: string;
	notPadding?: boolean;
}
const InputDate = (props: props) => {
	const {
		name,
		labelTitle,
		error,
		containerClassName,
		className,
		notPadding,
		asSingle = true,
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

			<Datepicker
				primaryColor="blue"
				// inputClassName={clsx(
				// 	`px-4 py-2  border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500`,
				// 	error ? "border-red-500" : "border-gray-300",
				// 	className
				// )}
				i18n="es"
				useRange={false}
				asSingle={asSingle}
				inputId={name}
				inputName={name}
				{...inputProps}
			/>

			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default InputDate;
