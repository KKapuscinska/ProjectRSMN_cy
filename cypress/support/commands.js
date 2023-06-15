import { commands } from "./PageObjects/commands"
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//

//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


  Cypress.Commands.add('login', (log, pass) => {

    cy.visit('/logowanie')
  
    commands.getloginField()
      .type(log, { delay: 100, force: true })
      .should('have.value', log)
  
    commands.getPasswordField()
      .type(pass, { delay: 100, force: true })
      .should('have.value', pass)
  
    commands.getLoginBtn().click()
  
    cy.title()
      .should('eq', 'Kosmetyki, Makijaż, Piękno | Drogeria internetowa Rossmann.pl')
  })


  Cypress.Commands.add('clickProfileIcon', () => {

    commands.getProfileIcon()
      .click()

    cy.title()
      .should('eq','Ustawienia konta | Drogeria Rossmann.pl')

    cy.url()
      .should('include', 'ustawienia-konta')

  })


  Cypress.Commands.add('goToCart', () => {

    commands.getCartIcon()
      .click()

    cy.title()
      .should('eq','Twój Koszyk | Drogeria Rossmann.pl')

    cy.url()
      .should('include', 'koszyk')

  })


  Cypress.Commands.add('goToNewCategoryTab', () => {

    commands.getNewCategoryTab()
      .click()

    cy.title()
      .should('eq','Wszystkie produkty | Drogeria Rossmann.pl')
    
    cy.url()
      .should('include', 'produkty')  

    cy.get('.btn-tag')
      .should('contains.text', 'Nowe!')

  })


  Cypress.Commands.add('goToProfileTabInProfile', () => {

    commands.getProfileTab()
      .click()

    cy.get('h1')
      .should('have.text','Ulubione')

    cy.url()
      .should('include', 'profil')

  })


  Cypress.Commands.add('goToHistoryTabInProfile', () => {

    commands.getHistoryTab()
    .click()

    cy.get('.pb-3')
      .should('have.text','Historia zakupów')

    cy.url()
      .should('include', 'profil/zamowienia')

  })


  Cypress.Commands.add('goToFavouriteTabInProfile', () => {

    commands.getFavouriteTab()
    .click()

    cy.get('h1')
      .should('have.text','Ulubione')

    cy.url()
      .should('include', 'profil/ulubione')

  })


  Cypress.Commands.add('goToRossneTabInProfile', () => {

    commands.getRossneTab()
    .click()

    cy.get('h1')
      .should('have.text','Rossnę!')

    cy.url()
      .should('include', 'profil/rossne')

    cy.get('.settings__header')
      .should('have.text', 'Ustawienia programu Rossnę!')

  })


  Cypress.Commands.add('goToPaymentsTabInProfile', () => {

    commands.getPaymentsTab()
      .click()

    cy.get('h1')
      .should('have.text','Płatności')

    cy.url()
      .should('include', 'profil/platnosci')
      
  })


  




  
  


