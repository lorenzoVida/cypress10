describe('some locator difficulty', () => {

    it('dynamic id elements', () => {
      cy.visit('https://demoqa.com/buttons');
      cy.get("button").eq(3).click()
      cy.get("#dynamicClickMessage").shoul('be.visible').and('contain','You have done a dynamic click')
  })

})