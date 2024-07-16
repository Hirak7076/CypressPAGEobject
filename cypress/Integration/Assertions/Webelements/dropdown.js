describe('Dropdown', () => {
    it('Test1 - VALUE', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//select[@id="dropdown-class-example"]').select('option2').should('have.value','option2');
        cy.xpath('//select[@id="dropdown-class-example"]').select('option1').should('have.value','option1');
        cy.xpath('//select[@id="dropdown-class-example"]').select('option3').should('have.value','option3');
        cy.xpath('//select[@id="dropdown-class-example"]').select('').should('have.value','');
    });
    it('Test2 - TEXT', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//select[@id="dropdown-class-example"]').select('Option3').should('have.value','option3');
        cy.xpath('//select[@id="dropdown-class-example"]').select('Option2').should('have.value','option2');
        cy.xpath('//select[@id="dropdown-class-example"]').select('Option1').should('have.value','option1');
        cy.xpath('//select[@id="dropdown-class-example"]').select('').should('have.value','');
        
    });
    it('Test3 - INDEX', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//select[@id="dropdown-class-example"]').select(0).should('have.value','');
        cy.xpath('//select[@id="dropdown-class-example"]').select(1).should('have.value','option1');
        cy.xpath('//select[@id="dropdown-class-example"]').select(2).should('have.value','option2');
        cy.xpath('//select[@id="dropdown-class-example"]').select(3).should('have.value','option3');
    });
});