import DaftarPage from "../daftar";

describe ("Execute TCID MBB-03", function(){
    it ("Daftar, Menggunakan Email yang belum terdaftar", function() {
        const daftar = new DaftarPage();
        daftar.navigate();
        daftar.enterName().clear();
        daftar.enterName().type('Raiza Testing');

        daftar.enterEmail().clear();
        daftar.enterEmail().type('darktit@newsote.com');

        daftar.checklistSyarat().click();
        daftar.daftarSekarang().click();
        
        cy 
            .get(':nth-child(3) > b')
            .should('contain', 'Segera cek email Anda unduk melanjutkan Aktivasi BenihBaik.com')

    })
})