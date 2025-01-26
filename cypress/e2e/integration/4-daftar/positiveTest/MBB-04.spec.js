import DaftarPage from "../daftar";

describe ("Execute TCID MBB-04", function() {
    it ("Daftar dengan Facebook Account", function() {
        
        const daftar = new DaftarPage();
        daftar.navigate();
        daftar.facebookBtn().click();
        
        cy 
            .get('head title')
            .should('contain','facebook')
    })
})