import DaftarPage from "../daftar";

describe ("Execute TCID NMBB-01", function(){
    it ("Daftar, tanpa centang Syarat ketentuan dan kebijakan privasi", function() {
        const daftar = new DaftarPage();
        daftar.navigate();
        daftar.enterName().clear();
        daftar.enterName().type('Ini Testing Akun');

        daftar.enterEmail().clear();
        daftar.enterEmail().type('testingakun@gmail.com');
        
        daftar.daftarSekarang().click();

        cy 
            .get('.text-danger')
            .should('contain','Wajib menyetujui syarat ketentuan dan kebijakan yang berlaku')
    })
})