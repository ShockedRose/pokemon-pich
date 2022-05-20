import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";


describe("SearchInput", () => {
	it("Renders to the screen", () => {
		render(<SearchInput />);
	});

});
