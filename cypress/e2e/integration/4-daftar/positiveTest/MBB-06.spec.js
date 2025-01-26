import DaftarPage from "../daftar";

describe ("Execute TCID MBB-06", function() {
    it ("Daftar dengan Google Account", function(){
        const daftar = new DaftarPage();
        daftar.navigate();
        daftar.googleBtn().click();

        
    })
})