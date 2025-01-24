import React, { ReactNode } from "react";

type titleTypes = "h1" | "h2" | "h3";
interface props {
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
	const { children, titleType } = props;

	let titleClassName = getClassOfTitle(titleType);

	return <div className={`text-gray-800  ${titleClassName}`}>{children}</div>;
};

export default Title;
