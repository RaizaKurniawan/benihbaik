import LoginPage from "../login";

describe ("Execute TCID NMBB-09", function() {
    it ("Lupa Password Error", function() {
        const login = new LoginPage();
        login.navigate();
        login.forgotPassword().click();
        login.inputEmailForgotPassword().clear();
        login.inputEmailForgotPassword().type('johndoe@microsoft.com');
        login.cekBtn().click();
        
        cy 
            .get('.alert')
            .should('contain','Email Belum Terdaftar')
    })
})