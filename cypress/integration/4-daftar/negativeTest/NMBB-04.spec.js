import DaftarPage from "../daftar";

describe ("Execute TCID NMBB-04", function(){
    it ("Daftar, Tidak mengisi Nama - blank Name", function() {
        const daftar = new DaftarPage();
        daftar.navigate();
        // daftar.enterName().clear();
        // daftar.enterName().type('');

        daftar.enterEmail().clear();
        daftar.enterEmail().type('johndoe@microsoft.com');
        daftar.checklistSyarat().click();
        daftar.daftarSekarang().click();

        cy 
            .get('.text-danger')
            .contains('Nama lengkap tidak boleh kosong.')
    })
})