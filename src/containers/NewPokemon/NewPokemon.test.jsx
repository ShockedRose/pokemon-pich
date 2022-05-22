import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import NewPokemon from "./NewPokemon";

describe("NewPokemon container", () => {
	it("Renders a form to enter a new pokemon", () => {
		render(<NewPokemon />);
		const headingText = screen.getByText(/Agregar Pokemon/i);
		expect(headingText).toBeInTheDocument();
	});

	it("It has the save button disabled", () => {
		const { container } = render(<NewPokemon />);

		const saveButton = container.querySelector("button.disabled");

		expect(saveButton).toBeTruthy();
	});

	it("Enables the Save button", () => {
		const { container } = render(<NewPokemon />);

		const nameInput = screen.getByLabelText("Nombre:");

		fireEvent.change(nameInput, { target: { value: "Lucario" } });
		fireEvent.blur(nameInput);

		const saveButton = container.querySelector("button.disabled");

		expect(saveButton).toBeFalsy();
	});
});
