class loginINFO{
    enterURL(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    Login(){
        cy.xpath('//input[@placeholder="Username"]').type('Admin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[@type="submit"]').click();
    }
    clickforgotPASSWORD(){
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
    }
}
export default loginINFO;