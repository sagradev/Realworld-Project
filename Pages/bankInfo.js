class BankInfo {

    selectorsList(){
        const selectors = {
            bankName:"[name='bankName']",
            rountingNumber: "[name='routingNumber']",
            accountNumber:"[name='accountNumber']"

        }

        return selectors

    }

    checkDashboardPage(){
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default BankInfo