import React, { useState } from "react";

export default function RangeInput({
	label,
	labelId,
	name,
	initialValue = 50,
	onBlur,
}) {
	const [value, setValue] = useState(initialValue);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="flex-container align-middle justify-between">
		{label && <label htmlFor={labelId}>{label}: &nbsp;</label>}
			<div className="range-input">0 &nbsp; 
				<input
				className="styled-slider slider-progress"
					type="range"
					min={0}
					max={100}
					name={name}
					id={labelId || ""}
					onChange={onChange}
					value={value}
					onBlur={onBlur}
				/> 100
			</div>
		</div>
	);
}
