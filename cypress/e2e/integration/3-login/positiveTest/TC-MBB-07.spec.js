import LoginPage from "../login";

describe ("Execute TCID MBB-07", function() {
    it ("Login menggunakan Email dan Password yang valid", function() {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail().clear();
        login.enterEmail().type('raiza@benihbaik.com');
        login.enterPasword().clear();
        login.enterPasword().type('IdiomOfSkyliner28');
        login.masuk().click();

    })
})