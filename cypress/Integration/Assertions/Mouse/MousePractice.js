describe('Mouse Actions Test', () => {
    it('Test1', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');
        cy.xpath("//*[.='right click me']").rightclick();
        cy.xpath("//span[contains(text(),'Quit')]").click();
        cy.xpath('//button[@ondblclick="myFunction()"]').dblclick();
    });
    it('Test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
    });
    it('Test3', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
    });
});