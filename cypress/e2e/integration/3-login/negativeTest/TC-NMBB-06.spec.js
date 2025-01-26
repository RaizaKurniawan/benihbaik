import LoginPage from "../login"

describe ("Execute TCID NMBB-06", function() {
    it ("Login Error, User belum terdaftar", function() {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail().clear();
        login.enterEmail().type('johndoe@microsoft.com');
        login.enterPasword().clear();
        login.enterPasword().type('mypassword');
        login.masuk().click();
        
        cy 
        .get('.alert')
        .should('contain','Periksa kembali username/password anda')
    
                
        })

})