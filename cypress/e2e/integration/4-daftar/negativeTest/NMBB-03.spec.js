import DaftarPage from "../daftar";

describe ("Execute TCID NMBB-03", function(){
    it ("Daftar, dengan Email yang sudah terregistered", function() {
        const daftar = new DaftarPage();
        daftar.navigate();
        daftar.enterName().clear();
        daftar.enterName().type('Abadi di Nanjaya');

        daftar.enterEmail().clear();
        daftar.enterEmail().type('raiza@benihbaik.com');
        daftar.checklistSyarat().click();
        daftar.daftarSekarang().click();

        cy 
            .get('.text-danger')
            .contains('*Email sudah digunakan')
    })
})