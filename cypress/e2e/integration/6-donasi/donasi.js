class Donasi {
    cookieSet(){
        cy 
            .setCookie('auth', 'eyJpdiI6IlVZcE5xQkxoaEp3KzQ0UmJScGxEVXc9PSIsInZhbHVlIjoiOXZFS05XS1BRMUVMU1ArYjlRQkNucFI0eEE5SWNnV0dhTXhqYVVaS0wwZlBjVSs0RE9tays5eXpBRVJOcVFtMSIsIm1hYyI6ImIzNjhlMDA4MzM1ZDk4OGI3NWY0MTE1Y2NmZDUwNjMyOTEzNGI5ZTBjYzM2YzgwYWUyZGRmZjE4ZmI5NDcxNzcifQ%3D%3D')
    }
    pilihnominal25(pilihnominal) {
        return cy 
            .get(':nth-child(2) > .pr-1 > .card-body > .d-flex > .mb-0').click()
    }
    pilihnominal50(pilihnominal) {
        return cy 
            .get(':nth-child(2) > .pl-1 > .card-body > .d-flex').click()
    }
    pilihnominal100(pilihnominal) {
        return cy 
            .get(':nth-child(3) > .pr-1 > .card-body > .d-flex').click()
    }
    pilihnominal250(pilihnominal) {
        return cy 
            .get(':nth-child(3) > .pl-1 > .card-body > .d-flex').click()
    }
    pilihnominal500(pilihnominal) {
        return cy 
            .get(':nth-child(4) > .pr-1 > .card-body > .d-flex').click()
    }
    pilihnominal1jt(pilihnominal) {
        return cy 
            .get(':nth-child(4) > .pl-1 > .card-body > .d-flex').click()
    }
    inputnominal(inputnominal) {
        return cy 
            .get('#jumlah-donasi').click()
    }
    /* Bagian Payment */
        // Pembayaran Instan
        klikbcapayment(klikbcapayment) {
            return cy 
                .get('[onclick="buttonPayment(8)"]').click()
        }
        ovopayment(){
            return cy 
                .get('[onclick="buttonPayment(11)"]')
        }
        gopaypayment() {
            return cy
                .get('[onclick="buttonPayment(10)"]')
        }
        shopeepay(){
            return cy
                .get('[onclick="buttonPayment(26)"]')
        }
        danapayment(){
            return cy
                .get('[onclick="buttonPayment(3)"]')
        }
        bcaklikpay(){
            return cy
                .get('[onclick="buttonPayment(6)"]')
        }
        linkaja(){
            return cy
                .get('[onclick="buttonPayment(103)"]')
        }
        linkajasyariah(){
            return cy
                .get('[onclick="buttonPayment(104)"]')
        }
        brimopayment(){
            return cy
                    .get('[onclick="buttonPayment(12)"]')
        }
        // Transfer Virtual Account
        bcava(){
            return cy.get('[onclick="buttonPayment(5)"]')
        }
        bniva(){
            return cy.get('[onclick="buttonPayment(108)"]')
        }
        virtuallainnya(){
            return cy.get('[onclick="buttonPayment(25)"]')
        }
        danamonva(){
            return cy.get('[onclick="buttonPayment(110)"]')
        }
        briva(){
            return cy.get('[onclick="buttonPayment(13)"]')
        }
        /// TRansfer Manual
        bankBCA(){
            return cy.get('[onclick="buttonPayment(1)"]')
        }
        bankMandiri(){
            return cy.get('[onclick="buttonPayment(2)"]')
        }
        bankBRI(){
            return cy.get('[onclick="buttonPayment(14)"]')
        }
        bankBNI(){
            return cy.get('[onclick="buttonPayment(17)"]')
        }
        bankOCBC(){
            return cy.get('[onclick="buttonPayment(20)"]')
        }
        bankDBS(){
            return cy.get('[onclick="buttonPayment(23)"]')
        }
        bankBJB(){
            return cy.get('[onclick="buttonPayment(28)"]')
        }

    /* */
    inputnama(inputnamalengkap){
        return cy 
            .get('[style="padding: 0px 20px 5px 20px;"] > :nth-child(1) > .form-control')
            .click
    }
    inputemail(inputemail){
        return cy
            .get('#contact').click()
    }
    hidecommentarname(hidecommentarname){
        return cy 
            .get('#sembunyikanNama').click()
    }
    givecommentar(givecommentar){
        return cy
                .get('#komentarCheck').click()
                .scrolldown
                .get('#fokus_deskripsi').click()
                .type('Ini komentar testing')
    }
    lanjutkandonasi(lanjutkandonasi){
        return cy   
                .get('#donasiSubmit')
    }

}   

export default Donasi 