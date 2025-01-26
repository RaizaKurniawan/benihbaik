class HomePage {
    navigate() {
        cy
            .visit('https://m.benihbaik.com')
    }
    topbanner(banner){
        return cy 
            .get('.swiper-slide-active > .banner-list > img').click()
    }
}

export default HomePage
