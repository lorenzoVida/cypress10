describe('my Suite Test', () => {
    it('wait', () => {
      cy.visit('https://automationtesting.co.uk/loader.html');
      cy.wait(5000)
      cy.get("#loaderBtn").click()
         
    })

    it.only(' espera dentro del elemento', () => {
        cy.visit('https://automationtesting.co.uk/loader.html');
        cy.get("#loaderBtn",{timeout:5000}).click()
      })
  
  })