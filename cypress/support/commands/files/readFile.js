Cypress.Commands.add('readDataFromFile', (filePath, encoding) => {
    cy.get(loginPageSelectors.email).type(email)
    cy.get(loginPageSelectors.pass).type(pass)
    cy.contains(loginBtnText).click()
})