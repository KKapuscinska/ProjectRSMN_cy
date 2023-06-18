/// <reference types="Cypress" />

import { mainPage } from "../pages/pageObjects/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"

describe ('Filter products tests', () => { 

    beforeEach(() => {
        cy.fixture('product').then(function(data)
        {
            this.data=data
        })
        cy.visit('/szukaj')
        
        cy.viewport(3840, 2160)

        productInfo.getBrandCollaps()
                
        cy.wait(1000)

        mainPage.cookiesAgreement()
    })

    it('Filter by "Czujesz klimat?".',function(){
        
        productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(0)
          .should('have.text', this.data.filterCategory1)

        productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(0)
          .click({force: true})

        productInfo.getShowProductBtn()
          .click({force: true})

        productInfo.getTagBtn()
          .should('have.text', this.data.filterCategory1)

        productInfo.getTitleProduct().should('exist')
        
        productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

        productInfo.getTagBtn().should('not.exist')

        productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(0)
          .should('not.be.checked')

  })

    it('Filter by "Wyjątkowy Produkt".',function(){
        
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(1)
        .should('have.text', this.data.filterCategory2)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(2)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory2)

      productInfo.getTitleProduct().should('exist')

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(2)
        .should('not.be.checked')

  })

    it('Filter by "Nowe!".',function(){
        
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(2)
        .should('have.text', this.data.filterCategory3)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(4)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory3)

      productInfo.getTitleProduct().should('exist')

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(4)
        .should('not.be.checked')

  })

    it('Filter by "Promocja".',function(){
          
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(3)
        .should('have.text', this.data.filterCategory4)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(6)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory4)
      
      //Verification of whether all products have a promotional price
      productInfo.getTitleProductPrice()
      .each(($productPrice, index) => {
        productInfo.getTitleProductPrice()
          .eq(index)
          .find(productInfo.getSelectorOfPromoPrice())
          .should('be.visible')
        })

      //Verification of whether all products have a omnibus information
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

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(6)
        .should('not.be.checked')

  })

    it('Filter by "TYLKO U NAS".',function(){
          
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(4)
        .should('have.text', this.data.filterCategory5)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(8)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory5)

      productInfo.getTitleProduct().should('exist')

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(8)
        .should('not.be.checked')

  })

    it('Filter by "Promocja Rossnę!".',function(){
            
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(5)
        .should('have.text', this.data.filterCategory6)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(10)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory6)

      //Checking if all products have rossne label
      productInfo.getTitleProductPrice()
      .each(($productPrice, index) => {
        productInfo.getTitleProductPrice()
          .eq(index)
          .find(productInfo.getRossneSelectorSign())
          .should('be.visible')
      })
    
      //Checking if all products have omnibus information
      let productWithoutOmnibusInformation = false
      productInfo.getLowBarProductInfo().each(($product) => {
          const $promoPrice = $product.find(productInfo.getSelectorOfOmnibusInfo())
          if (!$promoPrice.length) {
              productWithoutOmnibusInformation = true
            cy.wrap($product)
              .should('have.class', 'invalid')
          }
        })
        expect(productWithoutOmnibusInformation).to.be.false
        
      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(10)
        .should('not.be.checked')

  })
 
    it('Filter by "Rabat Rossnę! Ciąża".',function(){
            
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(6)
        .should('have.text', this.data.filterCategory7)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(12)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory7)

      productInfo.getTitleProduct().should('exist')

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(12)
        .should('not.be.checked')

  })   
  
    it('Filter by "Rabat Rossnę! Maluch".',function(){
              
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(7)
        .should('have.text', this.data.filterCategory8)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(14)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory8)

      productInfo.getTitleProduct().should('exist')

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(14)
        .should('not.be.checked')

  })

    it('Filter by "Mega".',function(){
                
      productInfo.getFilterBox().find(productInfo.getSelectorOfFilterName()).eq(8)
        .should('have.text', this.data.filterCategory9)

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(16)
        .click({force: true})

      productInfo.getShowProductBtn()
        .click({force: true})

      productInfo.getTagBtn()
        .should('have.text', this.data.filterCategory9)

      productInfo.getTitleProduct().should('exist')

      productInfo.getTagBtn().find(mainPage.getSelectorOfCloseBtn()).click()

      productInfo.getTagBtn().should('not.exist')

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(16)
        .should('not.be.checked')

  })     

    it('Filter by multiple filters.',function(){
                  
      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(0)
        .click({force: true})

      productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).eq(8)
        .click({force: true})

      cy.wait(500)

      productInfo.getShowProductBtn()
        .click({force: true})
    
      productInfo.getTagBtn().eq(0)
        .should('have.text', this.data.filterCategory1)

      productInfo.getTagBtn().eq(1)
        .should('have.text', this.data.filterCategory5)

    })  

    it('Verify Show Products Button State When All Filters Are Selected (Disabled).',function(){
      
    productInfo.getFilterBox().find(mainPage.getCheckboxSelector()).each(($checkbox, index) => {
        if (index % 2 === 0) { 
          cy.wrap($checkbox).click({force: true});
        }
      })
      
      productInfo.getShowProductBtn()
        .should('have.text',this.data.textOnDisabledShowProductsBtn)
        .and('have.attr', 'disabled')
  
    })  

})
