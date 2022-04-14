describe('Generic Test Requiring Log In', () => {
    before(() => {
      // `cy.login()` uses the custom command in commands.js
      cy.login().visit('/url-that-requires-testing')
    })
  
    // Without this function only the first test will work.
    beforeEach(() => {
      Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
    })
  
    it('Perform some test', () => {
      cy.get().type('herp derp')
        .should('contain', 'herp derp')
    })
  })