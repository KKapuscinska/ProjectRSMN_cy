

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

    getSendMsgBtn()
    {
        return  cy.get('.ladda-button')
    }

    getUserContactFields()
    {
        return cy.get('.pt-lg-2')
    }

    getTaskFields()
    {
        return cy.get('.col-lg-8 > .form-group')
    }

    getNumberFieldInCategory()
    {
        return cy.get('.col-lg-8 > .form-group > div > .pr-6')
    }

    getUnitOfNumberFieldInCategory()
    {
        return cy.get(':nth-child(7) > :nth-child(1) > .row')
    }

    getCaptcha()
    {
        return cy.get('.re-captcha')
    }

    getCategoryRadio()
    {
        return '[name*="Category"]'
    }

    getFirstName()
    {
        return cy.get('#input-name-1')
    }

    getLastName()
    {
        return cy.get('#input-name-2')
    }

    getEmail()
    {
        return cy.get('#input-email')
    }

    getPhoneNumber()
    {
        return cy.get('#input-phone')
    }

    getMsg()
    {
        return cy.get('#message')
    }

    getCategoryList()
    {
        return cy.get('.ReactVirtualized__Grid')
    }

    getCategory()
    {
        return '.sri-select__item'
    }

    getCategoryDescription()
    {
        return cy.get('.h5')
    }

    
}

export const contactPage = new ContactPage()
