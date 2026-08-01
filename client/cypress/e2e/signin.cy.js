describe('Sign In Test', () => {

    it('Log in with existing user account', () => {

        cy.visit('http://localhost:5173/signin');

        cy.get('input[name="email"]')
            .type('testmail@mail.com');

        cy.get('input[name="password"]')
            .type('testingpass');

        cy.contains('Log In')
            .click();

        cy.window()
        .its('localStorage.token')
        .should('exist');

    });

});