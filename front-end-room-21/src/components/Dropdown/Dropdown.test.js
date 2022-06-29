import Dropdown from "./dropdown.js";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";

test("Check the structure of the dropdown", () => {
  render(<Dropdown />);
  const expectedRegion = screen.getByText("Select a region");
  const expectedBootcamp = screen.getByText("Select a bootcamp");

  expect(expectedRegion).toBeInTheDocument();
  expect(expectedBootcamp).toBeInTheDocument();
});

/* TODO: Refactor the dropdown to be more semantic and accessible.

Trying to select the dropdowns returns errors in this test that the values are not valid HTML elements. Mapping as arrays seems to be non-standard, so maybe we should refactor the Dropdown component to be a different format which is more accessible and can be gotten ByRole in tests? */
