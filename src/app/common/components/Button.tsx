import React from "react";
import { SkeletonButton, SkeletonButtonProps } from "./SkeletonButton";
import clsx from "clsx";

export const Button = (props: SkeletonButtonProps) => {
	const {
		children,
		className,
		variant = "primary",
		...buttonProps
	} = props;

	const classVariant =
		variant == "primary"
			? "bg-green-500 hover:bg-green-600 text-white"
			: variant == "error"
			? "bg-red-500 hover:bg-red-600"
			: variant == "error-outline"
			? "border border-red-500 hover:bg-red-600" 
			: "";

	return (
		<SkeletonButton
			{...buttonProps}
			className={clsx(
				"px-5 py-2 text-sm font-medium rounded-md shadow transition",
				classVariant,
				className
			)}
		>
			{children}
		</SkeletonButton>
	);
};

export default Button;
