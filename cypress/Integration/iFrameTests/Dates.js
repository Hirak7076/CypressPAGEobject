describe('DatePicker', () => {
    it('Test1', () => {
        cy.visit('https://jqueryui.com/datepicker/');
        cy.frameLoaded('[src="/resources/demos/datepicker/default.html"]');
        //cy.iframe().contains('.hasDatepicker').type('19/07/1997{enter}')
        cy.iframe().xpath('//input[@type="text"]').type('19/07/1997{enter}');
    });

});