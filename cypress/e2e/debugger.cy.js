describe('my Suite Test', () => {
  it('login', () => {
    cy.visit('https://simple.ripley.com.pe/');
    //debugger only works if is open terminal
    debugger
    cy.get("input[placeholder='Buscar productos']").type('lentes rayban{enter}')
    //cy.get(".catalog-grid >div>div>div>div>a>div:nth-child(3)>div[class='catalog-product-details__name']").click()
    //cy.get("select[name='orderBy']").select('Menor Precio')
    cy.wait(5000)
    cy.get("div:nth-of-type(4) > div#product-border > .catalog-product-item.catalog-product-item__container.undefined  .catalog-product-details__name").click()
       
  })

})