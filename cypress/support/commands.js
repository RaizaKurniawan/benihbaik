// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Note that the base_url is set in the ./cypress.json file

Cypress.Commands.add('homePage', () => {
  cy.visit('/')
})


Cypress.Commands.add('login', () => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  cy.session([email, password], () => {
      cy
        .visit('/login')
        .getCookie('XSRF-TOKEN')
        .then((cookie) => {
          cy.request({
            method: 'POST',
            url: '/login',
            failOnStatusCode: false,
            form: true,
            body: {
              email: email || Cypress.env('email'),
              password: password || Cypress.env('password'),
            },
            headers: {
            // Base64 encoded string was URI encoded in headers. Decode it.
            'X-XSRF-TOKEN': decodeURIComponent(cookie.value)
          },
        });
      });
    }
  );
})

 