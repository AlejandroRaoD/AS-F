import React, { ReactNode } from "react";
import IconButton from "./IconButton";
import LeftIcon from "./icons/LeftIcon";

export interface NavBarProps {
	navTitle: ReactNode;
	hrefBackButton?: string;
	rightButtons?: ReactNode;
}

const NavBar = (props: NavBarProps) => {
	const { navTitle, hrefBackButton, rightButtons } = props;

	return (
		<nav className="flex justify-between items-center bg-white shadow">
			<div className="flex items-center">
				{hrefBackButton && (
					<IconButton href={hrefBackButton}>
						<LeftIcon />
					</IconButton>
				)}

				<div className="ml-2">{navTitle}</div>
			</div>
			<div className="flex items-center">{rightButtons}</div>
		</nav>
	);
};

export default NavBar;
