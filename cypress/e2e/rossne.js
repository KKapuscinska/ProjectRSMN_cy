/// <reference types="Cypress" />

import { loginPage } from "../pages/pageObjects/login/loginPage"
import { mainPage } from "../pages/pageObjects/mainPage/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"
import { rossnePage } from "../pages/pageObjects/rossnePage"


describe ('Rossne Page tests', () => { 

    beforeEach(() => {
        cy.fixture('rossne').then(function(data)
        {
        this.data=data
        })
        cy.visit('./')
        mainPage.toRossneTab()
    })

    it('The Rossnę! page - appearance.',function(){
        rossnePage.getRossneSubpagesHeader().should('have.text','Rossnę!')

        rossnePage.getFirstRossneBenefitModule().find('h4').eq(0).should('have.text', this.data.firstTile)
        rossnePage.getFirstRossneBenefitModule().find('h4').eq(1).should('have.text', this.data.secondTile)
        rossnePage.getFirstRossneBenefitModule().find('h4').eq(2).should('have.text', this.data.thirdTile)
        rossnePage.getFirstRossneBenefitModule().find('h4').eq(3).should('have.text', this.data.fourthTile)

        rossnePage.getRossneProgramModule().find('img').should('have.length',3)
        rossnePage.getRossneProgramModule().find('h4').eq(0).contains(this.data.pregnantText)    
        rossnePage.getRossneProgramModule().find('h4').eq(1).contains(this.data.babyText)
        rossnePage.getRossneProgramModule().find('h4').eq(2).contains(this.data.juniorText)

        rossnePage.getRossneBenefitModule().should('have.length', 4)
        rossnePage.getRossneBenefitModule().find('h2').eq(0).should('have.text', this.data.firstTile)
        rossnePage.getRossneBenefitModule().find('h2').eq(1).should('have.text', this.data.secondTile)
        rossnePage.getRossneBenefitModule().find('h2').eq(2).should('have.text', this.data.thirdTile)
        rossnePage.getRossneBenefitModule().find('h2').eq(3).should('have.text', this.data.fourthTile)

        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    })
})

describe ('Rossne Page redirects - Top tile', () => { 

    beforeEach(() => {
        cy.fixture('rossne').then(function(data)
        {
        this.data=data
        })
        cy.visit('./')
        mainPage.toRossneTab()
    })

    it('Redirecting to the Rossnę! promotion.',function(){
        rossnePage.getFirstRossneBenefitModuleBtn().eq(0).click()
        productInfo.getCheckboxOfFilterRecommended().eq(5).should('be.checked')
        productInfo.getTagBtn().should('have.text', this.data.rossneTagText)
        
        //Checking if all products have a rossne label
        let productWithoutRossneLabelExists = false
        productInfo.getTitleProductPrice().each(($product) => {
            const $promoPrice = $product.find(productInfo.getRossneSign())
            if (!$promoPrice.length) {
                productWithoutRossneLabelExists = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(productWithoutRossneLabelExists).to.be.false

        //Checking if all products have omnibus information
        let productWithoutOmnibusInformation = false
        productInfo.getLowBarProductInfo().each(($product) => {
            const $promoPrice = $product.find(productInfo.getOmnibusInfo())
            if (!$promoPrice.length) {
                productWithoutOmnibusInformation = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(productWithoutOmnibusInformation).to.be.false
        
    })

    it('Redirecting to the "Oferty specjalne" page.',function(){
        rossnePage.getFirstRossneBenefitModuleBtn().eq(1).click()
        cy.url().should('include', this.data.specialOffersPath)
        rossnePage.getRossneSubpagesHeader().should('have.text',this.data.specialOffersHeader)
        rossnePage.getRossneOffersImg().should('have.length',3)
        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    })

    it('Redirecting to the "Stera wiedzy" page.',function(){
        rossnePage.getFirstRossneBenefitModuleBtn().eq(2).click()
        cy.url().should('include', this.data.knowledgeZonePath)
        rossnePage.getRossneSubpagesHeader().should('have.text', this.data.knowledgeZomeHeader)
        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    })    

    it('Redirecting to the "Czyściochowo" page.',function(){
        rossnePage.getFirstRossneBenefitModuleBtn().eq(3).click()
        cy.url().should('include', this.data.czysciochowoPath)
        rossnePage.getRossneSubpagesHeader().should('have.text', this.data.czysciochowoHeader)
        rossnePage.getRossneHero().should('have.length', 6)
        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    }) 
})

describe ('Rossne Page redirects - Benefits module', () => { 

  beforeEach(() => {
      cy.fixture('rossne').then(function(data)
      {
      this.data=data
      })
      cy.visit('./')
      mainPage.toRossneTab()
  })

    it('Redirecting to the Rossnę! promotion.',function(){
        
        rossnePage.getRossneBenefitModule().find('.btn').eq(0).scrollIntoView().click()
        
        //Checking if all products have a rossne label
        let productWithoutRossneLabelExists = false
        productInfo.getTitleProductPrice().each(($product) => {
            const $promoPrice = $product.find(productInfo.getRossneSign())
            if (!$promoPrice.length) {
                productWithoutRossneLabelExists = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(productWithoutRossneLabelExists).to.be.false

        //Checking if all products have omnibus information
        let productWithoutOmnibusInformation = false
        productInfo.getLowBarProductInfo().each(($product) => {
            const $promoPrice = $product.find(productInfo.getOmnibusInfo())
            if (!$promoPrice.length) {
                productWithoutOmnibusInformation = true
              cy.wrap($product).should('have.class', 'invalid')
            }
          })
          expect(productWithoutOmnibusInformation).to.be.false
    })
    
    it('Redirecting to the "Oferty specjalne" page.',function(){
        rossnePage.getRossneBenefitModule().find('.btn').eq(1).scrollIntoView().click()
        cy.url().should('include', this.data.specialOffersPath)
        rossnePage.getRossneSubpagesHeader().should('have.text', this.data.specialOffersHeader)
        rossnePage.getRossneOffersImg().should('have.length',3)
        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    })

    it('Redirecting to the "Stera wiedzy" page.',function(){
        rossnePage.getRossneBenefitModule().find('.btn').eq(2).scrollIntoView().click()
        cy.url().should('include', this.data.knowledgeZonePath)
        rossnePage.getRossneSubpagesHeader().should('have.text', this.data.knowledgeZomeHeader)
        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    })    

    it('Redirecting to the "Czyściochowo" page.',function(){
        rossnePage.getRossneBenefitModule().find('.btn').eq(3).scrollIntoView().click()
        cy.url().should('include', this.data.czysciochowoPath)
        rossnePage.getRossneSubpagesHeader().should('have.text', this.data.czysciochowoHeader)
        rossnePage.getRossneHero().should('have.length', 6)
        rossnePage.getRossneSocial().should('be.visible')
        rossnePage.getCzysciochowaAkademia().should('have.text', this.data.organizerText)
        rossnePage.getRossneFAQ().should('be.visible')
        
    }) 
})