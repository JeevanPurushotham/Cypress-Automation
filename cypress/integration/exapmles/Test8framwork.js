import HomePage from "../exapmles/pageObject/HomePage";
import ProductPage from "../exapmles/pageObject/ProductPage";

describe("My frist test suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("my first test case", function () {
    const homePage = new HomePage();
    const product = new ProductPage();

    /*order of line calling here --
            1.to visit link
            2.to get name in present in fixture (Json format)
            3.to get gender in present in fixure (Json format)
            4.two way data binding
            5.edit box length check
            6.get Entrepreneur 

             cy.visit(Cypress.env('url')+"/angularpractice/")

              homePage.getEditBox().type(this.data.name)
              homePage.getGender().select(this.data.gender)
              homePage.getTwoWayDataBinding().should('have.value',this.data.name)
              homePage.getEditBox().should('have.attr','minlength','2')
              homePage.getEntrepreneaur().should('be.disabled')
              Cypress.config('defaultCommandTimeout', 8000)
              homePage.getShopTab().click()

            
            */

    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get(":nth-child(1) > .form-control").type(this.data.Name);

    cy.get("select").select(this.data.Gender);

    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.Name
    );

    cy.get(":nth-child(1) > .form-control").should(
      "have.attr",
      "minlength",
      "2"
    );

    cy.get("#inlineRadio3").should("be.disabled");

    cy.get(":nth-child(2) > .nav-link").click();

    //this block for selsect the product in cart but inseted of doing this we can write this in commands.js and we can call directly.
    //below this block we called that method.

    /*cy.get(":nth-child(1) > .card > .card-footer > .btn").click();

    cy.get("h4.card-title").each(($el, index, $list) => {
      if ($el.text().includes("Blackberry")) {
        cy.get("button.btn.btn-info").eq(index).click();
      }
    });*/

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").click();

    product.checkOutButton().click();

    /* product cost sum*/
    var sum = 0;

    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const amount = $el.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 strong").then(function (element) {
      const amount = element.text();
      var res = amount.split(" ");
      var total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });

    product.checkOut().click();

    cy.get("#country").type("India");
    cy.wait(4000);
    cy.get(".suggestions > ul > li > a").click();
    cy.get(".checkbox").click();
    cy.get(".ng-untouched > .btn").click();
    // cy.get('strong').includes("Suc")---> this is for just event if you want assert we have to do below method.
    cy.get(".alert").then((ele) => {
      const actualText = ele.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});
