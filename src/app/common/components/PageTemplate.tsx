import React, { ReactNode } from "react";
import NavBar, { NavBarProps } from "./NavBar";

interface props {
	children?: ReactNode;
	navBarProps: NavBarProps;
}
const PageTemplate = (props: props) => {
	const { children, navBarProps } = props;

	return (
		<div className="h-screen grid grid-rows-[4rem_1fr]">
			<NavBar {...navBarProps} />

			<div className="overflow-y-auto">{children}</div>
		</div>

		// {panel && (
		// 	<div className="absolute top-0 left-0 bottom-0 right-0 bg-blue-600">
		// 		<div>
		// 			<button onClick={close}>icon button</button>
		// 		</div>
		// 		<div className="flex items-center h-14 bg-gray-500">
		// 			<div>logo</div>

		// 			<div>empresa</div>
		// 		</div>

		// 		<div>opciones del panel</div>
		// 	</div>
		// )}
	);
};

export default PageTemplate;
