import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import NewPokemon from "../NewPokemon";

// Mostrar, editar, eliminar
// (async) It shows a table with pokemons for the user
//   It shows the edit form with the details of the pokemon
//     It has the save button disable
//     It enables the save button with an input change
//     (async) It update the pokemon and shows a successful operation text at the Above the buttons
//     (async) It fails to update the pokemon and shows an error ocurred text above the buttons
//     It hides the form on cancel click
//   (async) It deletes a pokemon and removes it from the table

// Busqueda
// (async) It finds a pokemon and puts it into the table
// (async) It doesn't find a pokemon and shows "No pokemon found at the right side of the input"

// Agregar
// It opens a NewPokemon form after it's clicked
//     It has the save button disabled
//     It enables the save button with an input change
//     It highlights in red the name input if left empty
//     (async) It adds a new pokemon and updates the table
//     It hides the form on cancel click

describe("NewPokemon container", () => {
	it("Renders a form to enter a new pokemon", () => {
		render(<NewPokemon active={true} />);
		const headingText = screen.getByText(/Nuevo Pokemon/i);
		expect(headingText).toBeInTheDocument();
	});

	it("Doesn't render when not active", () => {
		render(<NewPokemon active={false} />);

		const headingText = screen.queryByText(/Nuevo Pokemon/i);

		expect(headingText).not.toBeInTheDocument();
	});

	it("It has the save button disabled", () => {
		render(<NewPokemon active={true} />);

		const saveButton = screen.getByText(/Guardar/i);

		expect(saveButton).toHaveAttribute("disabled");
	});

	it("It enables the Save button", () => {
		render(<NewPokemon active={true} />);
		
		const nameInput = screen.getByLabelText("Nombre");

		fireEvent.change(nameInput, {target: {value: "Lucario"}})

		const saveButton = screen.getByText("Guardar");

		expect(saveButton).not.toHaveAttribute("disabled");
	});

});
