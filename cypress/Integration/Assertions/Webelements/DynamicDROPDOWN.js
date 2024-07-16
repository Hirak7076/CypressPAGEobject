describe('Dynamic dropdown Examples', () => {
    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.ui-autocomplete-input').type('in');
        cy.get('.ui-menu-item').each(($country)=>{
            if($country.text()=='India'){
                cy.wrap($country).click();
            }
        });
    });
    it('Test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.ui-autocomplete-input').type('ola');
        cy.get('.ui-menu-item').contains('Poland').click();
        cy.contains('Admin').click();
    });
});