describe('my Suite Test', () => {
  it('login', () => {
    cy.visit('bank/login');
    cy.get("a[href='/bank/signup']").click()
    cy.get("#title").select('Ms.')
    cy.get("#firstName").type('Lorenzo')
  })

  // it('reload page', () => {
  //   cy.reload()
  // })

  // it('force reload page', () => {
  //   cy.reload(true)
  // })

  it('back forward labels', () => {
    cy.visit('http://dbankdemo.com/bank/login');
    cy.get("a[href='/bank/signup']").click()
    cy.get("#title").select('Ms.')
    cy.get("#firstName").type('RETOCEDER')
    cy.go('back')
    cy.go('forward')
    cy.get('input')
  })


  it('get locator by attribute and valor', () => {
    cy.visit('bank/login');
    cy.get("a[href='/bank/signup']")
  })

  it('get locator by class with blank spaces ', () => {
    cy.visit('bank/login');
     cy.get("a[href='/bank/signup']").click()
    cy.get(".btn.btn-primary.btn-flat.m-b-30.m-t-30")
  })
//
 it('get locator with containt text', () => {
    cy.visit('bank/login');
    cy.get("a[href='/bank/signup']").click()
    cy.contains('Title')
  })

 it('get locator with html label repeatin', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.contains('.btn.btn-light.active','Text Box')
  })

   it('get Parent', () => {
    cy.visit('https://rahulshettyacademy.com/locatorspractice/');
    cy.get(".submit.signInBtn").parent()
    cy.get(".forgot-pwd-container").find('a')
    cy.get(".submit.signInBtn").parents()
  })

})