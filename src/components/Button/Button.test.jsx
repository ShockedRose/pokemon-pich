import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
	it("Renders to the screen", () => {
		render(<Button />);
	});

	it("Runs a function when clicked", () => {
		const mockHandler = jest.fn(() => null);

		render(<Button onClick={mockHandler} text="button" />);

		expect(mockHandler).toHaveBeenCalledTimes(0);

		fireEvent.click(screen.getByText("button"));

		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	it("is disabled when explicitly asked to", () => {
		const mockHandler = jest.fn(() => null);

		render(<Button onClick={mockHandler} text="button" />);

		expect(mockHandler).toHaveBeenCalledTimes(0);

		fireEvent.click(screen.getByText("button"));

		expect(mockHandler).toHaveBeenCalledTimes(1);
	});
});
