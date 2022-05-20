import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NewPokemon from "./NewPokemon";

describe("NewPokemon container", () => {
	test("Renders a form to enter a new pokemon", () => {
		render(<NewPokemon active={true}/>);
		const headingText = screen.getByText(/Nuevo Pokemon/i);
		expect(headingText).toBeInTheDocument();
	});
	test("Doesn't render when not active", () => {
		render(<NewPokemon active={false}/>);
		const headingText = screen.getByText(/Nuevo Pokemon/i);
		expect(headingText).not.toBeInTheDocument();
	});
});
