import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
import { FiSearch } from "react-icons/fi";


describe("TextInput", () => {
	it("Renders to the screen", () => {
		render(<TextInput />);
	});

	it("Has a placeholder", () => {
		const placeholderText = "name";

		render(<TextInput placeholder={placeholderText} />);
		screen.getByPlaceholderText(placeholderText);
	});

	it("Includes an icon", () => {
		render(<TextInput icon={<FiSearch />} />);
        screen.getByRole('img')
	});

});
