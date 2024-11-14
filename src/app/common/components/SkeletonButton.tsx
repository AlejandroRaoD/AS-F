import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface SkeletonButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	href?: string;
}

// * este es un componente logico no hay que ponerle estilos en este archivo
export const SkeletonButton = (props: SkeletonButtonProps) => {
	const { children, href, className, ...buttonProps } = props;

	return href ? (
		<Link href={href} className={className}>
			{children}
		</Link>
	) : (
		<button className={className} {...buttonProps}>
			{children}
		</button>
	);
};
