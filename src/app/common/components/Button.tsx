import React from "react";
import { SkeletonButton, SkeletonButtonProps } from "./SkeletonButton";

export const Button = (props: SkeletonButtonProps) => {
	const { children, className, ...buttonProps } = props;

	return (
		<SkeletonButton
			{...buttonProps}
			className={`py-2 px-5 rounded bg-red-400 ${className} `}
		>
			{children}
		</SkeletonButton>
	);
};

export default Button;
