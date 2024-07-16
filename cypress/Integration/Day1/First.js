describe('Test Suite - collecton of tests', () => {
// Describe is a block where i will write multiple test scripts(it block)
// Describe and it block are from Mocha Library
// This is how we write test in Cypress
// This file is also called spec

    it('test1', () => {
        // it block is your test script - 1 test   

        //cy is my cypress object
        //using cy i can write my cypress commands
        //cy.visit is used to enter  the URL inside the browser
    
        cy.visit('https://the-internet.herokuapp.com/login')
        
        //html/body/div[2]/div/div/form/div[1]/div/input
        //html/body/div[2]/div/div/form/button
        //html/body/div[2]/div/div/form/button

    });
});
