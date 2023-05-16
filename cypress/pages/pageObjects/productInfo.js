

  class ProductInfo {
    constructor (){
        
    }
    
    getTitleProduct()
    {
      return cy.get('.tile-product')
    }

    getProductFoto()
    {
      return cy.get('.tile-product__img')
    }

    getTitleProductPrice()
    {
        return cy.get('.tile-product__price')
    }  

    getRegularPrice()
    {
      return cy.get('[data-testid="price-regular"]')
    }

    getLowBarProductInfo()
    {
      return cy.get('.tile-product > .pt-2')
    }

    getRossneSign()
    {
    return '.tile-product__sign-rossne'
    }

    getRegularPrice()
    {
      return '[data-testid="price-regular"]'
    }

    getOmnibusInfo()
    {
      return '[data-testid="lowest-price-in-30-days"]'
    }

    getPromoPrice()
    {
      return '[data-testid="price-promo-new"]'
    }

    getCheckboxOfFilterRecommended()
    {
      return cy.get(':nth-child(1) > :nth-child(4) > .filter__content').find('.form-control')
    }

    getTagBtn()
    {
      return cy.get('.m-n1 > .btn-tag')
    }

    getCart()
    {
        return cy.get('.tile-product__add-list-plus')
    }

    getDeliveryWindow()
    {
      return cy.get('.modal-body')
    }

    getDeliveryRowsInDeliveryWindow()
    {
      return '.modal-delivery__radio'
    }
    getRadioClass()
    {
      return '.radio-button'
    }

    getRadio()
    {
      return '.radio'
    }

    getProductPriceInCart()
    {
      return cy.get('.cart-product__current-price')
    }

    getPriceDetailsInCart()
    {
      return cy.get('.price-details__value')
    }



}

export const productInfo = new ProductInfo()
