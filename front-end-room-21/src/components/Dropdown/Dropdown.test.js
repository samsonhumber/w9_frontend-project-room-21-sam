import  Dropdown from "./dropdown.js";
import { render, screen } from '@testing-library/react';
import {test, expect} from "@jest/globals"

test("Check the structure of the dropdown",()=> {
    //Arrange
    render (<Dropdown />);
    //Act
    const expected = screen.getByText("Select a region");
    //Assert
    expect(expected).toBeInTheDocument();
})