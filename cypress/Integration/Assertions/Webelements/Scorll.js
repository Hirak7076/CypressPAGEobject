describe('Scroll', () => {
    it('Google Test', () => {
        cy.visit('https://www.google.com/');
        cy.xpath('//textarea[@class="gLFyf"]').type('Masai{enter}');
        //cy.scrollTo(0,1000);//x is horizontal , y is vertical
        //cy.scrollTo('bottom');
        //cy.wait(1000)
        //cy.scrollTo('top');
        cy.contains('Maasai people').scrollIntoView().wait(2000).click();
    });
});