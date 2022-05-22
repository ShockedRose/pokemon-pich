import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import EditPokemon from "../EditPokemon";
import mockData from "mocks/pokemonList.json";

describe("EditPokemon container", () => {
	it("Renders a form with an existing pokemon", () => {
		render(<EditPokemon selected={mockData[0]} />);
		const headingText = screen.getByText(/Editar Pokemon/i);
		expect(headingText).toBeInTheDocument();
	});

	it("Has the pokemon name on the input", () => {
		const { container } = render(<EditPokemon selected={mockData[0]} />);

		const input = container.querySelector("input[name='name']");

		expect(input.value).toBe(mockData[0].name);
	});
});
