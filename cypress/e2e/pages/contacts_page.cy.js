export class contactsPage {

    // all_dropdown_button = '.flex-stack > .w-150px'

    dropDownList() {
       // cy.contains('all').select('Pending')
       cy.get('.flex-stack > .w-150px').click()
    }
    dropDownList_selectPending() {    
        cy.get('.dropdown > :nth-child(3) > a').click()
    }
}

