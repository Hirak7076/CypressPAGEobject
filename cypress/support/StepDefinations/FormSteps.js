import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form?');
});
When('user enters firstname ,lastname, email, message',()=>{
    cy.xpath('//input[@placeholder="First Name"]').type('Hirak');
    cy.xpath('//input[@placeholder="Last Name"]').type('Goswami');
    cy.xpath('//input[@placeholder="abc@xyz.com"]').type('hirakgoswami7076@gmail.com');
    cy.xpath('//input[@placeholder="9876543210"]').type('1234567890');
    cy.xpath('//textarea[@spellcheck="false"]').type('Hello!');
    
    
});
And('clicks on submit',()=>{
    cy.xpath('//input[@class="ui green button"]').click();
});
Then('An alert saying successful message has to be displayed.',()=>{
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, Hirak Goswami');
        return true;
    })
});