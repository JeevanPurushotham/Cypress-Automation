describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    cy.get(":nth-child(1) > .card > .card-body > .w-10").click();
    cy.get(":nth-child(4) > .btn").click();
    cy.get(".subtotal > ul > :nth-child(3) > .btn").click();

    cy.get(".form-group > .input").type("ind");
    cy.get(".ta-results button").each(($e1) => {
      if ($e1.text() === " India") {
        cy.wrap($e1).click();
      }
    });

    cy.get(".btnn").click();
    cy.get('[class="btn btn-primary mt-3 mb-3"]').click();
  });
});
