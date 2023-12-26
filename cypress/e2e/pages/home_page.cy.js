
export class homePage {

    addcontacts_button = 'Add Contact'
    searchcontacts_textbox = '#kt_modal_invite_friends > .modal-dialog > .modal-content > .modal-body > .position-relative > #friendEmailField'
    send_request = '.form-check > :nth-child(1) > :nth-child(1) > .card'
    send_message = '.form-check > :nth-child(1) > :nth-child(1)'

    addContacts(){
    cy.contains(this.addcontacts_button).click({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})
    }
    
    searchContacts(searchcontacts){
    cy.get(this.searchcontacts_textbox).type(searchcontacts)
    }

    sendRequest(){
    cy.get(this.send_request).click({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})
    }

    messageUserFromSearch(){
    cy.get(this.send_message).click()
    }

    contactsPage(){

        cy.contains('Contacts').click({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})
    }

    storagePage(){
    cy.get('.overflow-y-auto > :nth-child(7) > :nth-child(3)').click()

    }

}