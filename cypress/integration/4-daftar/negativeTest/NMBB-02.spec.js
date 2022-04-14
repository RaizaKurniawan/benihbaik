import DaftarPage from "../daftar";

describe ("Execute TCID NMBB-02", function(){
    it ("Daftar, Nama menggunakan angka, number, spesial karakter", function() {
        const daftar = new DaftarPage();
        daftar.navigate();
        daftar.enterName().clear();
        daftar.enterName().type('1321!!Eza');

        daftar.enterEmail().clear();
        daftar.enterEmail().type('testingakun@gmail.com');
        daftar.checklistSyarat().click();
        daftar.daftarSekarang().click();

        cy 
            .get('.m-b-13')
            .contains('*Nama Lengkap hanya boleh huruf')
    })
})