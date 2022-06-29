import { render, screen } from "@testing-library/react";
import Biography from "./biography.js";
import testImage from "./testImage.jpg";

test("Renders Biography of a calamatous PM.", () => {
  render(
    <Biography
      bcName="Boris Johnson"
      id={101}
      avatar={testImage}
      region="London"
      desc="Get Brexit done. Hands, face, space. Also: party, party, party!"
    />
  );
  const nameElement = screen.getByText("Boris Johnson");
  const regionElement = screen.getByText("London");
  const imageElement = screen.getByRole("img");

  expect(nameElement).toBeInTheDocument();
  expect(regionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
