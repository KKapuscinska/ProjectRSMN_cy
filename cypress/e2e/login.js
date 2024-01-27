/// <reference types="Cypress" />
import { loginPage } from "../pages/pageObjects/loginPage"

describe ('Login tests', () => { 

    beforeEach(() => {

        cy.visit('/logowanie')
        cy.fixture('login').then(function(data)
    {
        this.data=data
    })
    })

    it('Incorrect login and password',function(){
        
        loginPage.getLogin()
          .type(this.data.randomText, {delay: 100, force: true})
          .should('have.value', this.data.randomText)

        loginPage.getPass()
          .type(this.data.randomText, {delay: 100, force: true})
          .should('have.value', this.data.randomText)

        loginPage.getLoginBtn().click()

        loginPage.getLogInvalidFeedback()
          .contains(this.data.incorrectDataMsg)
    })

    it('Incorrect password',function(){
        
        loginPage.getLogin()
          .type(this.data.login, {delay: 100, force: true})
          .should('have.value', this.data.login)

        loginPage.getPass()
          .type(this.data.randomText, {delay: 100, force: true})
          .should('have.value', this.data.randomText)

        loginPage.getLoginBtn().click()

        loginPage.getLogInvalidFeedback()
        .contains(this.data.incorrectDataMsg)
        
    })

    it('Too short Login',function(){

        loginPage.getLogin()
          .type(this.data.letter)  
          .should('have.value', this.data.letter)

        cy.wait(1000)

        loginPage.getPass()
          .type(this.data.letter)
          .should('have.value', this.data.letter)

        loginPage.getLoginBtn().click()

        loginPage.getLogInvalidFeedback()
          .contains(this.data.tooShortLoginMsg)
         
    })

    it('Empty fields',function(){

        loginPage.getLoginBtn().click()

        loginPage.getLogInvalidFeedback()
          .contains(this.data.emptyLoginMsg)

        loginPage.getPassInvalidFeedback()
          .contains(this.data.emptyPassMsg)
         
    })

    it('Show password Functionality',function(){

        loginPage.getPass()
          .type(this.data.pass, {delay: 100, force: true})
          .should('have.attr', 'type', 'password')

        loginPage.getShowPass().click()

        loginPage.getPass()
          .should('have.attr', 'type', 'text')
         
    })

})