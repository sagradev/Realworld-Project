import LoginPage from "../../Pages/loginPage"
import userData from '../fixtures/user-data.json'
import DashboardPage from "../../Pages/dashboardPage"

const loginPage = new LoginPage
const dashboardPage = new DashboardPage

describe('Login - Case', () => {
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginCase(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
})

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginCase(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  });;