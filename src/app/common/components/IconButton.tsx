import React from "react";
import { SkeletonButton, SkeletonButtonProps } from "./SkeletonButton";

export const IconButton = (props: SkeletonButtonProps) => {
	const { children, className, ...buttonProps } = props;

	return (
		<SkeletonButton
			{...buttonProps}
			className={`mx-2 p-2 rounded-full hover:bg-cyan-100 ${className}`}
		>
			{children}
		</SkeletonButton>
	);
};

export default IconButton;
