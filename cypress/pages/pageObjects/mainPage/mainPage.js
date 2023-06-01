import mainPageSelectors from "./mainPageSelectors";
class MainPage {
    constructor (){
        
    }
    

    toCompanyTab(){
        cy.get(mainPageSelectors.companyTab).click()
        cy.title().should('eq','O Firmie | Drogeria Rossmann.pl')
        cy.url().should('include', 'firma')
    }

    toCareerTab(){
        cy.get(mainPageSelectors.careerTab).prop(href)
        // cy.title().should('eq','Oferty Pracy: Rossmann | kariera.rossmann.pl')
        // cy.url().should('include', 'kariera')
    } //praca na nowo otwartej zakładce

    toRossneTab(){
        cy.get(mainPageSelectors.rossneTab).click()
        cy.title().should('eq','O Programie Rossnę! | Drogeria Rossmann.pl')
        cy.url().should('include', 'rossne')
    }

    toHelpProgramTab(){
        cy.get(mainPageSelectors.helpProgramTab).click()
        cy.title().should('eq','Pomagamy jak umiemy | Drogeria Rossmann.pl')
        cy.url().should('include', 'pomagamy')
    }

    toAppTab(){
        cy.get(mainPageSelectors.appTab).click()
        cy.title().should('eq','Klub Rossmann - aplikacja mobilna Android i iOs | Drogeria Rossmann.pl')
        cy.url().should('include', 'aplikacja-rossmann')
    }

    toInspirationTab(){
        cy.get(mainPageSelectors.inspirationTab).click()
        cy.title().should('eq','Artykuły inspiracyjne - Blog | Drogeria Rossmann.pl')
        cy.url().should('include', 'inspiracje')
    }

    // toDeliveryTab(){
    //     cy.get(mainPageSelectors.deliveryTab)
    //     //cy.get('.nav-user').find('[title="Twoja dostawa"]').invoke('show')
    //     cy.get('.nav-main').find('.nav-user > :nth-child(1) > a').invoke('show')
    //     cy.get('#header > section > nav > div:nth-child(1) > div > div').should('be.visible')
    //     //show method in jquery
    // }

    toBasketTab(){
        cy.get(mainPageSelectors.basketTab).click()
        cy.title().should('eq','Twój Koszyk | Drogeria Rossmann.pl')
        cy.url().should('include', 'koszyk')
    }

    toSettingsTab(){
        cy.get(mainPageSelectors.settingsTab).click()
        cy.title().should('eq','Ustawienia konta | Drogeria Rossmann.pl')
        cy.url().should('include', 'ustawienia-konta')
    } 

    toCategoryTab(){
        cy.get(mainPageSelectors.categoryTab).click()
        cy.title().should('eq','Kategorie | Drogeria Rossmann.pl')
        cy.url().should('include', 'kategorie')
    }

    toNewCategoryTab(){
        cy.get(mainPageSelectors.newCatTab).click()
        cy.title().should('eq','Wszystkie produkty | Drogeria Rossmann.pl')
        cy.url().should('include', 'produkty')        
        cy.get('.btn-tag').should('contains.text', 'Nowe!')
    }

    toPromotionTab(){
        cy.get(mainPageSelectors.promotionTab).click()
        cy.title().should('eq','Aktualne Promocje | Drogeria Rossmann.pl')
        cy.url().should('include', 'promocje')
    }

    toBrandsTab(){
        cy.get(mainPageSelectors.brandsTab).click()
        cy.title().should('eq','Strefa marek | Drogeria Rossmann.pl')
        cy.url().should('include', 'marki')
        cy.get('.my-4').should('have.text','Rekomendowane marki')
    }

    toFotoTab(){
        cy.get(mainPageSelectors.fotoTab).click()
        cy.title().should('eq','Usługi foto: Fotoksiążka, fotoobraz, fotokiosk | Rossmann.pl')
        cy.url().should('include', 'foto')
        cy.get('.display-4').should('contain','Wywołuj wspomnienia')    
    }

    toNewspaperTab(){
        cy.get(mainPageSelectors.newspaperTab).click()
        cy.title().should('include','Aktualna gazetka promocyjna Rossmann')
        cy.url().should('include', 'gazetka')
    }

    search(){
        cy.get(mainPageSelectors.search).click()
        cy.get('.modal-search__input').should('be.visible')
    }

    cookiesAgreement(){
        cy.get('#onetrust-accept-btn-handler').click()
    }

    getToast()
    {
        return cy.get('.Toastify__toast-body')
    }

    getSearch()
    {
        return cy.get('.modal-search__input')
    }

    getBtnSelector()
    {
        return '.btn'
    }

    getFeedbackText()
    {
        return '.invalid-feedback'
    }

    
}

export const mainPage = new MainPage()