describe('Generic Test Requiring Log In', () => {
    // before(() => {
    //   cy.login() //uses the custom command in commands.js
    //   // cy.login().visit('/url-that-requires-testing')
    // })
    beforeEach(() => {
      cy
        .login()
        .visit('/profile')
      //cy.session('laravel_session', 'XSRF-TOKEN')
      // //Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
    })
  
    it('Ensure that the user able to see the Profile page', () => {
      cy
        .get('#update')
        .should('have.contain', 'Akun')
        
    })


  })