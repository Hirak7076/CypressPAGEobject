describe('Alerts', () => {
    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//input[@id="alertbtn"]').click();
        cy.on('window:alert',(alertmsg)=>{
            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge');
            return true;
        });
        cy.xpath('//input[@id="confirmbtn"]').click();
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.eq('Hello , Are you sure you want to confirm?');
            return false;
        });
    });
});