describe('practice form',{includeShadowDom:true}, () => {
  let texto
    it('resgister new student', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.get("input[id='firstName']").type('{selectAll}{backspace}').type('Lorenzo  N')      
    //  cy.get("input[id='firstName']").clear()
      cy.get("label[for='gender-radio-2']").click()
      cy.get("#dateOfBirthInput").click()
      cy.get("#dateOfBirthInput").type('value{enter}')
      cy.get('#dateOfBirthInput')
        .invoke('val')
        .then(sometext => cy.log(sometext));
      cy.get("label[for='hobbies-checkbox-3']").click()
    })

    it('extract information', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').as('nombre')
    cy.get('@nombre').type('Loren')
    cy.get('#lastName').type('Vida')
    cy.get('#lastName').then(($ElementoJQuery)=>{
      //descomentar la siguiente linea si queremos guardar variables
      //para enviar a 'get information'
      texto=$ElementoJQuery.val()
      expect($ElementoJQuery.val()).to.equal('Vida')
    })
    })

    it('get information', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('#firstName').type(texto)
    })
/*
{backspace} Borra el personaje a la izquierda del cursor.
{del} Borra el personaje a la derecha del cursor.
{downarrow} Mueve el cursor hacia abajo.
{end}	Mueve el cursor al final de la línea.
{enter} Teclea la tecla Intro.
{esc}	Teclea la tecla Escape.
{home} Mueve el cursor al principio de la línea.
{insert} Inserta un personaje a la derecha del cursor.
{leftarrow} Mueve el cursor a la izquierda.
{movetoend} Desplaza el cursor al final del elemento mecanizable.
{movetostart} Desplaza el cursor al inicio del elemento mecanizable.
{pagedown} Se desplaza hacia abajo.
{pageup}  Se desplaza hacia arriba.
{rightarrow} Mueve el cursor a la derecha.
{selectall} Selecciona todo el texto creando un selection range.
{uparrow}	Mueve el cursor hacia arriba.
*/

})
