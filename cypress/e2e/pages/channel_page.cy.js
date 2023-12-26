export class channelPage {

    first_Channel = ':nth-child(1) > :nth-child(1) > .link-box > .d-flex > #users'
    createChannelButton(){
        cy.get(':nth-child(5) > span.p-0 > .flex-stack > .text-white > .svg-icon').click({force: true})
    }

    newChannelName(channelName){
        cy.get('#kt_modal_create_channel_scroll > .mb-3 > .i-in-m').type(channelName, {force: true})
    }    

    newChannelDescription(channelDescription){
        cy.get('.mb-15 > .form-control').type(channelDescription)
    }

    privateChannel(){
        cy.get('#kt_modal_create_channel_private').check()
    }

    submitNewChannel(){
        cy.get('form > .modal-footer > .button-in-m').click({force: true})
    }

    openChanneList(){
        cy.get(':nth-child(5) > span.p-0 > .flex-stack > .d-flex > .fs-7').click()
    }

    channelSearchButton(channelName){
        cy.get(':nth-child(5) > .collapseSection > .my-2 > #kt_header_search > .w-100 > .form-control').type(channelName)
    }

    click1stSearchChannel(){
        cy.get(this.first_Channel).click()
    }

}