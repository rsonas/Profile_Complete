describe('Sign Out Test', () => {


    beforeEach(() => {

        cy.visit('http://localhost:5173/signin');

        cy.get('input[name="email"]')
            .type('testmail@mail.com');

        cy.get('input[name="password"]')
            .type('testingpass');

        cy.contains('Log In')
            .click();

    });



    it('Signs the user out', () => {

        cy.contains('Sign Out')
            .click();

        cy.window()
            .its('localStorage.token')
            .should('not.exist');

        cy.url()
            .should('include','signin');


    });


});