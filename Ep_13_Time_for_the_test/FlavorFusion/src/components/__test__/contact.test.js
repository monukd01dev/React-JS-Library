import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Contact component should render", () => {
	render(<Contact />);

	const heading = screen.getByRole("heading");

	expect(heading).toBeInTheDocument();
});

test("Contact component should have a button in it", () => {
	render(<Contact />);

	const button = screen.getByRole("button");
	// assertion
	expect(button).toBeInTheDocument();
});

test("Contact component should have an input with placeholder name", () => {
	render(<Contact />);

	const input = screen.getByPlaceholderText("name");

	expect(input).toBeInTheDocument();
});

test("Contact component should have 'page' text init", () => {
	render(<Contact />);

	const text = screen.getByText("Contact-Page");

	expect(text).toBeInTheDocument();
});

test("Contact component should have 2 inputs", () => {
	render(<Contact />);

	// const inputs = screen.getAllByRole("input"); //input is known as textbox
	const inputs = screen.getAllByRole("textbox"); //input is known as textbox

	expect(inputs.length).toBe(1);
});

test("Contact component should have 2 inputs", () => {
	render(<Contact />);

	// const inputs = screen.getAllByRole("input"); //input is known as textbox
	const inputs = screen.getAllByRole("textbox"); //input is known as textbox

	expect(inputs.length).not.toBe(2);
});
