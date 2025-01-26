class Footer {
    home() {
        cy 
            .get('.footer')
            .contains('Home')
            .click()
    }

    notifikasi(){
        cy
            .get('.footer')
            .contains('Notifikasi')
            .click()
    }

    galangDana(){
        cy
            .get('.footer')
            .contains('Galang Dana')
            .click()
    }

    bookmarks(){
        cy
            .get('.footer')
            .contains('Bookmarks')
            .click()
    }

    profile(){
        cy
            .get('.footer')
            .contains('Profil')
            .click()
    }
}


export default Footer