/// <reference types="Cypress" />

describe("Select top and reload in dynamic", function () {
  it("test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".mouse-hover-content").invoke("show");
    cy.wait(2000);
    cy.contains("Top").click();
  });
});
