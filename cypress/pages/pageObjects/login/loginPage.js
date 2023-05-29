
import loginPageSelectors from "./loginPageSelectors";



  class LoginPage {
    constructor (){
        
    }
    
    
    loginPlainUser(log = 'cytest', pass = 'Tester123'){
        cy.visit('/logowanie')
        cy.get(loginPageSelectors.log).type(log, {delay: 100, force: true})
        cy.get(loginPageSelectors.log).should('have.value', 'cytest')
        cy.get(loginPageSelectors.pass).type(pass, {delay: 100, force: true})
        cy.get(loginPageSelectors.loginBtn).click()
        cy.title().should('eq','Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
    }

    login(log = 'cytest1', pass = 'Tester123'){
        cy.visit('/logowanie')
        cy.get(loginPageSelectors.log).type(log, {delay: 100, force: true})
        cy.get(loginPageSelectors.log).should('have.value', 'cytest1')
        cy.get(loginPageSelectors.pass).type(pass, {delay: 100, force: true})
        cy.get(loginPageSelectors.loginBtn).click()
        cy.title().should('eq','Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
    }  

    loginRossneUser(log = 'cytest2', pass = 'Tester123'){
        cy.visit('/logowanie')
        cy.get(loginPageSelectors.log).type(log, {delay: 100, force: true})
        cy.get(loginPageSelectors.log).should('have.value', 'cytest2')
        cy.get(loginPageSelectors.pass).type(pass, {delay: 100, force: true})
        cy.get(loginPageSelectors.loginBtn).click()
        cy.title().should('eq','Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
    }

    getLogin()
    {
        return cy.get('#login-user')
    }

    getPass()
    {
        return cy.get('#login-password')
    }

    getLoginBtn()
    {
        return cy.get('.ladda-button')
    }

    getLogInvalidFeedback()
    {
        return cy.get(':nth-child(1) > :nth-child(2) > .invalid-feedback')
    }

    getPassInvalidFeedback()
    {
        return cy.get('.input-group > .invalid-feedback')
    }

    getShowPass()
    {
        return cy.get('.input-group-text')
    }

    getLoginCheckbox()
    {
        return cy.get('.login-form__checkbox-holder > label.checkbox > .checkbox')
    }

}


export const loginPage = new LoginPage()

//automation224@gmail.com cytest - Plain
//automation224+1@gmail.com cytest1 - ulubione, Klub Rossmann, historia zamówień
//automation224+2@gmail.com cytest2 - rossne ciąża, maluch, junior + KR
//automation224+3@gmail.com cytest3 - 
//automation224+4@gmail.com cytest4 - 
//automation224+5@gmail.com