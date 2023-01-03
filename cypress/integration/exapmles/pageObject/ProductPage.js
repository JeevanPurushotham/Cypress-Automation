class ProductPage{
    checkOutButton(){
         return cy.get(':nth-child(1) > :nth-child(4) > strong');
    }

    checkOut(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn');
    }
     country(){
        return cy.get('#country');
    }
}

export default ProductPage;