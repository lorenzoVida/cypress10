describe('my Suite Test', () => {

  it('back forward labels', () => {
    cy.visit('http://dbankdemo.com/bank/login');
    
    cy.get("a[href='/bank/signup']").click()
    cy.get("#title").select('Ms.').then(($cbo)=>{

      const man = $cbo.text()
      console.log(man)

    cy.get('#title')
    .select('Mr.')
    .then(() => {
      // now capture it again
      const cbo2 = $cbo.text()
      // make sure it's what we expected
      //in the next line you see use wrap form element recgonize
      // is because cypress use jquery en this archetype
      //this provacate use wrap for re use elements
      expect(cy.wrap(cbo2)).not.to.eq(cy.wrap(man))
    })
  })
})
})