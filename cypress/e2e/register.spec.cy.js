import LoginPage from "../../Pages/loginPage"
import userData from '../fixtures/user-data.json'
import DashboardPage from "../../Pages/dashboardPage"
import RegistratioPage from "../../Pages/registrationPage"
const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const registrationPage = new RegistratioPage

describe('registration-case', () => {
it('Successful-Registration', () => {
    loginPage.accessLoginPage()
});
});

it('Fadil-Registration', () => {
    loginPage.accessLoginPage()
});



