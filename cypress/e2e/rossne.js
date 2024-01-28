/// <reference types="Cypress" />

import { mainPage } from "../pages/pageObjects/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"
import { rossnePage } from "../pages/pageObjects/rossnePage"


describe ('Rossne Page tests', () => { 

    beforeEach(() => {
        cy.fixture('rossne').then(function(data)
        {
        this.data=data
        })
        cy.visit('/rossne')

    })

    it('The Rossnę! page - appearance.',function(){

        rossnePage.getRossneSubpagesHeader()
          .should('have.text', this.data.pageHeader)

        const headers = [
            this.data.promotionsHeader,
            this.data.specialOffersHeader,
            this.data.knowledgeZoneHeader,
            this.data.czysciochowoHeader
          ]
          
          rossnePage.getFirstRossneBenefitModule().find('h4').each(($header, index) => {
            cy.wrap($header)
              .should('have.text', headers[index])
          })

        rossnePage.getRossneProgramModule().find('img')
          .should('have.length', this.data.numberOfStatusPhoto)

        const textsToCheck = [
            this.data.pregnantText,
            this.data.babyText,
            this.data.juniorText
          ]
          
          rossnePage.getRossneProgramModule().find('h4').each(($header, index) => {
            cy.wrap($header)
              .contains(textsToCheck[index])
          })

        rossnePage.getRossneBenefitModule()
          .should('have.length', 3)

          const headerToCheck = [
            this.data.specialOffersHeader,
            this.data.knowledgeZoneHeader,
            this.data.czysciochowoHeader
          ]
          
          rossnePage.getRossneBenefitModule().find('h2').each(($header, index) => {
            cy.wrap($header)
              .should('have.text', headerToCheck[index])
          })

        rossnePage.getRossneSocial()
          .should('be.visible')

        rossnePage.getCzysciochowaAkademia()
          .should('have.text', this.data.organizerText)
          .and('be.visible')

        const expectedFaqSection = [
          this.data.nameFirstFaqSection,
          this.data.nameSecondFaqSection,
          this.data.nameThirdFaqSection
        ]

        rossnePage.getRossneFaqSection().each((section, index) => {
          cy.wrap(section)
          .should('have.text', expectedFaqSection[index])
        })     

        rossnePage.getRossneAppDownload()
          .should('be.visible')

    })
})

describe ('Rossne Page redirects - Top tile', () => { 

    beforeEach(() => {
        cy.fixture('rossne').then(function(data)
        {
        this.data=data
        })
        cy.visit('/rossne')
    })

    it('Redirecting to the Rossnę! promotion.',function(){

        rossnePage.getFirstRossneBenefitModuleBtn().eq(0).click()

        productInfo.getTagBtn()
          .should('have.text', this.data.rossneTagText)

        // //Checking if all products have a rossne label
        // let productWithoutRossneLabelExists = false
        // productInfo.getTitleProductPrice().each(($product) => {
        //     const $promoPrice = $product.find(productInfo.getRossneSelectorSign())
        //     if (!$promoPrice.length) {
        //         productWithoutRossneLabelExists = true
        //       cy.wrap($product)
        //         .should('have.class', 'invalid')
        //     } 
        //   })
        //   expect(productWithoutRossneLabelExists).to.be.false

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

    it('Redirecting to the "Benefity" page.',function(){

        rossnePage.getFirstRossneBenefitModuleBtn().eq(1).click()

        cy.url()
          .should('include', this.data.specialOffersPath)

        rossnePage.getRossneSubpagesHeader()
          .should('have.text',this.data.specialOffersHeader)

        rossnePage.getRossneOffersImg()
          .should('have.length', this.data.numberOfStatusPhoto)

          rossnePage.getRossneSocial()
          .should('be.visible')

        rossnePage.getCzysciochowaAkademia()
          .should('have.text', this.data.organizerText)
          .and('be.visible')

        const expectedFaqSection = [
          this.data.nameFirstFaqSection,
          this.data.nameSecondFaqSection,
          this.data.nameThirdFaqSection
        ]

        rossnePage.getRossneFaqSection().each((section, index) => {
          cy.wrap(section)
          .should('have.text', expectedFaqSection[index])
        })     

        rossnePage.getRossneAppDownload()
          .should('be.visible')
        
    })

    it('Redirecting to the "Stera wiedzy" page.',function(){

        rossnePage.getFirstRossneBenefitModuleBtn().eq(2).click()

        cy.url()
          .should('include', this.data.knowledgeZonePath)

        rossnePage.getRossneSubpagesHeader()
          .should('have.text', this.data.knowledgeZoneHeader)

          rossnePage.getRossneSocial()
          .should('be.visible')

        rossnePage.getCzysciochowaAkademia()
          .should('have.text', this.data.organizerText)
          .and('be.visible')

        const expectedFaqSection = [
          this.data.nameFirstFaqSection,
          this.data.nameSecondFaqSection,
          this.data.nameThirdFaqSection
        ]

        rossnePage.getRossneFaqSection().each((section, index) => {
          cy.wrap(section)
          .should('have.text', expectedFaqSection[index])
        })     

        rossnePage.getRossneAppDownload()
          .should('be.visible')
        
    })    

    it('Redirecting to the "Czyściochowo" page.',function(){

        rossnePage.getFirstRossneBenefitModuleBtn().eq(3).click()

        cy.url()
          .should('include', this.data.czysciochowoPath)

        rossnePage.getRossneSubpagesHeader()
          .should('have.text', this.data.czysciochowoHeader)

          rossnePage.getRossneSocial()
          .should('be.visible')

        rossnePage.getCzysciochowaAkademia()
          .should('have.text', this.data.organizerText)
          .and('be.visible')

        const expectedFaqSection = [
          this.data.nameFirstFaqSection,
          this.data.nameSecondFaqSection,
          this.data.nameThirdFaqSection
        ]

        rossnePage.getRossneFaqSection().each((section, index) => {
          cy.wrap(section)
          .should('have.text', expectedFaqSection[index])
        })     

        rossnePage.getRossneAppDownload()
          .should('be.visible')
        
    }) 
})

describe ('Rossne Page redirections - Benefits module', () => { 

  beforeEach(() => {
      cy.fixture('rossne').then(function(data)
      {
      this.data=data
      })
      cy.visit('/rossne')
  })
    
    it('Redirecting to the "Benefity" page.',function(){

        rossnePage.getRossneBenefitModule().find(mainPage.getBtnSelector()).eq(0)
          .scrollIntoView()
          .click()

        cy.url()
          .should('include', this.data.specialOffersPath)

        
    })

    it('Redirecting to the "Stera wiedzy" page.',function(){

        rossnePage.getRossneBenefitModule().find(mainPage.getBtnSelector()).eq(1)
          .scrollIntoView()
            .click()

        cy.url()
          .should('include', this.data.knowledgeZonePath)

        
    })    

    it('Redirecting to the "Czyściochowo" page.',function(){

        rossnePage.getRossneBenefitModule().find(mainPage.getBtnSelector()).eq(2)
          .scrollIntoView()
          .click()

        cy.url()
          .should('include', this.data.czysciochowoPath)
        
    }) 
})