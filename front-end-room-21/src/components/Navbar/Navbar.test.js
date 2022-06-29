import NavBar from "./navbar.js";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";

test("Testing if Navbar elements are displayed on page", () => {
  render(<NavBar />);
  const navbar = screen.getByRole("navigation");
  expect(navbar).toBeInTheDocument();
});
