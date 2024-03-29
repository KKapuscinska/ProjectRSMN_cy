/// <reference types="Cypress" />
import { profilePage } from "../pages/pageObjects/profilePage"
import { mainPage } from "../pages/pageObjects/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"

describe ('The Purchase History tab tests', () => { 

    beforeEach(() => {
        cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
    })

    it('User without any orders - tab appearance.',function(){ 

        cy.login(this.data.loginEmptyUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToHistoryTabInProfile()

        cy.wait(1000)

        profilePage.getEmptyList()
          .should('be.visible')

        profilePage.getHistoryCard()
          .should('not.exist')  

        profilePage.getPaymentsLogosModule()
          .should('be.visible')    
    }) 

    it('User with orders - tab appearance.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToHistoryTabInProfile()

        profilePage.getHistoryCard()
          .should('be.visible')

        profilePage.getEmptyList()
          .should('not.exist')

        profilePage.getPaymentsLogosModule()
          .should('be.visible')    
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

        cy.login(this.data.loginEmptyUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToFavouriteTabInProfile()

        profilePage.getEmptyList()
          .should('be.visible')

        profilePage.getAddFavouriteProductToCartBtn()
          .should('not.exist')

        profilePage.getFavouriteCategoryList()
          .should('not.exist')

        profilePage.getOnlyPromotionSwitch()
          .should('not.exist')

        profilePage.getNumberOfFavouriteProduct()
          .should('be.visible')
          .and('have.text', this.data.blankFavouritesListInfo)
    }) 

    it('User with favourite products - tab appearance.',function(){

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToFavouriteTabInProfile()

        profilePage.getEmptyList()
          .should('not.exist')

        profilePage.getAddFavouriteProductToCartBtn()
          .should('be.visible')

        profilePage.getFavouriteCategoryList()
          .should('be.visible')

        profilePage.getOnlyPromotionSwitch()
          .should('be.visible')

        profilePage.getNumberOfFavouriteProduct()
          .contains(this.data.favouriteLimitInfo)
    }) 

    it('Displaying only promotional products.',function(){

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToFavouriteTabInProfile()

        profilePage.getOnlyPromotionSwitch().find('span.handle').click()

        //Checking if all products have regular price information
        let productWithoutRegularPriceInfoExists = false
        productInfo.getTitleProduct().each(($product) => {
            const $promoPrice = $product.find(productInfo.getSelectorOfRegularPriceInfo())
            if (!$promoPrice.length) {
              productWithoutRegularPriceInfoExists = true
              cy.wrap($product)
                .should('have.class', 'invalid')
            }
          })
          expect(productWithoutRegularPriceInfoExists).to.be.false
        
        //Checking if all products have omnibus information
        let productWithoutPromotionExists = false
        productInfo.getTitleProduct().each(($product) => {
            const $promoPrice = $product.find(productInfo.getSelectorOfOmnibusInfo())
            if (!$promoPrice.length) {
                productWithoutPromotionExists = true
              cy.wrap($product)
                .should('have.class', 'invalid')
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

        cy.login(this.data.loginEmptyUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getRossneTab()
          .should('not.exist')
    })

    it('Rossnę! Program User - tab appearance.',function(){

        cy.login(this.data.loginClubUser,  this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getRossneNslBox()
          .should('be.visible')

        profilePage.getRossneProgramBox()
          .should('be.visible')

        profilePage.getPaymentsLogosModule()
          .should('be.visible')
    })
    
    it('Subscribe Rossne! newsletter without confirmation checkbox check.',function(){

        cy.login(this.data.loginClubUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getRossneNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getCheckbox()
          .should('not.be.checked')

        profilePage.getSignUpBtn().click()

        profilePage.getRossneNslBox().find(profilePage.getSelectorOfValidationText())
          .should('have.text', this.data.checkboxValidation)
    })

    it('Subscribe Rossne! newsletter.',function(){

        cy.login(this.data.loginClubUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getRossneNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getCheckbox()
          .should('not.be.checked')
          .click()

        profilePage.getSignUpBtn().click()

        mainPage.getToast()
          .should('have.text', this.data.subscribeToRossneNewsletterToast)

        profilePage.getCheckbox()
          .should('not.exist')
    })
 
    it('Unsubscribe Rossnę! newsletter, cancel confirmation.',function(){

        cy.login(this.data.loginClubUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getRossneNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getClubBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getCancelBtnInResignWindow().click()

        profilePage.getClubBox().find(profilePage.getSelectorOfResignBtn())
          .should('be.visible')
    })  

    it('Unsubscribe Rossnę! newsletter.',function(){

        cy.login(this.data.loginClubUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getRossneNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getResignBtnInResignWindow().click()

        mainPage.getToast()
          .should('have.text', this.data.removeEmailToast)

        profilePage.getCheckbox()
          .should('be.visible')
          .and('not.be.checked')

    })  
    
    it('Resignation from the Rossnę! program, cancel confirmation.',function(){

        cy.login(this.data.loginClubUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getRossneNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getRossneProgramBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getCancelBtnInResignWindow().click()

        profilePage.getRossneProgramBox().find(profilePage.getSelectorOfResignBtn())
          .should('be.visible')
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

        cy.login(this.data.loginEmptyUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getYourShopSection().find('h3')
          .should('have.text',this.data.NoShopSelectedHeadline)

        profilePage.getYourShopSection().find(mainPage.getBtnSelector())
          .should('have.text', this.data.chooseShop)

        profilePage.getSettingsContactSection()
          .should('be.visible')

        profilePage.getSettingsPasswordSection()
          .should('be.visible')

        profilePage.getSettingsAdressSection()
          .should('be.visible')

        profilePage.getCheckbox()
          .should('be.visible')
          .and('not.be.checked')

        profilePage.getRossmannClubBoxHeadline()
          .should('have.text', this.data.headerKrBoxNonClubMember)

        profilePage.getDeleteAccountBtn()
          .should('be.visible')
    }) 

    it('User in Rossmann Club - tab appearance.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getYourShopSection()
          .should('be.visible')

        profilePage.getSettingsContactSection()
          .should('be.visible')

        profilePage.getSettingsPasswordSection()
          .should('be.visible')

        profilePage.getNslBox().find('strong')
          .should('be.visible')
          .and('have.text', this.data.headerNewsletterRossmannBox)

        profilePage.getClubBox().find('strong')
          .should('be.visible')
          .and('have.text', this.data.headerKrBoxClubMember)

        profilePage.getClubBox().find(mainPage.getBtnSelector())
          .should('be.visible')
          .and('have.text', this.data.resignsBtn)

        profilePage.getDeleteAccountBtn()
          .should('be.visible')
    })

    it('Opening the Your Shop edition - user without Your Shop selected.',function(){ 

        cy.login(this.data.loginEmptyUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getYourShopSection().find(mainPage.getBtnSelector()).click()

        cy.url()
          .should('include', this.data.shopEditPath)

        profilePage.getYourShopHeadline()
          .should('have.text', this.data.chooseYourShopHeadline)

        profilePage.getDrugstoreSearchHolder()
          .click()
          .type(this.data.city)
          .should('have.value',this.data.city)

        profilePage.getDrugstoreAdress()
          .should('be.visible')

        profilePage.getBackToSettingsBtn().click()

        cy.url()
          .should('include', this.data.settingsPath)
    })
    
    //BUG
    // it.only('Opening the Your Shop edition - user with Your Shop selected.',function(){

    //     cy.login(this.data.loginRegularUser, this.data.password)

    //     cy.clickProfileIcon()

    //     cy.wait(1000)

    //     profilePage.getYourShopSection().find('h3')
    //       .should('have.text', this.data.yourShopHeadline)
        
    //     profilePage.getShopOpeningHours()
    //       .should('be.visible')
        
    //     profilePage.getShopAdress()
    //       .should('be.visible') 
        
    //     profilePage.getYourShopSection().find(mainPage.getBtnSelector()).click()
        
    //     cy.url()
    //       .should('include', this.data.shopEditPath)  
        
    //     profilePage.getYourShopHeadline()
    //       .should('have.text', this.data.yourShop)
        
    //     profilePage.getDrugstoreSearchHolder()
    //       .click()
    //       .type(this.data.city)
    //       .should('have.value',this.data.city)
        
    //     profilePage.getDrugstoreAdress()
    //       .should('be.visible')
        
    // })

    it('Password Change - Validation.',function(){ 
        
      cy.login(this.data.loginRegularUser, this.data.password)
      
      cy.clickProfileIcon()
      
      cy.wait(1000)
      
      profilePage.getSettingsPasswordSection().find(mainPage.getBtnSelector()).click()
      
      cy.url()
        .should('include', this.data.passwordPath)

      // Empty password fields

      profilePage.getSaveBtn().click()

      profilePage.getPassErrorMsg().eq(0).find(mainPage.getFeedbackText())
        .should('have.text', this.data.emptyPassFieldValidation)
      
      profilePage.getPassErrorMsg().eq(1).find(mainPage.getFeedbackText())
        .should('have.text', this.data.emptyPassFieldValidation)
      
      profilePage.getPassErrorMsg().eq(2).find(mainPage.getFeedbackText())
        .should('have.text', this.data.emptyPassFieldValidation)

      // The passwords entered are not the same

      profilePage.getPassField().eq(0)
        .type(this.data.currentPass, {delay: 100, force: true})
        
      profilePage.getPassField().eq(1)
        .type(this.data.newPass, {delay: 100, force: true})
        
      profilePage.getPassField().eq(2)
        .type(this.data.secondNewPass)
        
      profilePage.getSaveBtn().click()
        
      profilePage.getPassErrorMsg().eq(0).find(mainPage.getFeedbackText())
        .should('not.exist')
        
      profilePage.getPassErrorMsg().eq(1).find(mainPage.getFeedbackText())
        .should('not.exist')
        
      profilePage.getPassErrorMsg().eq(2).find(mainPage.getFeedbackText())
        .should('have.text', this.data.notMatchingPassValidation)

      profilePage.getPassField().eq(0).clear()  
      profilePage.getPassField().eq(1).clear()
      profilePage.getPassField().eq(2).clear()
      
      // New password length <8 characters

      profilePage.getPassField().eq(1)
        .type(this.data.invalidShortPass)
        
      profilePage.getSaveBtn().click()
        
      profilePage.getPassErrorMsg().eq(1).find(mainPage.getFeedbackText())
        .should('have.text', this.data.incorrectPassValidation)

      profilePage.getPassField().eq(1).clear()

      // New password length >64 characters.

      profilePage.getPassField().eq(1)
        .type(this.data.invalidLongPass, {delay: 100, force: true})
        
      profilePage.getSaveBtn().click()
        
      profilePage.getPassErrorMsg().eq(1).find(mainPage.getFeedbackText())
        .should('have.text', this.data.incorrectPassValidation)

      profilePage.getPassField().eq(1).clear()

      // New password with only numbers

      profilePage.getPassField().eq(1)
        .type(this.data.invalidNumberPass)
        
      profilePage.getSaveBtn().click()
        
      profilePage.getPassErrorMsg().eq(1).find(mainPage.getFeedbackText())
        .should('have.text', this.data.incorrectPassValidation)

      profilePage.getPassField().eq(1).clear()

      // New password with only letters

      profilePage.getPassField().eq(1)
        .type(this.data.invalidAlphaPass)
        
      profilePage.getSaveBtn().click()
        
      profilePage.getPassErrorMsg().eq(1).find(mainPage.getFeedbackText())
        .should('have.text', this.data.incorrectPassValidation)

      profilePage.getPassField().eq(1).clear()

      // Show Password Functionality

      profilePage.getPassField().eq(0)
        .type(this.data.currentPass)
        .should('have.attr', 'type', 'password')
   
      profilePage.getPassVisibilityIcon().eq(0).click()
   
      profilePage.getPassField().eq(0)
        .should('have.attr', 'type', 'text')

      profilePage.getPassField().eq(1)
        .type(this.data.newPass)
        .should('have.attr', 'type', 'password')
   
      profilePage.getPassVisibilityIcon().eq(1).click()
    
      profilePage.getPassField().eq(1)
        .should('have.attr', 'type', 'text')

      profilePage.getPassField().eq(2)
        .type(this.data.secondNewPass)
        .should('have.attr', 'type', 'password')
    
      profilePage.getPassVisibilityIcon().eq(2).click()
    
      profilePage.getPassField().eq(2)
        .should('have.attr', 'type', 'text')    
  })

    it('Adding and removing new address. ',function(){ 
        
        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        cy.wait(1000)

        profilePage.getAddAdressField().scrollIntoView().click()

        cy.url()
          .should('include', this.data.adressAddPath)

        profilePage.getStreetField()
          .type(this.data.street)
          .should('have.value', this.data.street)

        cy.wait(300)

        profilePage.getHouseNumberField()
          .type(this.data.houseNumber)
          .should('have.value', this.data.houseNumber)

        profilePage.getAdressContinuedField()
          .type(this.data.houseNumber)
          .should('have.value', this.data.houseNumber)

        profilePage.getZipCodeField()
          .type(this.data.zipCode)
          .should('have.value', this.data.zipCode)

        profilePage.getSaveBtn().click()

        profilePage.getSettingsPasswordSection()
          .scrollIntoView()
          .should('be.visible')

        profilePage.getAdressCard()
          .should('be.visible')

        profilePage.getAdressCard().find(profilePage.getSelectorOfRemoveBtn()).click()

        profilePage.getAdressCard()
          .should('not.exist')
    })

    it('Subscribe rossmann.pl newsletter without confirmation checkbox check.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('not.exist')

        profilePage.getCheckbox()
          .should('not.be.checked')

        profilePage.getSignUpBtn().click()

        profilePage.getNslBox().find(profilePage.getSelectorOfValidationText())
          .should('have.text', this.data.checkboxValidation)
    })

    it('Subscribe rossmann.pl newsletter.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('not.exist')

        profilePage.getCheckbox()
          .should('not.be.checked')
          .click()

        profilePage.getSignUpBtn().click()

        mainPage.getToast()
          .should('have.text', this.data.subscribeToRossmannNewsletterToast)

        profilePage.getSpecialClubBox()
          .should('be.visible')
    })

    it('Subscribe Special Club newsletter without confirmation checkbox check.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('be.visible')

        profilePage.getCheckbox()
          .should('not.be.checked')

        profilePage.getSignUpBtn().click()

        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfValidationText())
          .should('be.visible')
          .and('have.text', this.data.checkboxValidation)
    })

    it('Subscribe Special Club newsletter.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('be.visible')

        profilePage.getCheckbox()
          .should('not.be.checked')
          .click()

        profilePage.getSignUpBtn().click()

        mainPage.getToast()
          .should('have.text', this.data.subscribeToSpecialClubToast)

        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn())
          .should('be.visible') 
    })

    it('Unsubscribe Special Club newsletter, cancel confirmation.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('be.visible')

        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getCancelBtnInResignWindow().click()

        profilePage.getResignWindow()
          .should('not.exist')

        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn())
          .should('be.visible')
    })

    it('Unsubscribe Special Club newsletter.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('be.visible')

        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getResignBtnInResignWindow().click()

        cy.wait(1000)

        mainPage.getToast()
          .should('have.text', this.data.removeEmailToast)

        profilePage.getCheckbox()
          .should('be.visible')
          .and('not.be.checked')

        profilePage.getSpecialClubBox().find(profilePage.getSelectorOfResignBtn())
          .should('not.exist')
    })

    it('Unsubscribe rossmann.pl newsletter, cancel confirmation.',function(){

        cy.login(this.data.loginRegularUser, this.data.password)

        cy.clickProfileIcon()

        profilePage.getNslBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getSpecialClubBox()
          .should('be.visible')

        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getCancelBtnInResignWindow().click()

        profilePage.getResignWindow()
          .should('not.exist')

        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn())
          .should('be.visible')

    })

    it('Unsubscribe rossmann.pl newsletter.',function(){ 

        cy.login(this.data.loginRegularUser, this.data.password)
        
        cy.clickProfileIcon()
        
        profilePage.getNslBox().scrollIntoView()
        
        mainPage.cookiesAgreement()
        
        profilePage.getSpecialClubBox()
          .should('be.visible')
        
        profilePage.getNslBox().find(profilePage.getSelectorOfResignBtn()).click()
        
        profilePage.getResignWindow()
          .should('be.visible')
        
        profilePage.getResignBtnInResignWindow().click()
        
        cy.wait(1000)
        
        mainPage.getToast()
          .should('have.text', this.data.removeEmailToast)
        
        profilePage.getCheckbox()
          .should('be.visible')
          .and('not.be.checked')
        
        profilePage.getSpecialClubBox()
          .should('not.exist')
    })

    it('Resignation from the Rossmann Club, cancel confirmation.',function(){

        cy.login(this.data.loginClubUser, this.data.password)

        cy.clickProfileIcon()

        cy.goToRossneTabInProfile()

        profilePage.getClubBox().scrollIntoView()

        mainPage.cookiesAgreement()

        profilePage.getRossneProgramBox().find(profilePage.getSelectorOfResignBtn()).click()

        profilePage.getResignWindow()
          .should('be.visible')

        profilePage.getCancelBtnInResignWindow().click()

        profilePage.getClubBox().find(profilePage.getSelectorOfResignBtn())
          .should('be.visible')
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

        cy.login(this.data.loginEmptyUser, this.data.password)
        
        cy.clickProfileIcon()
        
        cy.goToPaymentsTabInProfile()
        
        profilePage.getPaymentsLogosModule()
          .should('be.visible')
        
        profilePage.getPaymentCard()
          .should('be.visible')
          .click()
        
        cy.url()
          .should('include', this.data.paymentsPath)
        
        profilePage.getPaymentCardAdd()
          .should('be.visible')
          .click()
        
        cy.url()
          .should('include', this.data.paymentsAddPath)
        
        profilePage.getCardNumber()
          .should('be.visible')
        
        profilePage.getCardDate()
          .should('be.visible')
        
        profilePage.getCardCvv()
          .should('be.visible')
        
        cy.scrollTo('bottom')
        
        mainPage.cookiesAgreement()
        
        cy.wait(3000)
        
        profilePage.getAddCardBtn()
          .should('be.visible')
          .click({force:true})
        
        cy.wait(2000)
        
        mainPage.getToast().then(function(element){
            const actualText=element.text()
            expect(actualText.includes(this.data.blankCardFormToast)).to.be.true
        })
        
    })  
})   
