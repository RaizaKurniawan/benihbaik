class GalangDana {
    navigate() {
        cy 
            .visit('https://m.benihbaik.com')
            .get('.row > .col-12 > .text-center > .form-control').scrollIntoView()
            
    }
    iconBtn(galangdanabtn){
        cy 
            .get(':nth-child(2) > .onc-gtm > .paragraphbox')
            .click()
    }
}

export default GalangDana 