export class storage {

    // storage_personal_button = '.border-top-0 > :nth-child(1) > .p-4'
    // storage_shared_button = cy.contains('Shared')
    upload_folder_button = '.menu.py-5 > :nth-child(1) > .menu-link'
    new_folder_textbox = '#kt_create_folder_modal > .modal-dialog > .modal-content > .modal-body > .position-relative > .form-control'
    new_folder_submit_button = '#kt_create_folder_modal > .modal-dialog > .modal-content > .modal-body > .row > .btn'
    clickPersonal(){
        cy.contains('Personal').click()
    }
    
    clickShared(){
        cy.contains('Shared').click()
    }

    clickUploadFolder(){
        cy.get(this.upload_folder_button).click({waitForAnimations: false})
    }

    newFolderName(foldername){
        cy.get(this.new_folder_textbox).type(foldername)
    }

    newFolderSubmit(){
        cy.get(this.new_folder_submit_button).click()
    }

}