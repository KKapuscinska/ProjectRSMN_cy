/// <reference types="Cypress" />
import { loginPage } from "../pages/pageObjects/login/loginPage"
import { profilePage } from "../pages/pageObjects/profilePage/profilePage"
import { mainPage } from "../pages/pageObjects/mainPage/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"

describe ('The Profile tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })

    it('User without any favourite products - tab appearance.',function(){
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.toProfileTab()
        profilePage.getEmptyList().should('be.visible')
        profilePage.getPaymentsLogosModule().should('be.visible')
    })

    it('User with favourite products - tab appearance.',function(){
        loginPage.login();
        mainPage.toSettingsTab();
        profilePage.toProfileTab();
        profilePage.getEmptyList().should('not.exist')
        productInfo.getProductFoto().eq(0).should('be.visible')
        productInfo.getProductFoto().eq(1).should('be.visible')
        productInfo.getProductFoto().eq(2).should('be.visible')
        productInfo.getProductFoto().eq(3).should('not.exist')
        profilePage.getPaymentsLogosModule().should('be.visible')
    })

    it('Redirecting to the list of favorite products.',function(){
        loginPage.login();
        mainPage.toSettingsTab()
        profilePage.toProfileTab()
        profilePage.getEmptyList().should('not.exist')
        profilePage.getSeeAllBtn().should('be.visible').click()
        cy.url().should('include', this.data.favouritePath)
    })

})

describe ('The Purchase History tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })

    it('User without any orders - tab appearance.',function(){ 
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.toHistoryTab()
        cy.wait(1000)
        profilePage.getEmptyList().should('be.visible')
        profilePage.getHistoryCard().should('not.exist')  
        profilePage.getPaymentsLogosModule().should('be.visible')    
    }) 

    it('User with orders - tab appearance.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.toHistoryTab()
        profilePage.getHistoryCard().should('be.visible')
        profilePage.getEmptyList().should('not.exist')
        profilePage.getPaymentsLogosModule().should('be.visible')    
    })
    
})

describe ('The Favorite tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })

    it('User without any favorite products - tab appearance.',function(){ 
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.toFavouriteTab()
        profilePage.getEmptyList().should('be.visible')
        profilePage.getAddFavouriteProductToCartBtn().should('not.exist')
        profilePage.getFavouriteCategoryList().should('not.exist')
        profilePage.getOnlyPromotionSwitch().should('not.exist')
        profilePage.getNumberOfFavouriteProduct().should('have.text', this.data.blankFavouritesListInfo)
    }) 

    it('User with favorite products - tab appearance.',function(){
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.toFavouriteTab()
        profilePage.getEmptyList().should('not.exist')
        profilePage.getAddFavouriteProductToCartBtn().should('be.visible')
        profilePage.getFavouriteCategoryList().should('be.visible')
        profilePage.getOnlyPromotionSwitch().should('be.visible')
        profilePage.getNumberOfFavouriteProduct().contains(this.data.favouriteLimitInfo)
    }) 

    it('Displaying only promotional products.',function(){
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.toFavouriteTab()
        profilePage.getOnlyPromotionSwitch().find('span.handle').click()
        productInfo.getRegularPrice().should('not.exist') 
        
        //Verification of whether all products have a promotional price
        let invalidProductExists = false
        productInfo.getTitleProductPrice().each(($product) => {
            const $promoPrice = $product.find(productInfo.getSelectorOfPromoPrice())
            if (!$promoPrice.length) {
              invalidProductExists = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(invalidProductExists).to.be.false

        //Verification of whether all products have a omnibus information
        let productWithoutPromotionExists = false
        productInfo.getTitleProduct().each(($product) => {
            const $promoPrice = $product.find(productInfo.getSelectorOfOmnibusInfo())
            if (!$promoPrice.length) {
                productWithoutPromotionExists = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(productWithoutPromotionExists).to.be.false
            
    })    
})

describe ('The Rossnę! tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })

    it('Non-Rossnę! Program User Checks Profile for Rossnę! Tab Absence.',function(){ 
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.getRossneTab().should('not.exist')
    })

    it('Rossnę! Program User - tab appearance.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().should('be.visible')
        profilePage.getRossneProgramBox().should('be.visible')
        profilePage.getPaymentsLogosModule().should('be.visible')
    })
    
    it('Subscribe Rossne! newsletter without confirmation checkbox check.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getCheckbox().should('not.be.checked')
        profilePage.getSignUpBtn().click()
        profilePage.getValidationText().should('have.text', this.data.checkboxValidation)
    })

    it('Subscribe Rossne! newsletter.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getCheckbox().should('not.be.checked').click()
        profilePage.getSignUpBtn().click()
        mainPage.getToast().should('have.text', this.data.subscribeToRossneNewsletterToast)
        profilePage.getCheckbox().should('not.exist')
    })
 
    it('Unsubscribe Rossnę! newsletter, cancel confirmation.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getClubBox().find(profilePage.getSelectorOfResignBtn()).click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getCancelBtnInResignWindow().click()
        profilePage.getClubBox().find(profilePage.getSelectorOfResignBtn()).should('be.visible')
    })  

    it('Unsubscribe Rossnę! newsletter.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getResignBtnInResignWindow().click()
        mainPage.getToast()
        .should('have.text', this.data.removeEmailToast)
        profilePage.getCheckbox().should('be.visible').and('not.be.checked')

    })    
    
})

