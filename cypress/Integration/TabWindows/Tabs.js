describe('Windows and test', () => {
    it('TabsTest', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//a[@class="btn-style class1 class2"]').invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains("Access all our Courses").click();
        })
    });
    it('Window Test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//button[@class="btn-style class1"]').invoke('removeAttr','onclick').click();
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('');
            cy.contains("Access all our Courses").click();
        })
    });
});