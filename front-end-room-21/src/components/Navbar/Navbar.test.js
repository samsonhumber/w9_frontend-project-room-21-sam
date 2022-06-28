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