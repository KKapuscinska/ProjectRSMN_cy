

class ContactPage {
    constructor (){
        
    }
    
    getContactPageTitle()
    {
        return cy.get('.container > .h1')
    }

    getRossMap()
    {
        return cy.get('.contact__map-img')
    }

    getCentralaBox()
    {
        return cy.get('.col-lg-5 > .card')
    }

    getCentralaBoxInfo()
    {
        return cy.get('.col-lg-5 > .card > .py-2')
    }

    getContactFormHeader()
    {
        return cy.get('.col-md-10')
    }

    getCompanyContactModule()
    {
        return cy.get('.contact-sections > .container-xl > .container > .row')
    }

    // getCompanyContactModuleFirstColumn()
    // {
    //     return cy.get('.contact-sections > .container-xl > .container > .row > :nth-child(1)')
    // }

    

}

export const contactPage = new ContactPage()
