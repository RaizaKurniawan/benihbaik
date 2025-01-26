import LoginPage from "../login";

describe ("Execute TCID MBB-11", function() {
    it ("Menampilkan request reset password pada email", function() {
        const login = new LoginPage();
        login.navigate();
        login.forgotPassword().click();
        login.inputEmailForgotPassword().clear();
        login.inputEmailForgotPassword().type('raiza@benihbaik.com')
        login.cekBtn().click();

        cy 
            .get('.alert')
            .should('contain', 'Kami telah mengirim E-mail ResetPassword Anda')
            

    })
})