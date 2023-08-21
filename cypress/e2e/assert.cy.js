describe('asserts expect result  vs real result', () => {

    it('aserciones base', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.url().should('include','demoqa.com')
      cy.get("#firstName").should('be.visible').should('have.attr','placeholder','First Name')
  })

  it('expect concant', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get("#firstName").then((objeto)=>{
        expect(objeto).to.be.visible
        expect(objeto).to.have.attr('placeholder','First Name')
    })   
  })

  it('assert concant', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get("#firstName").then((objeto2)=>{
        assert.equal(objeto2.attr('placeholder'),'First Name')
    })   
  })

})