

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

    getLowBarProductInfo()
    {
      return cy.get('.align-items-center.p-2')
    }

    getSelectorOfRegularPriceInfo()
    {
      return '.tile-product__lowest-price'
    }

    getSelectorOfOmnibusInfo()
    {
      return '[data-testid="lowest-price-in-30-days"]'
    }

    getSelectorOfPromoPrice()
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

    getProductPriceInCart()
    {
      return cy.get('.price-details__value-total')
    }

    getPriceDetailsInCart()
    {
      return cy.get('.price-details__value')
    }

    getCartRemoveProductBtn()
    {
      return cy.get('.btn-del')
    }

    getFilterBox()
    {
      return cy.get('.filter__tags')
    }

    getSelectorOfFilterName()
    {
      return 'label.checkbox > .label > .mr-1'
    }

    getShowProductBtn()
    {
      return cy.get('.filters__btns > .btn')
    }

    getBrandCollaps()
    {
      return cy.get(':nth-child(1) > :nth-child(6) > .filter__name > .icon').click()
    }
}

export const productInfo = new ProductInfo()
