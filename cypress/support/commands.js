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

Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.tile-product__name').each(($el,index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('.tile-product__add-list-plus').eq(index).click({force: true})
        }
    })
})

// Cypress.Commands.add("login", () => {
    
//         cy.visit('logowanie')
//         cy.get(':nth-child(1) > div > #login-user').type('cytest1', {delay: 100, force: true})
//         cy.get(':nth-child(1) > div > #login-user').should('have.value', 'cytest1')
//         cy.get('.input-group > #login-user').type('Tester123', {delay: 100, force: true})
//         cy.get('.ladda-button').click()
//         cy.title().should('eq','Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
//     } 
// )


