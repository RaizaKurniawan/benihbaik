import DaftarPage from "../daftar";

describe ("Execute TCID NMBB-05", function(){
    it ("Daftar, tidak mengisi nama lengkap dan email", function() {
        const daftar = new DaftarPage();
        daftar.navigate();
        // daftar.enterName().clear();
        // daftar.enterName().type('');

        // daftar.enterEmail().clear();
        // daftar.enterEmail().type('johndoe@microsoft.com');
        daftar.checklistSyarat().click();
        daftar.daftarSekarang().click();

        cy 
            .get('.text-danger')
            .eq(0).should('contain', 'Nama lengkap tidak boleh kosong.')
            .get('.text-danger')
            .eq(1).should('contain', 'Alamat email tidak boleh kosong.')
            // .contains('Nama lengkap tidak boleh kosong.','Alamat email tidak boleh kosong.')
            
    })
})