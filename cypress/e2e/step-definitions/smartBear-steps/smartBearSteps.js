const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const SmartBearLogin = require('../../../pages/SmartBearLoginPage')
const SmartBearWeb = require('../../../pages/SmartBearWebOrderPage')

const smartB = new SmartBearLogin()
const smartB2 = new SmartBearWeb()

Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (username) => {
  smartB.enterUsername(username)
})

When(/^user enters password as "([^"]*)"$/, (password) => {
  smartB.enterPassword(password)
})

When(/^user clicks on "([^"]*)" button$/, (label) => {
  smartB2.clickButton(label)
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartB.getErrorMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.url().should('eq', url)
})

Then(/^all rows should be checked$/, () => {
  smartB2.getCheckBoxes().should('be.checked')
})

Then(/^all rows should be unchecked$/, () => {
  smartB2.getCheckBoxes().should('not.be.checked')
})