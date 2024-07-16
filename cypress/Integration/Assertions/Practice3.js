describe('TEST2', () => {
    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('a[href="https://rahulshettyacademy.com/documents-request"]').click();
        cy.go('back');
        cy.go('forward');
        cy.reload();
        cy.go('back')
    });
});