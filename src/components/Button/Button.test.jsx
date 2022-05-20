import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Button from "./Button";


describe("Button Component", () => {
	it("Renders to the screen", () => {
		render(<Button />);
	});

});
