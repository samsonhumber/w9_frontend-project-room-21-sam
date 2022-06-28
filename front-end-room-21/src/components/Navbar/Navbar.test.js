import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders our app", () => {
  render(<App />);
  const linkElement = screen.getByText("Catch Up");
  expect(linkElement).toBeInTheDocument();
});

import  NavBar from "./navbar.js";
import { render, screen } from '@testing-library/react';
import {test, expect} from "@jest/globals"

test("TEsting if elements are displayed on page",()=> {
    //Arrange
    render (<NavBar />);
    //Act
    const expected = screen.getByText(".Class"); 
    //Assert
    expect(expected).toBeInTheDocument();
})