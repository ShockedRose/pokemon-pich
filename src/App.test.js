import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the application", () => {
	const component = render(<App />);
	const header = screen.getByText("Listado de Pokemon");
	expect(header).toBeInTheDocument();
});

test("It fetches data", async () => {
	render(<App />);

	const data = await screen.queryByText("Pikachu");
});
