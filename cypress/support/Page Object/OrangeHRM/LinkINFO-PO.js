class Link_PO{
    linkclick(link){
        cy.contains(link).click();
    }
}
export default Link_PO;