// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

class LoginPage {
    navigate() {
        cy 
            .visit('https://m.benihbaik.com')
            .get(':nth-child(5) > a > .icon-footer')
            .click()
            .get('.block0')
            .click()
    }
    enterEmail(username) {
        return cy 
                //.get('.m-b-18 > .input100')
                .get('[placeholder="Nama Pengguna atau Email Anda"]')
    }
    enterPasword(password) {
        return cy  
                //.get('.m-b-12 > .input100')
                .get('[placeholder="Password Anda"]')
    }
    masuk(masuk) {
        return cy
                .get('.login100-form-btn')
    }
    facebookBtn(loginwithfb) {
        return cy 
                .get('.login100-form-btn3')
    }
    googleBtn(loginwithgoogle){
        return cy 
                .get('.login100-form-btn2')
    }
    forgotPassword(lupapassword){
        return cy 
                .get(':nth-child(2) > .subtitle-green')
    }
    inputEmailForgotPassword(emailforgotpassword){
        return cy   
                .get('.input100')
    }
    cekBtn(cekbutton){
        return cy 
                .get('.login100-form-btn')
    }
}

export default LoginPage

// describe('Login Page', () => {
//     beforeEach(() => { 
//     cy.visit('https://www.benihbaik.dev:5688/login')
//     })

//     it('1. Visit Login Page CSR Portal', () => {
//     cy
//         .get('.makeStyles-default_tabStyle-16')
//         .click().should('exist')

//     })
// })