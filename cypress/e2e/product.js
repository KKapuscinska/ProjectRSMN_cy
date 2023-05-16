/// <reference types="Cypress" />

import { mainPage } from "../pages/pageObjects/mainPage/mainPage"
import { productInfo } from "../pages/pageObjects/productInfo"



describe ('Product tests', () => { 

    beforeEach(() => {
        cy.fixture('product').then(function(data)
        {
            this.data=data
        })
        cy.visit('/')
    })

    it.only('Adding Products to Cart and verify final price.',function(){
        mainPage.toNewCategoryTab()

        //add first product on list to cart
        productInfo.getCart().eq(0).click()
        
        //choosing delivery
        productInfo.getDeliveryWindow().find(productInfo.getDeliveryRowsInDeliveryWindow())
        .each(($el, index, $list) => {
            const inpost=$el.find(productInfo.getRadioClass()).text()
            if (inpost.includes('InPost')){
                cy.wrap($el).find(productInfo.getRadio()).click()
            }
        }) 
        productInfo.getDeliveryWindow().find('button').contains('Zapisz').click() 
        cy.wait(1000)

        productInfo.getCart().eq(5).click()
        cy.wait(2000)

        mainPage.toBasketTab()

        //Counting the basket value
        var sum=0
        productInfo.getProductPriceInCart().each(($el, index, $list) => {
            //cy.log($el.text()) //show values of the products
            const amount=$el.text()
            //Changing commas to dots
            var res=amount.split(' ')[0].replace(',','.').trim()
            //24,99 zł
            //res[0]=24,99
            //res[1]=zł
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
            var total=amount.split(' ')[0].replace(',','.').trim()
            expect(Number(total)).to.equal(sum)
        })

    })


})