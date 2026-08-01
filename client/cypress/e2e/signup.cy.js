describe('Sign Up Test', () => {


    it('Creates a new user account', () => {


        cy.visit('http://localhost:5173/signup');

        cy.get('input[name="fName"]')
            .type('Cypress');

        cy.get('input[name="lName"]')
            .type('Tester');

        cy.get('input[name="email"]')
            .type(
              `cypress${Date.now()}@mail.com`
            );

        cy.get('input[name="password"]')
            .type('testingpass');

        cy.contains('Save User')
            .click();

        cy.url()
            .should('include','/');


    });


});