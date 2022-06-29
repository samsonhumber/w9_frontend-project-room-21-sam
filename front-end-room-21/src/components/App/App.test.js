import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders our App and nested elements.", () => {
  render(<App />);
  const appElement = screen.getByRole("main");
  const navElement = screen.getByRole("navigation");
  const searchElement = screen.getByRole("textbox");

  expect(appElement).toBeInTheDocument();
  expect(navElement).toBeInTheDocument();
  expect(searchElement).toBeInTheDocument();
});
