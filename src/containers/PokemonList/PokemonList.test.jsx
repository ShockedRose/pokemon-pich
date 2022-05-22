import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import PokemonList from "../PokemonList";


describe("PokemonList container", () => {
	it("Renders to the screen", () => {
		render(<PokemonList />);
	});

});
