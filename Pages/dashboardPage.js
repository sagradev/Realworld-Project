class DashboardPage {

    selectorsList(){
        const selectors = {
            dashboardGrid:"[data-test='sidenav']",
        }

        return selectors

    }

    checkDashboardPage(){
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default DashboardPage