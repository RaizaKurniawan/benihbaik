import LoginPage from "../login";


describe ("Execute TCID MBB-07", function() {
    it ("Login menggunakan Email dan Password yang valid", function() {
        const login = new LoginPage();

        const email = Cypress.env("email");
        const password = Cypress.env("password");

        login.navigate();
        login.enterEmail().clear();
        login.enterEmail().type(email);
        login.enterPasword().clear();
        login.enterPasword().type(password);
        login.masuk().click();

    })
})