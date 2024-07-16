describe('Tables', () => {
    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[2]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool');
        cy.xpath('//div[@class="tableFixHead"]/table[@id="product"]/tbody/tr[8]/td[2]').should('include.text','Sportsman');
        
    });
    it('Test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{
            if($ele.text().includes('Python')){
                cy.wrap($ele).next().then((num)=>{
                    cy.log(num.text())
                })
            }
        })
    });
});
