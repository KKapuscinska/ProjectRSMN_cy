//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//

//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



Cypress.Commands.add('loginEmptyUser', () => {

    const log = 'cytest'
    const pass = 'Tester123'

    cy.visit('/logowanie')
  
    cy.get('#login-user')
      .type(log, { delay: 100, force: true })
      .should('have.value', log)
  
    cy.get('#login-password')
      .type(pass, { delay: 100, force: true })
  
    cy.get('.ladda-button').click()
  
    cy.title()
      .should('eq', 'Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
  })

  Cypress.Commands.add('loginRegularUser', () => {

    const log = 'cytest1'
    const pass = 'Tester123'

    cy.visit('/logowanie')
  
    cy.get('#login-user')
      .type(log, { delay: 100, force: true })
      .should('have.value', log)
  
    cy.get('#login-password')
      .type(pass, { delay: 100, force: true })
  
    cy.get('.ladda-button').click()
  
    cy.title()
      .should('eq', 'Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
  })

  Cypress.Commands.add('loginClubUser', () => {

    const log = 'cytest2'
    const pass = 'Tester123'

    cy.visit('/logowanie')
  
    cy.get('#login-user')
      .type(log, { delay: 100, force: true })
      .should('have.value', log)
  
    cy.get('#login-password')
      .type(pass, { delay: 100, force: true })
  
    cy.get('.ladda-button').click()
  
    cy.title()
      .should('eq', 'Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
  })
  
  Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.tile-product__name').each(($el,index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('.tile-product__add-list-plus').eq(index).click({force: true})
        }
    })
})  

