describe("Second test case", function () {
  it("testcase", function () {
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkBoxOption1")
      .click()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "option1");

    //Static Dropdown
    cy.get("Select").select("option2").should("have.value", "option2");

    //Dynamic dropdowns

    cy.get("#autocomplete").type("ind"); //# is use to mention to class id

    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      if ($e1.text() === "India") {
        $e1.click();
      }
    });

    // cy.get("#autocomplete").should("have.value", "India");

    //radio buttons

    cy.get("[value='radio2']").check().should("be.checked");

    //we have to mention [] inside attributes name
  });
});
