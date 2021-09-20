class LoginPage{
    
    getUsername(){
        return cy.get('#j_username')
    }
    getPassword(){
        return cy.get('#j_password')
    }
    getSigninButton(){
        return cy.get('.button')
    }
}
export default LoginPage