describe('verify the title of Google', () => {
    it('GoogleTEST', () => {
        cy.visit('https://google.com/');
        cy.title().should('include','Google');
    });
});