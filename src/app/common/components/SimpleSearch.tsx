import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import axiosErrorHandle from "../helpers/axiosErrorHandle";

interface props {
	onSubmit(str: string);
	onClear();
}

const SimpleSearch = (props: props) => {
	const { onSubmit, onClear } = props;

	const [inputValue, setInputValue] = useState("");

	return (
		<form
			className="flex justify-between mb-4"
			onSubmit={async (e) => {
				e.preventDefault();

				if (!inputValue) return;

				try {
					await onSubmit(inputValue);
				} catch (error) {
					axiosErrorHandle(error);
				}
			}}
		>
			<Input
				notPadding
				type="search"
				name="search"
				placeholder="Buscar"
				value={inputValue}
				onChange={(e) => {
					const value = e.target.value.trim();
					setInputValue(value);

					if (!value) onClear();
				}}
				className="mr-2"
			/>

			<Button type="submit">Buscar</Button>
		</form>
	);
};

export default SimpleSearch;
