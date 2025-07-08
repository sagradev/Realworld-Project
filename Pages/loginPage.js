class LoginPage{
    selectorList() {
        const selectors ={
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']"

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginCase(username,password){
    cy.get(this.selectorList().userNameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().submitButton).click()
    }

    checkAccessInvalid(){
    cy.get(this.selectorList().submitButton).click()
    cy.get(this.selectorList().wrongCredentialAlert)
    }
}

export default LoginPage