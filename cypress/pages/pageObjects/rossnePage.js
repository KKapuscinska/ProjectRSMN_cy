

class RossnePage {
    constructor (){
        
    }
    
    getFirstRossneBenefitModuleBtn()
    {
        return cy.get('.card > .btn')
    }

    getFirstRossneBenefitModule()
    {
        return cy.get('.rossne-tiles-nav > .row')
    }

    getRossneBenefitModule()
    {
        return cy.get('.align-items-start')
    }

    getRossneSubpagesHeader()
    {
        return cy.get('.display-4')
    }

    getRossneOffersImg()
    {
        return cy.get('.rossne-offers__img-container')
    }

    getRossneSocial()
    {
        return cy.get('.rossne-social')
    }

    getRossneFAQ()
    {
        return cy.get('.my-8 > .row > .offset-lg-2')
    }

    getRossneHero()
    {
        return cy.get('.hero')
    }

    getRossneProgramModule()
    {
        return cy.get('.rossne-who > .row')
    }

    getCzysciochowaAkademia()
    {
        return cy.get('.pt-6')
    }
    
    


}

export const rossnePage = new RossnePage()
