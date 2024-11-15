import React, { InputHTMLAttributes, useState } from "react";
import IconButton from "./IconButton";
import ExitIcon from "./icons/ExitIcon";

interface ItemProps {
	value: string;
	onDelete: () => void;
}

const Item = (itemProps: ItemProps) => {
	const { value, onDelete } = itemProps;

	return (
		<div className="flex items-center">
			{value}
			<IconButton onClick={onDelete}>
				<ExitIcon />
			</IconButton>
		</div>
	);
};

interface props extends InputHTMLAttributes<HTMLInputElement> {
	dataList: string[];
	changeArray: (arr: string[]) => void;
	name: string;
	labelTitle?: string;
	error?: string;
}
const InputTagArray = (props: props) => {
	const { name, labelTitle, dataList, changeArray, error, ...inputProps } =
		props;

	const [inputValue, setInputValue] = useState("second");

	const onDeleteItem = (item: string) => {
		changeArray(dataList.filter((i) => i != item));
	};

	return (
		<div className="">
			<label className="" htmlFor="name">
				{labelTitle}
			</label>

			{dataList.map((d) => (
				<Item value={d} key={d} onDelete={() => onDeleteItem(d)} />
			))}

			<input
				{...inputProps}
				className="px-4 py-3 mt-1 w-full rounded focus:shadow focus:outline-gray-400"
				name={name}
				id={name}
				value={inputValue}
				onChange={({ target: { value } }) => setInputValue(value)}
				onKeyDown={(event) => {
					if (event.key == "Enter") {
						event.preventDefault();

						if (!dataList.includes(inputValue.trim())) {
							setInputValue("");
							changeArray([...dataList, inputValue.trim()]);
						}
					}
				}}
			/>
			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default InputTagArray;
