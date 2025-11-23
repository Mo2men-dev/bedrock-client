import React from "react";

function Button({
	children,
	type = "button",
	className,
	onClick,
}: {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	className?: string;
	onClick?: () => void;
}) {
	return (
		<button
			className={`bg-dark-tertiary w-fit m-auto p-2 text-black cursor-pointer ${className}`}
			type={type}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
