import LoginPage from "../login";
import Footer from "../../2-home/footer";

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

        const footer = new Footer();
        footer.profile();
        cy
            .get('#update')
            .should('have.contain', 'Akun')
        
    })
})