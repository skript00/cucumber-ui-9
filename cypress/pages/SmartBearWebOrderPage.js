const SmartBear = require('./SmartBearLoginPage')

class SmartBearWeb extends SmartBear {
  // Locators

  getCheckBoxes() {
    return cy.get('[type="checkbox"]')
  }

  getCheckAllButton() {
    return cy.get('#ctl00_MainContent_btnCheckAll')
  }

  getUncheckAllButton() {
    return cy.get('#ctl00_MainContent_btnUncheckAll')
  }

  // Methods
}

module.exports = SmartBearWeb
