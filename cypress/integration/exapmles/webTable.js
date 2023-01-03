describe("getting each statement in table", function () {
  it("dynamic content", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            // const pricetext=price.text();
            expect(price.text()).to.equal("25");
          });
          
      }
    });
  });
});
