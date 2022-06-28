import { render, screen } from "@testing-library/react";
import BiosList from "./BiosList";

test("renders our app", () => {
  render(<App />);
  const linkElement = screen.getByText("Catch Up");
  expect(linkElement).toBeInTheDocument();
});
