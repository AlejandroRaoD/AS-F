import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button = (props: props) => {
	const { children, ...buttonProps } = props;

	return <button {...buttonProps}>{children}</button>;
};

export default Button;
