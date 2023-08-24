describe('share variable function on diferents it or scenarios',{includeShadowDom:true}, () => {
    it('extract information with function', function() {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('Loren')
        cy.get('#lastName').type('Vida')
        cy.get('#lastName').invoke('val').as('GlobalVariable')
    })
  
    it('get information with function', function() {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type(this.GlobalVariable)
        })

})
  