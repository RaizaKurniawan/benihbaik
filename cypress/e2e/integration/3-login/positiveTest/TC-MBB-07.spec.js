import LoginPage from "../login";

describe ("Execute TCID MBB-07", function() {
    it ("Login menggunakan Email dan Password yang valid", function() {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail().clear();
        login.enterEmail().type('raizakurniawan@gmail.com');
        login.enterPasword().clear();
        login.enterPasword().type('Ejakeren040488');
        login.masuk().click();

    })
})