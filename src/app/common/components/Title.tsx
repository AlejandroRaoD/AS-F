import React, { ReactNode } from "react";

interface props {
	children: ReactNode;
}

const Title = (props: props) => {
	const { children } = props;

	return <div className="text-2xl">{children}</div>;
};

export default Title;
