const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGLoginPage = require('../../../pages/TGLoginPage')

const tgLoginPage = new TGLoginPage()

When(/^user enter username as "([^"]*)" and password as "([^"]*)"$/, (username, password) => {
  tgLoginPage.login(username, password)
})

When(/^user clicks Login button$/, () => {
  tgLoginPage.clickLoginButton()
})

Then(/^user should see a "([^"]*)"$/, (message) => {
  message === 'You are logged in'
    ? tgLoginPage.getSuccessMessage().should('have.text', message)
    : tgLoginPage.getErrorMessage().should('have.text', message)
})
