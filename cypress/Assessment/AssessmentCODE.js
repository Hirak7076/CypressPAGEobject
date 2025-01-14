describe('Assesment', () => {
    it('Tests', () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.xpath('//img[@title="T-shirts"]').click({force: true});
        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click();
        cy.wait(1000);
        cy.xpath('//select[@id="option350"]').select('775').should('have.value','775');
        cy.wait(1000);
        cy.xpath('//select[@id="option351"]').select('Medium');
        cy.xpath('//input[@id="product_quantity"]').type('10');
        cy.xpath('//ul[@class="productpagecart"]').click();
        cy.xpath('//a[@id="cart_checkout1"]').click();
        cy.xpath('//input[@id="accountFrm_accountguest"]').click();
        cy.xpath('//button[@title="Continue"]').click();
        cy.xpath('//input[@id="guestFrm_firstname"]').type('Hirak');
        cy.xpath('//input[@id="guestFrm_lastname"]').type('Goswami');
        cy.xpath('//input[@id="guestFrm_email"]').type('hirakgoswami7076@gmail.com');
        cy.xpath('//input[@id="guestFrm_telephone"]').type('8910140321');
        cy.xpath('//input[@name="fax"]').type('12348678');
        cy.xpath('//input[@id="guestFrm_company"]').type('Masai School');
        cy.xpath('//input[@id="guestFrm_address_1"]').type('5/14 Ashoke Avenue, Azone');
        cy.xpath('//input[@id="guestFrm_city"]').type('Durgapur');
        cy.xpath('//select[@id="guestFrm_country_id"]').select('India');
        cy.xpath('//select[@id="guestFrm_zone_id"]').select('West Bengal');
        cy.xpath('//input[@id="guestFrm_postcode"]').type('713204');
        cy.xpath('(//button[@type="submit"])[1]').click();
        cy.xpath('//button[@id="checkout_btn"]').click();
        cy.url('').should('include','success');
    });
});