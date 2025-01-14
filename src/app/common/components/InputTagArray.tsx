import React, { InputHTMLAttributes, useState } from "react";
import IconButton from "./IconButton";
import ExitIcon from "./icons/ExitIcon";
import clsx from "clsx";
import PlusIcon from "./icons/PlusIcon";
import Button from "./Button";

interface ItemProps {
	value: string;
	onDelete: () => void;
}

const Item = (itemProps: ItemProps) => {
	const { value, onDelete } = itemProps;

	return (
		<div className="flex items-center justify-between pl-4 rounded-2xl bg-blue-300">
			<div>{value}</div>

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
	containerClassName?: string;
	notPadding?: boolean;
}
const InputTagArray = (props: props) => {
	const {
		name,
		labelTitle,
		dataList,
		changeArray,
		error,
		containerClassName,
		className,
		notPadding,

		...inputProps
	} = props;

	const [inputValue, setInputValue] = useState("");

	const onInsert = () => {
		const value = inputValue.trim();

		if (!value) return;

		if (dataList.includes(value)) return;

		setInputValue("");
		changeArray([...dataList, inputValue.trim()]);
	};

	const onDeleteItem = (item: string) => {
		changeArray(dataList.filter((i) => i != item));
	};

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

			{dataList.length > 0 && (
				<div className="flex flex-wrap gap-2 my-2">
					{dataList.map((d) => (
						<Item value={d} key={d} onDelete={() => onDeleteItem(d)} />
					))}
				</div>
			)}


<div className="flex">

			<input
				{...inputProps}
				className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
				name={name}
				id={name}
				value={inputValue}
				onBlur={onInsert}
				onChange={({ target: { value } }) => setInputValue(value)}
				onKeyDown={(event) => {
					if (event.key == "Enter") {
						event.preventDefault();

						onInsert();
					}
				}}
			/>

			<Button onClick={onInsert} className="ml-2">
				añadir
			</Button>
</div>
			<p className="text-red-400">{error}</p>
		</div>
	);
};

export default InputTagArray;
