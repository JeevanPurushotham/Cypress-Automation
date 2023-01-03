/// <reference types="Cypress" />
describe("flipkart login ", function () {
  it("login", function () {
    cy.visit("https://www.flipkart.com/");
    cy.get("._1_3w1N").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > ._2IX_2-").type("9632145874");
    cy.wait(2000);
    cy.get(":nth-child(2) > ._2IX_2-").type("Jeevan@1");
    cy.get("._2KpZ6l > span").click();
   
  });
});
