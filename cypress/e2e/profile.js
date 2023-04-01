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
        profilePage.getSeeAllBtn().click()
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

    it('User with order - tab appearance.',function(){ 
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
        cy.get('[data-testid="price-regular"]').should('not.exist') //???????????????????????????????????????????
        
        //Verification of whether all products have a promotional price
        let invalidProductExists = false
        productInfo.getTitleProductPrice().each(($product) => {
            const $promoPrice = $product.find('[data-testid="price-promo-new"]')//?????????????????????????????????????
            if (!$promoPrice.length) {
              invalidProductExists = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(invalidProductExists).to.be.false

        //Verification of whether all products have a omnibus information
        let productWithoutPromotionExists = false
        productInfo.getTitleProduct().each(($product) => {
            const $promoPrice = $product.find('[data-testid="lowest-price-in-30-days"]')//?????????????????????????????????????
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

    it('Tab is not displayed for a user who is not enrolled in the Rossnę! program.',function(){ 
        loginPage.loginPlainUser()
        mainPage.toSettingsTab()
        profilePage.getRossneTab().should('not.exist')
    })

    it('User who enrolled in the Rossnę! program - tab appearance.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().should('be.visible')
        profilePage.getRossneProgramBox().should('be.visible')
        profilePage.getPaymentsLogosModule().should('be.visible')
    })
    
    it('Approval of an empty checkbox in Rossnę! nsl',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getCheckbox().should('not.be.checked')
        profilePage.getSignUpBtn().click()
        profilePage.getValidationText().should('have.text', this.data.rossneCheckboxValidation)
    })

    it('Giving consent to receive Rossnę! nsl.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getCheckbox().should('not.be.checked').click()
        profilePage.getSignUpBtn().click()
        mainPage.getToast().should('have.text', this.data.enrollToNslRossneToast)
        profilePage.getCheckbox().should('not.exist')
    })
 
    it('Opting-out from receiving Rossnę! nsl.',function(){
        loginPage.loginRossneUser()
        mainPage.toSettingsTab()
        profilePage.toRossneTab()
        profilePage.getRossneNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getResingnsBtn().click()
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
        profilePage.getYourShopSection().find('h3').should('have.text',this.data.NoShopSelectedHeadline)
        profilePage.getYourShopSection().find('.btn').should('have.text', this.data.chooseShop)
        profilePage.getSettingsContactSection().should('be.visible')
        profilePage.getSettingsPasswordSection().should('be.visible')
        profilePage.getSettingsAdressSection().should('be.visible')
        profilePage.getCheckbox().should('be.visible').and('not.be.checked')
        profilePage.getRossmannClubBoxHeadline().should('have.text', this.data.joinKR)
        profilePage.getDeleteAccountBtn().should('be.visible')
    }) 

    it('Opening the Your Shop edition - user without Your Shop selected.',function(){ 
        loginPage.loginPlainUser();
        mainPage.toSettingsTab();
        profilePage.getYourShopSection().find('.btn').click()
        cy.url().should('include', this.data.shopEditPath)
        profilePage.getYourShopHeadline().should('have.text', this.data.chooseYourShopHeadline)
        profilePage.getDrugstoreSearchHolder().click().type(this.data.city)
        profilePage.getDrugstoreAdress().should('be.visible')
        profilePage.getBackToSettingsBtn().click()
        cy.url().should('include', this.data.settingsPath)
    })

    it('Tab with Your Shop selected loads correctly.',function(){ 
        loginPage.login();
        mainPage.toSettingsTab();
        profilePage.getYourShopSection().find('h3').should('have.text', this.data.yourShopHeadline)
        profilePage.getYourShopSection().find('.btn').should('have.text', this.data.yourShopEditBth)
        profilePage.getShopOpeningHours().should('be.visible')
        profilePage.getShopAdress().should('be.visible') 
    })
    
    it('Opening the Your Shop edition - user with Your Shop selected.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        cy.wait(1000)
        profilePage.getYourShopSection().find('.btn').click()
        cy.url().should('include', this.data.shopEditPath)  
        profilePage.getYourShopHeadline().should('have.text', this.data.yourShop)
        profilePage.getDrugstoreSearchHolder().click().type(this.data.city)
        profilePage.getDrugstoreAdress().should('be.visible')
        profilePage.getBackToSettingsBtn().click()
        cy.url().should('include', this.data.settingsPath)
    })

    it('User in Rossmann Club - tab appearance.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getYourShopSection().should('be.visible')
        profilePage.getSettingsContactSection().should('be.visible')
        profilePage.getSettingsPasswordSection().should('be.visible')
        profilePage.getRossmannClubNslBox().find('strong')
        .should('be.visible').and('have.text', this.data.NslRossmann)
        profilePage.getRossmannClubBox().find('strong')
        .should('be.visible').and('have.text', this.data.memberKR)
        profilePage.getRossmannClubBox().find('.ladda-button')
        .should('be.visible').and('have.text', this.data.resignsBtn)
        profilePage.getDeleteAccountBtn().should('be.visible')
    })

    it('Giving consent to receive KR nsl.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getRossmannClubNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getCheckbox().should('not.be.checked')
        profilePage.getCheckbox().click()
        profilePage.getSignUpBtn().click()
        mainPage.getToast().should('have.text', this.data.enrollToNslToast)
        profilePage.getCheckbox().should('not.exist')
    })

    it('Opting out from receiving KR nsl.',function(){ 
        loginPage.login()
        mainPage.toSettingsTab()
        profilePage.getRossmannClubNslBox().scrollIntoView()
        mainPage.cookiesAgreement()
        profilePage.getResingnsBtn().click()
        profilePage.getResignWindow().should('be.visible')
        profilePage.getResignBtnInResignWindow().click()
        mainPage.cookiesAgreement()
        cy.wait(1000)
        mainPage.getToast().should('have.text', this.data.removeEmailToast)
        profilePage.getCheckbox().should('be.visible').and('not.be.checked')
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
        cy.wait(2000)
        profilePage.getAddCardBtn().should('be.visible').click({force:true})
        
        mainPage.getToast().then(function(element){
            const actualText=element.text()
            expect(actualText.includes('Nie możemy dodać Twojej karty płatniczej.')).to.be.true
        })
        
    })  
})   
