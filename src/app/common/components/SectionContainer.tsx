import React, { ReactNode } from "react";

export interface props {
	children: ReactNode;
}

const SectionContainer = (props: props) => {
	const { children } = props;

	return (
		<div className="border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg">
			{children}
		</div>
	);
};

export default SectionContainer;
