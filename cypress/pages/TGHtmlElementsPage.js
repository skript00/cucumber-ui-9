const TGBasePage = require("./TGBasePage");

class TGHtmlElementsPage extends TGBasePage {

  /* Locators */
  getButtons() {
    return cy.get('#register_button, #signin_button')
  }

  getButtonMessage() {
    return cy.get('.is-block')
  }

  getButtonByText(label) {
    return this.getButtons().contains(label)
  }

  /* Methods */

  clickButtonByText(label) {
    this.getButtonByText(label).click()
  }
}

module.exports = TGHtmlElementsPage