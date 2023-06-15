
  class LoginPage {
    constructor (){
        
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

//automation224@gmail.com cytest - Empty User
//automation224+1@gmail.com cytest1 - Favourite products, Rossmann Club, Orders
//automation224+2@gmail.com cytest2 - Rossne Program + Rossmann Club
//automation224+3@gmail.com cytest3 - 
//automation224+4@gmail.com cytest4 - 
//automation224+5@gmail.com