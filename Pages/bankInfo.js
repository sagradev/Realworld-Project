class BankInfo {
    selectorsList() {
        return {
            bankName: "[name='bankName']",
            routingNumber: "[name='routingNumber']", 
            accountNumber: "[name='accountNumber']",
            nextButton: "[data-test='user-onboarding-next']",
            saveButton: "[data-test='bankaccount-submit']",
            newTrasitionButton: "[href='/transaction/new']",
            person: "[src='https://avatars.dicebear.com/api/human/uBmeaz5pX.svg']",
            amount: "[name='amount']",
            note: "[placeholder='Add a note']",
            payment: "[data-test='transaction-create-submit-payment']"
        };
    }

    createBankAccount(name, routingNumber, accountNumber) {
    cy.get(this.selectorsList().nextButton).click();
    cy.get(this.selectorsList().bankName).type(name);
    cy.get(this.selectorsList().routingNumber).type(routingNumber); 
    cy.get(this.selectorsList().accountNumber).type(accountNumber);
    cy.get(this.selectorsList().saveButton).click();
    cy.get(this.selectorsList().nextButton).click();
    }

    trasition(money, note){
        cy.get(this.selectorsList().newTrasitionButton).click();
        cy.get(this.selectorsList().person).click();
        cy.get(this.selectorsList().amount).type(money);
        cy.get(this.selectorsList().note).type(note);
        cy.get(this.selectorsList().payment).click();
        cy.get('body').should('contain', 'Transaction Submitted!')
    }
}

export default BankInfo;
