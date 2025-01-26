describe('Test with object page', () => {
    beforeEach('Open application', () => {
        cy.homePage()
    });

    it('Test the page are open', () => {
        cy
            .wait(100)
            .get('.footer').invoke('text')
            .should('have.contain', 'Home')
    });
});