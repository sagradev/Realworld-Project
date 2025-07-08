class LoginPage{
    selectorList() {
        const selectors ={
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']",

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginSuccess(username,password){
    cy.get(this.selectorList().userNameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().submitButton).click()
    }
}

export default LoginPage