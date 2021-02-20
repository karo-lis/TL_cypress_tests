import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { home, mac, pageTitles as titles } from '../../utlis/locators';
import { paths } from '../../utlis/paths';

const computers = {
  'MacBook Pro 16': mac.macBookPro16,
  'MacBook Air': mac.macBookAir,
  'MacBook Pro 13': mac.macBookPro13,
  'iMac': mac.iMac,
  'iMac Pro': mac.iMacPro,
  'Mac mini': mac.macMini,
};

const pages = {
  'MacBook Pro 16': paths.macBookPro16,
  'MacBook Air': paths.macBookAir,
  'MacBook Pro 13': paths.macBookPro13,
  'iMac': paths.iMac,
  'iMac Pro': paths.iMacPro,
  'Mac mini': paths.macMini,
};

const pageTitles = {
  'MacBook Pro 16': titles.macBookPro16,
  'MacBook Air': titles.macBookAir,
  'MacBook Pro 13': titles.macBookPro13,
  'iMac': titles.iMac,
  'iMac Pro': titles.iMacPro,
  'Mac mini': titles.macMini,
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
  cy.get(computers[name]).click()
})

Then('I am redirected to the {string} page', (url) => {
  cy.url().should('include', pages[url])
})

And('I can see {string} text displayed', (title) => {
   cy.get(pageTitles[title]).invoke('text').should('include', title)
})