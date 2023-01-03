describe("My frist test suite", function () {
  it("my first test case", function () {
    cy.visit("https://rahulshettyacademy.com/");
    // cy.get(".icon flaticon-mortarboard-1").click();
    cy.get(':nth-child(2) > a > .services-style-one > .inner-box > h3').click()
  });
});
