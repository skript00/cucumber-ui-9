class SmartBearLogin {
  /* Locators */
  getUsername() {
    return cy.get('#ctl00_MainContent_username')
  }

  getPassword() {
    return cy.get('#ctl00_MainContent_password')
  }

  getLoginButton() {
    return cy.get('#ctl00_MainContent_login_button')
  }

  getErrorMessage() {
    return cy.get('#ctl00_MainContent_status')
  }

  /* Methods */
  enterUsername(username) {
    this.getUsername().type(username)
  }

  enterPassword(password) {
    this.getPassword().type(password)
  }

  clickButton(label) {
    switch (label) {
      case 'Login':
        this.getLoginButton().click()
        break
      case 'Uncheck All':
        this.getUncheckAllButton().click()
        break
      case 'Check All':
        this.getCheckAllButton().click()
        break
      // default:
    }
  }
}

module.exports = SmartBearLogin
