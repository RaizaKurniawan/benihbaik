import LoginPage from "../login";

describe ("Execute TCID MBB-10", function() {
    it ("Cek Button Lupa Password", function() {
        const login = new LoginPage();
        login.navigate();
        login.forgotPassword().click();

        cy
            .url()
            .should('eq','https://m.benihbaik.com/forgotpassword')
        
    })
})