class Footer {
    home() {
        cy 
            .get('.footer')
            .contains('Home')
            .click()
    }
}


export default Footer