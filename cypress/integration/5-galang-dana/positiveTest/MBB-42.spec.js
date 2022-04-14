import GalangDana from "../galangdana";
import LoginPage from "../../3-login/login";

describe ("Execute TCID MBB-42", function() {
    it ("Galang Dana Button Function", function() {
        const galangdana = new GalangDana();
        galangdana.navigate();

        galangdana.iconBtn();

    })
    it ("Login di Galang Dana", function(){
        const login = new LoginPage();
        login.enterEmail().clear();
        login.enterEmail().type('raiza@benihbaik.com');
        login.enterPasword().clear();
        login.enterPasword().type('IdiomOfSkyliner28');
        login.masuk().click();
    })
})