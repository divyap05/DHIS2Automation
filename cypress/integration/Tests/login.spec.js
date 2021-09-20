import LoginPage from "../../support/Page Object/Login.Page"

describe('Logging in as Admin',function(){
    let profile
    const loginPage = new LoginPage()
    before(function(){
        cy.fixture('profile').then(function(testdata){
            profile=testdata
        })
    })
    it('Test login as Admin user', function(){
        cy.visit(Cypress.config("baseUrl"))
        loginPage.getUsername().type(profile.adminUsername)
        loginPage.getPassword().type(profile.adminPassword)
        loginPage.getSigninButton().click()
    })
    it('Test login as Test user', function(){
        cy.visit(Cypress.config("baseUrl"))
        loginPage.getUsername().type(profile.testUsername)
        loginPage.getPassword().type(profile.testPassword)
        loginPage.getSigninButton().click()
    })
})
