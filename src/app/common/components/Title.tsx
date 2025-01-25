import clsx from "clsx";
import React, { ReactNode } from "react";

type titleTypes = "h1" | "h2" | "h3";
interface props {
	className?: string;
	titleType?: titleTypes;
	children: ReactNode;
}

const getClassOfTitle = (str: titleTypes): string =>
	str == "h1"
		? "text-2xl font-semibold mb-5"
		: str == "h2"
		? "text-xl font-semibold mb-2"
		: str == "h3"
		? "text-lg font-semibold mb-1"
		: "text-lg";

const Title = (props: props) => {
	const { children, titleType, className } = props;

	let titleClassName = getClassOfTitle(titleType);

	return (
		<div className={clsx("text-gray-800", titleClassName, className)}>
			{children}
		</div>
	);
};

export default Title;
