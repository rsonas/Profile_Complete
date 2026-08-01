describe('Add Project Test', () => {

    beforeEach(() => {

        // login before test
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


    it('Adds a new project', () => {

        cy.visit('http://localhost:5173/admin/projects/add');

        cy.get('input[name="title"]')
            .type('Cypress Test Project');

        cy.get('input[name="description"]')
            .type('Created using Cypress');

        cy.get('input[name="completion"]')
            .type('2026-08-01');

        cy.contains('Save Project')
            .click();

        cy.url()
            .should('include', '/admin/projects');

    });

});