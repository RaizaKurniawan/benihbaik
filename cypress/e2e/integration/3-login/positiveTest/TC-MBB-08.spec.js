import LoginPage from "../login";

describe ("Execute TCID MBB-07", function() {
    it ("Login menggunakan facebook", function() {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail().clear();
        login.facebookBtn().click();
        
    })
})