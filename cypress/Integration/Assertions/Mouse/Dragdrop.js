describe('Drag Mouse', () => {
    it('Test1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');

        //{which: 1} is for left mouse button
        //{which: 2} is for centre mouse button
        //{which: 1} is for right mouse button
        cy.get('#draggable').trigger('mousedown',{which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true});
    });
    it('Test2', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        cy.get('#draggable').trigger('mousedown',{which: 1});
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true});
    });
});
