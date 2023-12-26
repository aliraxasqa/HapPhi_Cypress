

export class broadcastPage {

    createBroadcastButton (){
        
        cy.xpath('//*[@id="#kt_app_sidebar_menu"]/div[1]/div[1]/span/div/a/span/svg').click();

        // cy.get(':nth-child(2) > .p-0 > .flex-stack > .text-white').click()
    }

    newBroadcastName(broadcastName){
        cy.get('.modal-body > :nth-child(3) > .form-control').type(broadcastName)
    }    

    addMembers(){
        cy.get("#37").check() 
    }

    submitNewBroadcast(){
        cy.get('form > .modal-footer > .btn-lg').click()
}
}