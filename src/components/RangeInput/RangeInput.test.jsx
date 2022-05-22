import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import RangeInput from "./RangeInput";

describe("RangeInput", () => {
	it("Renders to the screen", () => {
		render(<RangeInput />);
	});

	it("Has a label", () => {
		const labelText = "name";

		render(<RangeInput label={labelText} labelId={labelText} />);
		
		screen.getByLabelText(labelText + ":");
	});
});
