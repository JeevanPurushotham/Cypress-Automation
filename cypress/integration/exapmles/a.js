describe("My frist test suite", function () {
  it("my first test case", function () {
    //test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get(".search-keyword").type("ca");
    cy.get(".product:visible").should("have.length", 4);

    // cy.get(".search-keyword").type("r");
    // cy.get(".product:visible").should("have.length", 1);
  });
});

// describe("my second test suite",function(){
//   it("hi",function(){
//     cy.get(".search-keyword").type("r");
//     cy.get(".product:visible").should("have.length",1);
//   });
// });

describe("first", function () {
  it("another", function () {
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    //perent child chaining
    cy.get(".products").as("productLocator");
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const test = $el.find(".product-name").text();
        if (test.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });
});
