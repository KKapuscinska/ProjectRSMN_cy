import profilePageSelectors from "./profilePageSelectors";

  class ProfilePage {
    constructor (){
        
    }
    toProfileTab(){
      cy.get(profilePageSelectors.profileTab).click();
      cy.get('h1').should('have.text','Ulubione')
      cy.url().should('include', 'profil')
        
    }

    toHistoryTab(){
      cy.get(profilePageSelectors.historyTab).click();
      cy.get('.pb-3').should('have.text','Historia zakupów')
      cy.url().should('include', 'profil/zamowienia')
      
    }

    toFavouriteTab(){
      cy.get(profilePageSelectors.favoriteTab).click();
      cy.get('h1').should('have.text','Ulubione')
      cy.url().should('include', 'profil/ulubione')
    
    }

    toRossneTab(){
      cy.get(profilePageSelectors.rossneTab).click();
      cy.get('h1').should('have.text','Rossnę!')
      cy.url().should('include', 'profil/rossne')
      cy.get('.settings__header').should('have.text', 'Ustawienia programu Rossnę!')
    }

    toProfileSettingsTab(){
      cy.get(profilePageSelectors.profileSettingsTab).click();
      cy.get('.pb-md-3').should('have.text','Ustawienia konta')
      cy.url().should('include', 'profil/ustawienia-konta')
      
    }

    toPaymentsTab(){
      cy.get(profilePageSelectors.paymentsTab).click();
      cy.get('h1').should('have.text','Płatności')
      cy.url().should('include', 'profil/platnosci')
      
    }
    
    //General
    getEmptyList()
    {
      return cy.get('.empty-list')
    }

    getCheckbox()
    {
      return cy.get('label.checkbox > .checkbox')
    }

    getResingnsBtn()
    {
      return cy.get(':nth-child(2) > .d-flex > div > .ladda-button')
    }

    getResignWindow()
    {
      return cy.get('.modal-content')
    }

    getResignBtnInResignWindow()
    {
      return cy.get('.py-1 > .btn')
    }

    getPaymentsLogosModule()
    {
      return cy.get('.PaymentLogos-module_paymentLogos--0x3Ic')
    }

    getSignUpBtn()
    {
      return cy.get('.d-flex > .ladda-button')
    }

    //Profile Tab
    getSeeAllBtn()
    {
      return cy.get('.d-flex > .btn')
    }

    //Purchase History tab 
    getHistoryCard()
    {
      return cy.get('.history__card')
    }

    getHistoryCardBtn()
    {
      return cy.get('.history__card > .btn')
    }

    getAddOrderProductToCartBtn()
    {
      return cy.get('.py-4 > .btn')
    }

    getHistoryOrderHeader ()
    {
      return cy.get('.history-order__header')
    }



    //Favourite Tab
    getNumberOfFavouriteProduct()
    {
      return cy.get(':nth-child(1) > .text-dark')
    }

    getAddFavouriteProductToCartBtn()
    {
      return cy.get('.d-none > .btn')
    }

    getFavouriteCategoryList()
    {
      return cy.get('.sri-select > .form-control')
    }

    getOnlyPromotionSwitch()
    {
      return cy.get('.mt-6 > .pt-2')
    }



    //Rossne Tab
    getRossneTab()
    {
      return cy.get('.profile__nav').find('[href="/profil/rossne"]')
    }

    getRossneNslBox()
    {
      return cy.get('.settings-agreement > :nth-child(2)')
    }

    getRossneProgramBox()
    {
      return cy.get('.settings-agreement > :nth-child(3)')
    }

    getValidationText()
    {
      return cy.get('.is-invalid')
    }

    
    //SettingsTab
    getYourShopSection()
    {
      return cy.get('section.settings__card')
    }

    getSettingsContactSection()
    {
      return cy.get('.settings-contact')
    }

    getSettingsPasswordSection()
    {
      return cy.get('.settings-password')
    }

    getSettingsAdressSection()
    {
      return cy.get('.settings-address')
    }

    getDeleteAccountBtn()
    {
      return cy.get('.text-right > div > .btn')
    }
    
    getRossmannClubNslBox()
    {
      return cy.get('.settings-agreement > :nth-child(2)')
    }

    getRossmannClubBox()
    {
      return cy.get('.settings-agreement > :nth-child(3)')
    }

    getRossmannClubBoxHeadline()
    {
      return cy.get('.col-md-15 > :nth-child(1) > a')
    }

    getDrugstoreSearchHolder()
    {
      return cy.get('.profile-drugstore__search-holder > .form-control')
    }

    getDrugstoreAdress()
    {
      return cy.get('.profile-drugstore__list-item')
    }

    getYourShopHeadline()
    {
      return cy.get('.pt-5')
    }

    getBackToSettingsBtn()
    {
      return cy.get('.mt-n2 > .btn')
    }

    getShopOpeningHours()
    {
      return cy.get('.row > .d-none')
    }

    getShopAdress()
    {
      return cy.get('.col-sm-10')
    }


    //PaymentsTab

    getPaymentCard()
    {
      return cy.get('.payment-card__card')
    }

    getPaymentCardAdd()
    {
      return cy.get('.payment-card__add')
    }

    getCardNumber()
    {
      return cy.get('#payu-card-number')
    }

    getCardDate()
    {
      return cy.get('#payu-card-date')
    }

    getCardCvv()
    {
      return cy.get('#payu-card-cvv')
    }

    getAddCardBtn()
    {
      return cy.get('#multiTokenizeButton')
    }

}

export const profilePage = new ProfilePage()
