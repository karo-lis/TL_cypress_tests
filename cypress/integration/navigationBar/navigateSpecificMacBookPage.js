import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { home, mac, pageTitles as titles } from '../../utlis/locators';
import { paths } from '../../utlis/paths';

const computers = {
  'MacBook Pro 16': {
    type: mac.macBookPro16,
    page: paths.macBookPro16,
    pageTitle: titles.macBookPro16,
  },
  'MacBook Air': {
    type: mac.macBookAir,
    page: paths.macBookAir,
    pageTitle: titles.macBookAir
  },
  'MacBook Pro 13': {
    type: mac.macBookPro13,
    page: paths.macBookPro13,
    pageTitle: titles.macBookPro13,
  },
  'iMac': {
    type: mac.iMac,
    page: paths.iMac,
    pageTitle: titles.iMac,
  },
  'iMac Pro': {
    type: mac.iMacPro,
    page: paths.iMacPro,
    pageTitle: titles.iMacPro,
  },
  'Mac mini': {
    type: mac.macMini,
    page: paths.macMini,
    pageTitle: titles.macMini,
  }
};

Given('I am on the main page', () => {
    cy.visit('/')
    cy.url().should('equal', paths.homePage)
  })

When('I click Mac button', () => {
    cy.get(home.macButton)
      .should('contain', 'Mac')
      .click({force: true})
    cy.url().should('include', paths.mac)
})

And('I click {string} button', (name) => {
  cy.get(computers[name].type).click()
})

Then('I am redirected to the {string} page', (url) => {
  cy.url().should('include', computers[url].page)
})

And('I can see {string} text displayed', (title) => {
   cy.get(computers[title].pageTitle).invoke('text').should('include', title)
})