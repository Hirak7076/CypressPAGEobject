class logoutINFO{
    logout(){
        cy.xpath('//li[@class="oxd-userdropdown"]').click();
        cy.xpath('//a[@href="/web/index.php/auth/logout"]').click();
    }
}
export default logoutINFO;