///<reference types="cypress" />



describe('OrangeHRM Suite', () => {
    it('login test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[name='username']").type("Admin");
        cy.get("input[type='password']").type("admin123");
        cy.get('.orangehrm-login-button').click();
    });

    it('facebook login', () => {
        cy.visit('https://www.facebook.com/');
        cy.get("#email").type("hirakgoswami78@yahoo.com");
        cy.get("#pass").type("Goswami@78");
        cy.get("button[name='login']").click();
    });
    it('heroku login', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.xpath("//input[@name='username']").type('aofjlkda');
        cy.xpath("//input[@name='password']").type('askjsad');
        cy.xpath("//button[@class='radius']").click();
    });
    it('Ebay login', () => {
        cy.visit('https://www.ebay.com/');
        cy.xpath("//a[text()='Daily Deals']").click();
        //cy.xpath("//input[@name='password']").type('askjsad');
        //cy.xpath("//button[@class='radius']").click();
    });
    it('Ebay login', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath("//a[contains(text(),'Free Access')]").click();
    });
});
