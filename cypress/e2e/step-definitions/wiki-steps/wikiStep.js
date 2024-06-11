import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import WikiPage from '../../../pages/WikiPage'

const wikiPage = new WikiPage()

When(/^user search for "([^"]*)" on Wikipedia$/, (input) => {
  wikiPage.searchFor(input)
})

Then(/^user should see "([^"]*)" in the first heading$/, (heading) => {
  wikiPage.getFirstHeading().should('contain', heading)
})

Then(/^user should see below languages around the logo$/, (dataTable) => {
  const expectedLanguages = dataTable.rawTable.flat()
  wikiPage.getLanguages().each(($el, i) => {
    cy.wrap($el).should('have.text', expectedLanguages[i])
  })
})
