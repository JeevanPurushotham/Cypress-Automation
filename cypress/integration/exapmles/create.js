describe("My First Test Suite", function () {
  it.skip("My FirstTest case", function () {
    cy.visit("https://demo.nopcommerce.com/");
    cy.get(".ico-login").click();
    cy.get(".new-wrapper > .buttons > .button-1").click();
    cy.get("#gender-male").click();
    cy.get("#FirstName").type("jee");
    cy.get("#LastName").type("p");
    cy.get('[name="DateOfBirthDay"]').select("1").should("have.value", "1");
    cy.get('[name="DateOfBirthMonth"]')
      .select("April")
      .should("have.value", "4");
    cy.get('[name="DateOfBirthYear"]')
      .select("1998")
      .should("have.value", "1998");
    cy.get("#Email").type("j@gmail.com");
    cy.get("#Company").type("Josh");
    cy.get("#Password").type("Jee1");
    cy.get("#ConfirmPassword").type("Jee1");
    cy.get("#register-button").click();
    cy.get("p").should("have.text", "Password must meet the following rules: ");
  });

  it("second", function () {
    cy.visit("https://demo.nopcommerce.com/");
    cy.get(":nth-child(1) > .category-item > .picture > a > img").click();
    cy.get(":nth-child(1) > .sub-category-item > .picture > a > img").click();
    cy.get(
      ":nth-child(1) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button"
    ).click();
    cy.get(".compare-products > .button-2").click();
    cy.get(".content").should(
      "have.text",
      "The product has been added to your product comparison"
    );
    cy.get("#add-to-cart-button-14").click();
    cy.get(".bar-notification").should(
      "have.text",
      "The product has been added to your shopping cart"
    );
    cy.get(".cart-label").click();
    cy.get("#open-estimate-shipping-popup").click();
    cy.get("#CountryId").select("India").should("have.value", "133");
    cy.get("#ZipPostalCode").type("560015");
    cy.get(".apply-shipping-button-container > .button-2").click();
    // cy.get(".button-2 apply-shipping-button").click

    // cy.get(".apply-shipping-button-container > .button-2").click();
    // cy.get("#checkout").click();
    /*cy.get("hoi").click()
      cy.get("uhi this is testing making us very qiriouus on the work really")
      select("switch to developments then u can get more salary and growing in your carrier so after one year plz witch to development")*/
  });
});
