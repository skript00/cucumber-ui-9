const { Then, Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user clicks on the "([^"]*)" card$/, (cardName) => {
  cy.contains(cardName).click()
})

Then(/^the URL should contain "([^"]*)"$/, (url) => {
  cy.url().should('contain', url)
})

Then(/^user should see the "([^"]*)" page heading$/, (heading) => {
  tgHtmlElementsPage.getHeading().should('have.text', heading)
})

Then(/^user should see "([^"]*)" in the URL$/, (url) => {
  for (const u of url.split(' ')) {
    cy.url().should('contain', u)
  }
})

Then(/^user should see "([^"]*)" in the title$/, (title) => {
  cy.title().should('contain', title)
})
