// <reference types="Cypress" />

import { contactPage } from "../pages/pageObjects/contactPage"
import { mainPage } from "../pages/pageObjects/mainPage"

describe ('Contact page', function (){

    beforeEach(() => {
        cy.visit('/kontakt')
        cy.fixture('contact').then(function(data)
    {
        this.data=data
    })
      
    })

    it('Page loads correctly.', function(){
      
        contactPage.getContactPageTitle()
          .contains(this.data.pageTitle)

        contactPage.getRossMap()
          .should('be.visible')

        contactPage.getCentralaBox()
          .should('be.visible')

        contactPage.getCentralaBox().find('h1')
          .contains(this.data.rossFullName)
        
        contactPage.getCentralaBoxInfo().each(($element, index) => {
            const expectedText = [
              this.data.centralaAdress,
              this.data.centralaContact,
              this.data.centralaInfo
            ][index]
            
            cy.wrap($element)
              .should('have.text', expectedText)
          })

        contactPage.getSendMsgBtn()
          .should('have.text', this.data.sendBtnText)

        contactPage.getContactFormHeader().find('h2')
          .should('have.text', this.data.contactFormHeader)

          const expectedHeaders = [
            this.data.companyContactModuleFirstHeader,
            this.data.companyContactModuleSecondHeader,
            this.data.companyContactModuleThirdHeader
          ]
          contactPage.getTitleInCompanyContactModule().each(($element, index) => {
            cy.wrap($element).contains(expectedHeaders[index]);
          })

    })

    it('Sending a blank contact form.', function(){
      
        contactPage.getSendMsgBtn()
          .scrollIntoView()
          .click()

        //Checking the validation message - blank email field
        contactPage.getUserContactFields().eq(0).find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.emailLackFeedback)
          
        //Checking the validation message - blank message field
        contactPage.getTaskFields().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.msgLackFeedback)

        //Checking the validation message - Captcha
        contactPage.getCaptcha().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.captchaInvalidFeedback)
        
    })

    it('Validation of email, phone number and message field.', function(){

        contactPage.getFirstName().scrollIntoView()

        mainPage.cookiesAgreement()

        contactPage.getEmail()
          .type(this.data.letter)
          .should('have.value', (this.data.letter))

        contactPage.getPhoneNumber()
          .type(this.data.digit)
          .should('have.value', (this.data.digit))
        
        contactPage.getMsg()
          .should('have.attr','maxlength', this.data.maxLengthOfTheMsg)

        contactPage.getMsg()
          .type(this.data.tooShortMsg)
          .should('have.value', (this.data.tooShortMsg))

        cy.scrollTo('bottom')

        contactPage.getSendMsgBtn().click()

        //Checking the validation message - incorrect email
        contactPage.getUserContactFields().find(mainPage.getFeedbackText()).eq(0)
          .should('be.visible')
          .and('have.text', this.data.emailInvalidFeedback)

        ////Checking the validation message - too short value in Phone number field
        contactPage.getUserContactFields().find(mainPage.getFeedbackText()).eq(1)
          .should('be.visible')
          .and('have.text', this.data.phoneNumberInvalidFeedback)
      
        //Checking the validation message - too short value in Message field
        contactPage.getTaskFields().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text',this.data.msgInvalidFeedback)

    })

    it('Filling out the contact form.', function(){

        contactPage.getContactFormHeader().scrollIntoView()

        mainPage.cookiesAgreement()

        contactPage.getFirstName()
          .type(this.data.firstName)
          .should('have.value', (this.data.firstName))   

        contactPage.getLastName()
          .type(this.data.lastName)
          .should('have.value', (this.data.lastName)) 

        contactPage.getEmail()
          .type(this.data.mail)
          .should('have.value', (this.data.mail))

        contactPage.getPhoneNumber()
          .type(this.data.phone)
          .should('have.value', (this.data.phone))
        
        contactPage.getTaskFields().find(contactPage.getCategoryRadio()).eq(0)
          .check({force:true})
          .should('be.checked')
        
        contactPage.getTaskFields().eq(1).click()

        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category1)
            {
                cy.wrap($el).click()
            }  
        }) 

        contactPage.getNumberFieldInCategory().type(this.data.clubCardNumber)

        contactPage.getMsg()
          .type(this.data.message)
          .should('have.value', (this.data.message))

        cy.scrollTo('bottom')

        contactPage.getSendMsgBtn().click()

        //Checking the validation message - Captcha
        contactPage.getCaptcha().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.captchaInvalidFeedback)     
                
    })

})

describe ('Request category - Stationary drugstore.', function (){

    beforeEach(() => {
        cy.visit('/kontakt')
        cy.fixture('contact').then(function(data)
        
    {
        this.data=data

        contactPage.getEmail().scrollIntoView()

        contactPage.getTaskFields().find(contactPage.getCategoryRadio()).eq(0)
          .check({force:true})
          .should('be.checked')
        
    })
    
      
    })

    it('Verify "Numer karty klubu" field in "Klub Rossmann" category.', function(){

        contactPage.getTaskFields().eq(1).click()

        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category1)
            {
                cy.wrap($el).click()
            }  
        })

        mainPage.cookiesAgreement()  

        contactPage.getSendMsgBtn().click()

        //Checking the validation message - blank 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory()
          .type(this.data.letter)

        //Checking the validation message - letter in 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory()
          .type('{backspace}')

        contactPage.getNumberFieldInCategory()
          .type(this.data.digit)

        contactPage.getSendMsgBtn().click()

        //Checking the validation message - too short value in 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory()
          .type(this.data.clubCardNumber)

        //Checking the validation message - too long value in 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory()
          .type('{backspace}')

        contactPage.getSendMsgBtn().click()

        //Checking if the validation message is not displayed in correct value
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('not.exist')

    })

    it('Verify "Numer karty Programu Rossnę!" field in "Program Rossnę!" category.', function(){

        contactPage.getTaskFields().eq(1).click()

        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category2)
            {
                cy.wrap($el).click()
            }  
        })

        mainPage.cookiesAgreement()   

        contactPage.getSendMsgBtn().click()

        //Checking the validation message - blank 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory()
          .type(this.data.letter)

        //Checking the validation message - letter in 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory()
          .type('{backspace}')

        contactPage.getNumberFieldInCategory()
          .type(this.data.digit)

        contactPage.getSendMsgBtn().click()

        //Checking the validation message - too short value in 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory()
          .type(this.data.clubCardNumber)

        //Checking the validation message - too long value in 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('be.visible')
          .and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory()
          .type('{backspace}')

        contactPage.getSendMsgBtn().click()

        //Checking if the validation message is not displayed in correct value
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('not.exist')

    })

    it('Verify "Pytanie o produkt" category.', function(){

        contactPage.getTaskFields().eq(1).click()

        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category4)
            {
                cy.wrap($el).click()
            }  
        })

        mainPage.cookiesAgreement()        
        contactPage.getSendMsgBtn().click()

        //Checking if the validation message is not displayed
        contactPage.getUnitOfNumberFieldInCategory().find(mainPage.getFeedbackText())
          .should('not.exist')

        //Checking value of text above 'Number katalogowy produktu' field
        contactPage.getCategoryDescription()
          .should('be.visible')
          .and('have.text', this.data.category4Description)

    })  

    it('Verify "Usługi fotograficzne Cewe/Kodak" category.', function(){

        contactPage.getTaskFields().eq(1).click()

        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category6)
            {
                cy.wrap($el).click()
            }  
        })

        //Checking if the (card) number field is not displayed
        contactPage.getNumberFieldInCategory()
          .should('not.exist')

    })

    

})   
    
