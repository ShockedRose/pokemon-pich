import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Table from "./Table";
import pokemonColumns from "containers/PokemonList/pokemonColumns";
import mockData from "mocks/pokemonList.json";

describe("Table Component", () => {
	it("Renders to the screen", () => {
		render(<Table columns={pokemonColumns()} data={[]} />);
	});
});
