import LoginPage from "../login";

describe ("Execute TCID NMBB-07", function () {
    it ("Login Error, User input wrong Password", function() {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail().clear();
        login.enterEmail().type('raiza@benihbaik.com');
        login.enterPasword().clear();
        login.enterPasword().type('mypassword');
        login.masuk().click();
        
        cy 
            .get('.alert')
            .should('contain','Periksa kembali username/password anda')
            
            
    })

 
})