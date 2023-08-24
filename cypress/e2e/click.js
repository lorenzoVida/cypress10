describe('some locator difficulty and types of click', () => {

    it('dynamic id elements', () => {
      cy.visit('https://demoqa.com/buttons');
      cy.get("button").eq(3).click()
      cy.get("#dynamicClickMessage").should('be.visible').and('contain','You have done a dynamic click')
  })

      it('double click', () => {
      cy.visit('https://demoqa.com/buttons');
      cy.get("#doubleClickBtn").dblclick()
      cy.wait(2000)
      cy.get("#doubleClickMessage").should('be.visible').and('contain','You have done a double click')
 
 })

     it('right click', () => {
      cy.visit('https://demoqa.com/buttons');
      cy.get("#rightClickBtn").rightclick()
      cy.wait(2000)
      cy.get("#rightClickMessage").should('be.visible').and('contain','You have done a right click')
 
 })

 it('click for position', () => {
  cy.visit('https://example.cypress.io/commands/actions');
  cy.get('#action-canvas').click('topLeft')
  cy.get('#action-canvas').click('top')
  cy.get('#action-canvas').click('topRight')
  cy.get('#action-canvas').click('left')
  cy.get('#action-canvas').click('right')
  cy.get('#action-canvas').click('bottomLeft')
  cy.get('#action-canvas').click('bottom')
  cy.get('#action-canvas').click('bottomRight')
 // .click() accepts a an x and y coordinate
// that controls where the click occurs :)
cy.get('#action-canvas')
.click(80, 75)
.click(170, 75)
.click(80, 165)
.click(100, 185)
.click(125, 190)
.click(150, 185)
.click(170, 165)

// click multiple elements by passing multiple: true
cy.get('.action-labels>.label').click({ multiple: true })

// Ignore error checking prior to clicking
cy.get('.action-opacity>.btn').click({ force: true })
})

})