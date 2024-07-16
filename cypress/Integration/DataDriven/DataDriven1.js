//Hooks in Cypress

before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data=data;//initializing the data coming
    })
});
describe('Data Driven Test', () => {
    it('Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//input[@name="username"]').type(data.username);
        cy.xpath('//input[@name="password"]').type(data.password);
        cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    });
});
    