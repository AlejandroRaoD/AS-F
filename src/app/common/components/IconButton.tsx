import React from "react";
import { SkeletonButton, SkeletonButtonProps } from "./SkeletonButton";
import clsx from "clsx";

export const IconButton = (props: SkeletonButtonProps) => {
	const {
		children,
		className,
		size = "normal",
		variant,
		...buttonProps
	} = props;

	const classSize =
		size == "normal" ? "mx-2 p-2" : size == "small" ? "mx-1 p-1" : "mx-2 p-2";

	const classVariant = variant == "primary" ? "bg-green-300 text-white" : "";

	return (
		<SkeletonButton
			{...buttonProps}
			className={clsx(
				"rounded-full hover:bg-cyan-100",
				classSize,
				classVariant,
				className
			)}
		>
			{children}
		</SkeletonButton>
	);
};

export default IconButton;
