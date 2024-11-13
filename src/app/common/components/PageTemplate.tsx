import React, { ReactNode } from "react";

interface props {
	children?: ReactNode;
	pageTitle: ReactNode;
}
const PageTemplate = (props: props) => {
	const { children, pageTitle } = props;

	return (
		<div className="h-screen grid grid-rows-[4rem_1fr]">
			<nav className="flex  justify-between items-center">
				<div className="flex">
					<button>icon button</button>
					<div>{pageTitle}</div>
				</div>
				<div>
					<button>A</button>
					<button>A</button>
					<button>A</button>
				</div>
			</nav>

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
