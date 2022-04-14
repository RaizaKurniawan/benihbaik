import DaftarPage from "../daftar";

describe ("Execute TCID MBB-01", function(){
    it ("Daftar, Cek Button Daftar", function() {
        const daftar = new DaftarPage();
        daftar.navigate();

        cy 
         .get('b')
         .contains('Daftar')
    })
})