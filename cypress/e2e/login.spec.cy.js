import LoginPage from "../../Pages/loginPage"

const loginPage = new LoginPage

describe('Login - Success', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginSuccess()
  })
})