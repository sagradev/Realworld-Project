class RegistrationPage{
    selectorList() {
        const selectors ={
            registerButton: "[href='/signup']",
            firstNameField: "[name='firstname']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            signUpButton: '.SignUpForm-form'

        }
        return selectors
    }
    registerLocal(){
        cy.get(this.selectorList().registerButton).click()
    }

    registerCase(firstname,lastname,username,password){
    cy.get(this.selectorList().firstNameField).type(firstname)
    cy.get(this.selectorList().lastNameField).type(lastname)
    cy.get(this.selectorList().userNameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().signUpButton).click()
    }

}

export default RegistratioPage