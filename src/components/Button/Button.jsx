import React from "react";

export default function Button({ text = "button", icon, onClick }) {
	return (
		<>
			<button>
				{icon && <span role="img">{icon}</span>} {text}
			</button>
		</>
	);
}
