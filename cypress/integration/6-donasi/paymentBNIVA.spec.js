import HomePage from "../2-home/home";
import DonasiSekarang from "../8-component/detailCampaignt/button";
import Donasi from "./donasi";

describe("Execute Donasi Payment BNI VA", function(){
        
    it("Open Campaign Detail from Top banner slide", function() {
        const donasi = new HomePage();
        donasi.navigate();
        donasi.topbanner();
    })
    it("Donasi Sekarang", function() {
        const donasisekarang = new DonasiSekarang();
        donasisekarang.buttondonasi();
        
    })
    // it("Pilih Nominal", function() {
    //     const nominaldonasi = new Donasi();
    //     nominaldonasi.pilihnominal25();
    //     cy 
    //         .wait(500)
    //     nominaldonasi.lanjutkandonasi().click();
    // })

    it("Isi nominal", function(){
        const nominal = new Donasi();
        nominal.cookieSet();
        nominal.inputnominal().clear();
        nominal.inputnominal().type(10000);
        cy 
            .wait(1000)
            nominal.lanjutkandonasi().click();
           
    })
    it("Pilih Payment BNI VA", function() {
        cy.scrollTo('bottom');
        const bniva = new Donasi();
        bniva.cookieSet();
        
        bniva.bniva().click();
    })
    it("Finish Payment", function() {
        onload: (contentWindow) => {
        const finishpayment = new Donasi();
        finishpayment.cookieSet();
    
        if (contentWindow) {
            const finishpayment = new Donasi();
            finishpayment.cookieSet();
            finishpayment.inputnama().clear();
            finishpayment.inputnama().type('Raiza Kurniawan');
            finishpayment.inputemail().clear();
            finishpayment.inputemail().type('raizakurniawan@gmail.com');
    
            finishpayment.lanjutkandonasi().click();
            }
        
       }
        
         })
})