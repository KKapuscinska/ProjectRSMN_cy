/// <reference types="Cypress" />

import { mainPage } from "../pages/pageObjects/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"



describe ('Product tests', () => { 

    beforeEach(() => {
        cy.fixture('product').then(function(data)
        {
            this.data=data
        })
        cy.visit('/szukaj')
    })

    it('Add max number of one product to Cart and verify error toast.',function(){

        mainPage.cookiesAgreement()

        for( let i = 0; i <15; i++){
        productInfo.getCart().eq(0)
          .click({force: true})
        cy.wait(500)
        }

        mainPage.getToast()
          .should('have.text', this.data.lackOfProductToast)

        cy.wait(1000)

        cy.goToCart()

        productInfo.getCartRemoveProductBtn()
          .click()

        productInfo.getCartRemoveProductBtn()
          .should('not.exist')

    })
  })
  

describe ('Cart tests', () => { 

  beforeEach(() => {
      cy.fixture('product').then(function(data)
      {
          this.data=data
      })
      cy.visit('/')
  })

  it('Add Products to Cart and verify final price.',function(){
     
      cy.goToNewCategoryTab()

      cy.wait(500)

      mainPage.cookiesAgreement()

      const cartIndexes = [1, 2, 3, 5];

      cartIndexes.forEach((index) => {
      productInfo.getCart().eq(index)
        .click({ force: true })
      })

      cy.wait(3000)

      cy.goToCart()

      //Counting the basket value
      var sum=0
      productInfo.getProductPriceInCart().each(($el, index, $list) => {
          const amount=$el.text()
          var res=amount.split(' ')[0].replace(',','.').trim()
          sum += Number(res)
      })
      .then(() => 
      {
          cy.log(sum)
      })

      //Checking if the value of products matches the total of the cart
      productInfo.getPriceDetailsInCart().then((element) => 
      {
          const amount=element.text()
          const total = parseFloat(amount.split(' ')[0].replace(',', '.').trim())
          const roundedTotal = total.toFixed(2)
          expect(roundedTotal).to.equal(sum.toFixed(2))
      })
      for(let i=0; i<4; i++){
          productInfo.getCartRemoveProductBtn().eq(0)
            .click()
      }
  })

})