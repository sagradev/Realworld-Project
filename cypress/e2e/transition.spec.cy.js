import BankInfo from "../../Pages/bankInfo";
import LoginPage from "../../Pages/loginPage"
import userData from '../fixtures/user-data.json'
const Chance = require('chance');

const chance = new Chance();
const bankInfo = new BankInfo
const loginPage = new LoginPage

describe('Send money with sufficient balance', () => {
  it('should send money successfully', () => {
    loginPage.accessLoginPage()
    loginPage.loginCase(userData.userSuccess.username, userData.userSuccess.password)
    bankInfo.createBankAccount('teste','123456789','123456789')
    bankInfo.trasition('0','teste')
  });
});


it('error sending money without sufficient balance', () => {
    loginPage.accessLoginPage()
    loginPage.loginCase(userData.userSuccess.username, userData.userSuccess.password)
    bankInfo.createBankAccount('teste','123456789','123456789')
    bankInfo.trasition('10000','teste')
});
