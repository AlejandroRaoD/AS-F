import clsx from "clsx";
import React, { InputHTMLAttributes, useState } from "react";
import Datepicker, { DatepickerType } from "react-tailwindcss-datepicker";

interface props extends DatepickerType {
	name: string;
	labelTitle?: string;
	error?: string;
}
const InputDate = (props: props) => {
	const { name, labelTitle, error, ...inputProps } = props;


	return (
		<div className="">
			<label className="" htmlFor="name">
				{labelTitle}
			</label>

			<Datepicker
				primaryColor="blue"
				// toggleClassName="absolute bg-blue-900 text-white rounded-r-lg right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
				inputClassName={clsx(
					"px-4 py-3 mt-1 w-full rounded focus:shadow focus:outline-gray-400",
					error ? "border-red-500" : "border-gray-300"
				)}
				i18n="es"
				useRange={false}
				asSingle
				inputId={name}
				inputName={name}
				{...inputProps}
			/>

			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default InputDate;
