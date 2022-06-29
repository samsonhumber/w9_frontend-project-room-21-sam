/* Ignore the error about 'cy is not defined'. These tests still work fine when you run cypress. Can be fixed by setting cypress as a global etc. in the package.json, but doesn't need to be done in order for the tests to work. Can fix later to remove errors. */

describe("Test checking the site renders.", () => {
  it("Visits the front-end and checks the site is pulling from the back-end correctly.", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("Test checking the Searchbar returns the correct name.", () => {
  it("Looks for the Searchbar on the page, enters text, and returns matching profile(s)", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input")
      .type("Sue")
      .get("button")
      .click()
      .get(".div-container")
      .contains("Sue Flay");
  });
});

describe("Test checking the Dropdown returns the correct Biographies.", () => {
  it.only("Clicks the Dropdowns, selects an option, and the correct result shows on page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("selector");
  });
});
