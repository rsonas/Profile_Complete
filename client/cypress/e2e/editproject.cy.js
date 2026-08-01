describe('Edit Project Test', () => {


    beforeEach(() => {

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



    it('Edits an existing project', () => {

        cy.visit('http://localhost:5173/admin/projects');

        // click first edit button
        cy.get('button')
            .contains('Edit')
            .first()
            .click();

        cy.get('input[name="title"]')
            .clear()
            .type('Updated Cypress Project');

        cy.contains('Save Project')
            .click();

        cy.url()
            .should('include','/admin/projects');


    });

});