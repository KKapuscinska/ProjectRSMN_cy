class Commands {
    constructor (){
        
    }

    getloginField()
    {
        return cy.get('#login-user')
    }

    getPasswordField()
    {
        return cy.get('#login-password')
    }
 
    getLoginBtn()
    {
        return cy.get('.ladda-button')
    }

    getProfileIcon()
    {
        return cy.get('.nav-user > :nth-child(4) > a')
    }

    getCartIcon()
    {
        return cy.get('.nav-user > :nth-child(2) > a')
    }

    getNewCategoryTab()
    {
        return cy.get(':nth-child(3) > .nav__link')
    }

    getProfileTab()
    {
        return cy.get('[href="/profil"]')
    }

    getHistoryTab()
    {
        return cy.get('[href="/profil/zamowienia"]')
    }

    getFavouriteTab()
    {
        return cy.get('[href="/profil/ulubione"]')
    }

    getRossneTab()
    {
        return cy.get('[href="/profil/rossne"]')
    }

    getPaymentsTab()
    {
        return cy.get('[href="/profil/platnosci"]')
    }
}


export const commands = new Commands()