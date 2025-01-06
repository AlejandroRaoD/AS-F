import React from "react";
import { SkeletonButton, SkeletonButtonProps } from "./SkeletonButton";

export const Button = (props: SkeletonButtonProps) => {
	const { children, className, ...buttonProps } = props;

	return (
		<SkeletonButton
			{...buttonProps}
			className={`px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow hover:bg-green-600 transition ${className} `}
		>
			{children}
		</SkeletonButton>
	);
};

export default Button;
