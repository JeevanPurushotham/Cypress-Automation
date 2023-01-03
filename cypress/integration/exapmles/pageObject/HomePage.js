class HomePage {

  getEditBox() {
    return cy.get(":nth-child(1) > .form-control");
  }
  getTwoWayDataBinding(){
     return  cy.get("select");
  }
  getGender(){
    return cy.get(":nth-child(4) > .ng-untouched");
  }
  getEntrepreneur(){
    return cy.get("#inlineRadio3");
  }
  getShopCart(){
    return cy.get(":nth-child(4) > .ng-untouched");
  }

}

export default HomePage;
