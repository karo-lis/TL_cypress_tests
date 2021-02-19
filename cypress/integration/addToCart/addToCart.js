import { should } from 'chai';
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the main page', () => {
    cy.visit('/')
    cy.url().should('include', 'apple')
  })

When('I go to the MacBook 16 page', () => {
    cy.get('[href="/mac/"] .ac-gn-link-text')
      .should('contain', 'Mac')
      .click({force: true})
    cy.url().should('include', '/mac/')
    cy.get('[href="/macbook-pro-16/"] .chapternav-label').should('contain', 'MacBook Pro 16”')
      .click()
    cy.url().should('include', '/macbook-pro-16/')
})

