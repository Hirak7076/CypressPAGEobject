describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//input[@placeholder="Username"]').type('Admin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[@type="submit"]').click();
        cy.contains('Admin').click();
        //cy.xpath('//div[@data-v-957b4417]/input');type('Hirak');
        
    });
});