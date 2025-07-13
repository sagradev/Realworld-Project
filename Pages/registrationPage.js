class RegistrationPage{
    selectorList() {
        const selectors ={
            registerButton: "[href='/signup']",
            firstNameField: '#firstName',
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField:"[name='confirmPassword']" ,
            signUpButton: "[data-test='signup-submit']",
            loginLocal: '.App-root'

        }
        return selectors
    }
    registerLocal(){
        cy.get(this.selectorList().registerButton).click()
    }

    registerCase(firstname,lastname,username,password,confirmpassword){
    cy.get(this.selectorList().firstNameField).type(firstname)
    cy.get(this.selectorList().lastNameField).type(lastname)
    cy.get(this.selectorList().userNameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().confirmPasswordField).type(confirmpassword)
    }

    confirmRegister(){
        cy.get(this.selectorList().signUpButton).click({force:true})
    }

    failConfirmRegister(){
    cy.get('body').should('contain', 'Password does not match')
    }

}

export default RegistrationPage