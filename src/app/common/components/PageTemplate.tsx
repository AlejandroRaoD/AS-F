import React, { ReactNode } from "react";
import NavBar, { NavBarProps } from "./NavBar";
import { Toaster } from "react-hot-toast";

import LeftPanel from "./LeftPanel";

interface props {
	children?: ReactNode;
	navBarProps: NavBarProps;
}
const PageTemplate = (props: props) => {
	const { children, navBarProps } = props;

	return (
		<>
			<div className="h-screen grid grid-rows-[4rem_1fr] ml-52 bg-gray-100">
				<NavBar {...navBarProps} />

				<div className="overflow-y-auto">{children}</div>

				<Toaster />
			</div>

			<LeftPanel />
		</>
	);
};

export default PageTemplate;
