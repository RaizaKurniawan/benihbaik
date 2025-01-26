class DaftarPage {
    navigate() {
        cy 
            .visit('https://m.benihbaik.com')
            .get(':nth-child(5) > a > .icon-footer')
            .click()
            .get('.block1')
            .click()
    }
    enterName(namalengkap) {
        return cy 
                .get('.m-b-16 > .input100')
    }
    enterEmail(email) {
        return cy 
                .get('.m-b-12 > .input100')
    }
    checklistSyarat(syaratketentuan){
        return cy 
                .get('.mt-2 > input')
    }
    daftarSekarang(daftar) {
        return cy  
                .get('.login100-form-btn')
    }
    facebookBtn(daftarviafb) {
        return cy   
                .get('.login100-form-btn3')
    }
    googleBtn(daftarviagoogle) {
        return cy
                .get('.login100-form-btn2')
    }
}

export default DaftarPage