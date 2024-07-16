describe('iFrameTests', () => {
    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.frameLoaded('#courses-iframe');
        //to interact with elements inside iFrame()
        cy.iframe().contains('Blog').click();
    });
});