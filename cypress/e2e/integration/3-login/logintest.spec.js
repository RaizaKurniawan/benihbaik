describe('Generic Test Requiring Log In', () => {
    before(() => {
      cy.login() //uses the custom command in commands.js
      // cy.login().visit('/url-that-requires-testing')
    })
    beforeEach(() => {
      cy
        .visit('/profile')
      //cy.session('laravel_session', 'XSRF-TOKEN')
      // //Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
    })
  
    it('Perform some test', () => {
      cy
        .get('.item')
        .contains('Masuk sekarang juga')
        .click()
    })

    
  })