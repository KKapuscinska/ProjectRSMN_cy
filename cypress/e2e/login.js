/// <reference types="Cypress" />
import { loginPage } from "../pages/pageObjects/login/loginPage"

describe ('Login tests', () => { 

    beforeEach(() => {
        cy.visit('/logowanie')
        cy.fixture('login').then(function(data)
    {
        this.data=data
    })
    })

    it('Incorecct login and password',function(){
        loginPage.getLogin().type(this.data.randomText, {delay: 100, force: true})
        .should('have.value', this.data.randomText)
        loginPage.getPass().type(this.data.randomText, {delay: 100, force: true})
        .should('have.value', this.data.randomText)
        loginPage.getLoginBtn().click()
        loginPage.getLogInvalidFeedback().should('have.text',this.data.incorrectDataMsg)
    })

    it('Incorecct password',function(){
        loginPage.getLogin().type(this.data.login, {delay: 100, force: true})
        .should('have.value', this.data.login) 
        loginPage.getPass().type(this.data.randomText, {delay: 100, force: true})
        .should('have.value', this.data.randomText)
        loginPage.getLoginBtn().click()
        loginPage.getLogInvalidFeedback().should('have.text',this.data.incorrectDataMsg)
        
    })

    it('Too short credentials',function(){
        loginPage.getLogin().type(this.data.letter)  
        .should('have.value', this.data.letter)
        cy.wait(1000)
        loginPage.getPass().type(this.data.letter)
        .should('have.value', this.data.letter)
        loginPage.getLoginBtn().click()
        loginPage.getLogInvalidFeedback().should('have.text', this.data.tooShortLogin)
        loginPage.getPassInvalidFeedback().should('have.text', this.data.tooShortPass)
         
    })

    it('Too long password',function(){
        loginPage.getLogin().type(this.data.login)  
        .should('have.value', this.data.login)
        cy.wait(1000)
        loginPage.getPass().type(this.data.string)
        .should('have.value', this.data.string)
        loginPage.getLoginBtn().click()
        loginPage.getPassInvalidFeedback().should('have.text', this.data.tooShortPass)
         
    })

    it('Empty fields',function(){
        loginPage.getLoginBtn().click()
        loginPage.getLogInvalidFeedback().should('have.text', this.data.emptyLoginMsg)
        loginPage.getPassInvalidFeedback().should('have.text', this.data.emptyPassMsg)
         
    })

    it('Show password Functionality',function(){
        loginPage.getPass().type(this.data.pass, {delay: 100, force: true})
        loginPage.getPass().should('have.attr', 'type', 'password')
        loginPage.getShowPass().click()
        loginPage.getPass().should('have.attr', 'type', 'text')
         
    })

})