describe ('The Settings tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })

    it('Plain user - tab appearance.',function(){ 
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.getYourShopSection().find('h3')
        .should('have.text',this.data.NoShopSelectedHeadline)
        profilePage.getYourShopSection().find(mainPage.getBtnSelector())
        .should('have.text', this.data.chooseShop)
        profilePage.getSettingsContactSection().should('be.visible')
        profilePage.getSettingsPasswordSection().should('be.visible')
        profilePage.getSettingsAdressSection().should('be.visible')
        profilePage.getCheckbox().should('be.visible').and('not.be.checked')
        profilePage.getRossmannClubBoxHeadline().should('have.text', this.data.headerKrBoxNonClubMember)
        profilePage.getDeleteAccountBtn().should('be.visible')
    }) 

    it('User in Rossmann Club - tab appearance.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getYourShopSection().should('be.visible')
        profilePage.getSettingsContactSection().should('be.visible')
        profilePage.getSettingsPasswordSection().should('be.visible')
        profilePage.getNslBox().find('strong')
        .should('be.visible').and('have.text', this.data.headerNewsletterRossmannBox)
        profilePage.getClubBox().find('strong')
        .should('be.visible').and('have.text', this.data.headerKrBoxClubMember)
        profilePage.getClubBox().find(mainPage.getBtnSelector())
        .should('be.visible').and('have.text', this.data.resignsBtn)
        profilePage.getDeleteAccountBtn().should('be.visible')
    })

    it('Opening the Your Shop edition - user without Your Shop selected.',function(){ 
        loginPage.loginPlainUser();
        mainPage.toSettingsTab();
        profilePage.getYourShopSection().find(mainPage.getBtnSelector()).click()
        cy.url().should('include', this.data.shopEditPath)
        profilePage.getYourShopHeadline().should('have.text', this.data.chooseYourShopHeadline)
        profilePage.getDrugstoreSearchHolder().click().type(this.data.city)
        .should('have.value',this.data.city)
        profilePage.getDrugstoreAdress().should('be.visible')
        profilePage.getBackToSettingsBtn().click()
        cy.url().should('include', this.data.settingsPath)
    })
    
    it('Opening the Your Shop edition - user with Your Shop selected.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        cy.wait(1000)
        profilePage.getYourShopSection().find('h3').should('have.text', this.data.yourShopHeadline)
        profilePage.getShopOpeningHours().should('be.visible')
        profilePage.getShopAdress().should('be.visible') 
        profilePage.getYourShopSection().find(mainPage.getBtnSelector()).click()
        cy.url().should('include', this.data.shopEditPath)  
        profilePage.getYourShopHeadline().should('have.text', this.data.yourShop)
        profilePage.getDrugstoreSearchHolder().click().type(this.data.city)
        .should('have.value',this.data.city)
        profilePage.getDrugstoreAdress().should('be.visible')
        profilePage.getBackToSettingsBtn().click()
        profilePage.getSettingsContactSection().should('be.visible')
    })

    it('Sending empty password change form and verifying error messages.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        cy.wait(1000)
        profilePage.getSettingsPasswordSection().find(mainPage.getBtnSelector()).click()
        cy.url().should('include', this.data.passwordPath)
        profilePage.getSaveBtn().click()
        cy.get(mainPage.getFeedbackText()).eq(0).should('have.text', 'Proszę podaj hasło.')
        //cy.get(mainPage.getFeedbackText()).eq(1).should('have.text', 'Hasło powinno zawierać przynajmniej 1 cyfrę, 1 literę i mieć długość od 8 do 64 znaków.')
        cy.get(mainPage.getFeedbackText()).eq(2).should('have.text', 'Proszę podaj hasło.')
        profilePage.getBackToSettingsBtn().click()
        profilePage.getSettingsContactSection().should('be.visible')

    })

    it('Adding and removing new address. ',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        cy.wait(1000)
        profilePage.getAddAdressField().scrollIntoView().click()
        cy.url().should('include', this.data.adressAddPath)
        profilePage.getStreetField().type(this.data.street)
        .should('have.value', this.data.street)
        cy.wait(300)
        profilePage.getHouseNumberField().type(this.data.houseNumber)
        .should('have.value', this.data.houseNumber)
        profilePage.getAdressContinuedField() .type(this.data.houseNumber)
        .should('have.value', this.data.houseNumber)
        profilePage.getZipCodeField().type(this.data.zipCode)
        .should('have.value', this.data.zipCode)
        profilePage.getSaveBtn().click()
        profilePage.getSettingsPasswordSection().scrollIntoView().should('be.visible')
        profilePage.getAdressCard().should('be.visible')
        profilePage.getAdressCard().find(profilePage.getSelectorOfRemoveBtn()).click()
        profilePage.getAdressCard().should('not.exist')
    })

    it('Subscribe rossmann.pl newsletter without confirmation checkbox check.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('not.exist')
        profilePage.getCheckbox().should('not.be.checked')
        profilePage.getSignUpBtn().click()
        profilePage.getValidationText().should('be.visible').and('have.text', this.data.checkboxValidation)
    })

    it('Subscribe rossmann.pl newsletter.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('not.exist')
        profilePage.getCheckbox().should('not.be.checked').click()
        profilePage.getSignUpBtn().click()
        mainPage.getToast().should('have.text', this.data.subscribeToRossmannNewsletterToast)
        profilePage.getCheckbox().should('not.exist')
        profilePage.getSpecialClubBox().should('be.visible')
    })

    it('Subscribe Special Club newsletter without confirmation checkbox check.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('be.visible')
        profilePage.getCheckbox().should('not.be.checked')
        profilePage.getSignUpBtn().click()
        profilePage.getValidationText().should('be.visible').and('have.text', this.data.checkboxValidation)
    })

    it('Subscribe Special Club newsletter.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('be.visible')
        profilePage.getCheckbox().should('not.be.checked').click()
        profilePage.getSignUpBtn().click()
        mainPage.getToast().should('have.text', this.data.subscribeToSpecialClubToast)
        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).should('be.visible') 
    })

    it('Unsubscribe Special Club newsletter, cancel confirmation.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('be.visible')
        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getCancelBtnInResignWindow().click()
        profilePage.getResignWindow().should('not.exist')
        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).should('be.visible')
    })

    it('Unsubscribe Special Club newsletter.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('be.visible')
        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getResignBtnInResignWindow().click()
        cy.wait(1000)
        mainPage.getToast().should('have.text', this.data.removeEmailToast)
        profilePage.getCheckbox().should('be.visible').and('not.be.checked')
        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).should('not.exist')
    })

    it('Unsubscribe rossmann.pl newsletter, cancel confirmation.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('be.visible')
        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getCancelBtnInResignWindow().click()
        profilePage.getResignWindow().should('not.exist')
        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).should('be.visible')

    })

    it('Unsubscribe rossmann.pl newsletter.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getSpecialClubBox().should('be.visible')
        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getResignBtnInResignWindow().click()
        cy.wait(1000)
        mainPage.getToast().should('have.text', this.data.removeEmailToast)
        profilePage.getCheckbox().should('be.visible').and('not.be.checked')
        profilePage.getSpecialClubBox().should('not.exist')
    })


})

describe ('The Payments tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })
    
    it('Sending a blank form for adding a payment card.',function(){ 
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.toPaymentsTab()
        profilePage.getPaymentsLogosModule().should('be.visible')
        profilePage.getPaymentCard().should('be.visible').click()
        cy.url().should('include', this.data.paymentsPath)
        profilePage.getPaymentCardAdd().should('be.visible').click()
        cy.url().should('include', this.data.paymentsAddPath)
        profilePage.getCardNumber().should('be.visible')
        profilePage.getCardDate().should('be.visible')
        profilePage.getCardCvv().should('be.visible')
        cy.scrollTo('bottom')
        mainPage.cookiesAgreement()
        cy.wait(3000)
        profilePage.getAddCardBtn().should('be.visible').click({force:true})
        cy.wait(2000)
        mainPage.getToast().then(function(element){
            const actualText=element.text()
            expect(actualText.includes(this.data.blankCardFormToast)).to.be.true
        })
        
    })  
})   
