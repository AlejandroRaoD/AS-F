import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type VarianButton = "primary" | "error" | "error-outline" | "warning";
type Size = "large" | "normal" | "small";
type FillMode = "outline" | "full";

export interface SkeletonButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	href?: string;
	variant?: VarianButton;
	fillMode?: FillMode;
	size?: Size;
}

// * este es un componente logico no hay que ponerle estilos en este archivo
export const SkeletonButton = (props: SkeletonButtonProps) => {
	const { children, href, className, ...buttonProps } = props;

	return href ? (
		<Link href={href} className={className}>
			{children}
		</Link>
	) : (
		<button type="button" className={className} {...buttonProps}>
			{children}
		</button>
	);
};
