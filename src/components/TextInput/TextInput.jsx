import React, { useState } from "react";

export default function TextInput({
	onBlur,
	label,
	labelId,
	placeholder,
	name,
	onKeyDown,
	icon,
	initialValue = "",
}) {
	const [value, setValue] = useState(initialValue);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className="text-input">
				{icon && <span role="img">{icon}</span>}
				<input
					type="text"
					placeholder={placeholder}
					name={name}
					id={labelId || ""}
					onChange={onChange}
					onBlur={onBlur}
					onKeyDown={onKeyDown}
					value={value}
				/>
			</div>
		</>
	);
}
