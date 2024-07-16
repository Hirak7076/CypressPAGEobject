describe('In Class Test - ', () => {
    it('Testing Automation Website', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('input[id="ContactUsFrm_first_name"]').type('Hirak').should('have.value','Hirak');
        cy.get('input[id="ContactUsFrm_email"]').type('hirakgoswami7076@gmail.com').should('have.value','hirakgoswami7076@gmail.com');
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type('Hello').should('have.value','Hello');
        cy.xpath('//button[@title="Submit"]').click();
        cy.get('a[title="Continue"]').click();
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=1"]').click();
        cy.xpath('//a[@class="btn btn-default pull-right mr10  mb10"]').click();
        cy.xpath('//input[@class="pull-left input-medium search-query dropdown-toggle"]').type('skin').should('have.value','skin');
        cy.xpath('//input[@class="pull-left input-medium search-query dropdown-toggle"]').type('{enter}');

        
    });
});
