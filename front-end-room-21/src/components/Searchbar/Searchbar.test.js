import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";

test("The Searchbar component renders a input field.", () => {
  render(<Searchbar />);
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
});

// TODO: figure out how to test nested components to test if Biography returns correctly when Searchbar used.
