describe("My frist test suite", function () {
  it("my first test case", function () {
    //test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click()

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge");
    });
     
    cy.get("#confirmbtn").click()
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });



  });
});
