import clsx from "clsx";
import React, { ReactNode } from "react";

export interface props {
	children?: ReactNode;
	className?: string;
}

const SectionContainer = (props: props) => {
	const { children, className } = props;

	return (
		<div
			className={clsx(
				"border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg",
				className
			)}
		>
			{children}
		</div>
	);
};

export default SectionContainer;
