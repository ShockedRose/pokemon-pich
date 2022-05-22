import React from "react";

export default function Button({
	text = "button",
	icon,
	onClick,
	disabled,
	type,
}) {
	return (
		<>
			<button
				type={type}
				onClick={() => {
					if (disabled) {
						return;
					}
					onClick();
				}}
				className={disabled ? "disabled" : ""}
			>
				{icon && <span role="img">{icon}</span>} {text}
			</button>
		</>
	);
}
