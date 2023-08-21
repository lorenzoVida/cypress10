

describe('describe contiene hooks',{browser:'!firefox'}, () => {

    before(() => {
      console.log ('runs once before all tests in the block')
    })
  
    beforeEach(() => {
      console.log ('runs before each test in the block')
    })
  
    afterEach(() => {
      console.log ('runs after each test in the block')
    })
  
    after(() => {
      console.log ('runs once after all tests in the block')
    })
  

  it('test 1', () => {
      cy.url().should('include','demoqa.com')
      cy.get("#firstName").should('be.visible').should('have.attr','placeholder','First Name')
  })

  it('test 2', () => {
    cy.get("#firstName").then((objeto)=>{
        expect(objeto).to.be.visible
        expect(objeto).to.have.attr('placeholder','First Name')
    })   
  })

  it('test 3', () => {
    cy.get("#firstName").then((objeto2)=>{
        assert.equal(objeto2.attr('placeholder'),'First Name')
    })   
  })


  before(()=>{
    console.log('iniciamos la data de preuba');
  })

  beforeEach(()=>{
    cy.visit('https://demoqa.com/automation-practice-form');
  })

  afterEach(()=>{
    console.log("vamos a la sección del navegador")
  })

  after(()=>{
    console.log('reiniciamos data');
  })

})