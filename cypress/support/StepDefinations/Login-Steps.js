import { Before,Given,When,And,Then } from "cypress-cucumber-preprocessor/steps/index";
Given('open the browser and enter url',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})
When('enter username as {word}',(username)=>{
    cy.get('[name="username"]').type(username)
})