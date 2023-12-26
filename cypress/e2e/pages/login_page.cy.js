export class loginPage {

    username_textbox = ':nth-child(4) > .form-control'
    password_textbox = ':nth-child(5) > .form-control'
    signin_button = '#kt_sign_in_submit'
    forgetpassword_button = '.d-flex > .primary'
    forgetpassword_textbox = '.form-control'
    forgetpassword_submit_button = '#kt_password_reset_submit'
    forgetpassword_cancel_button = '.btn-hivephiv-cancel'
    newaccount_fullname_textbox = '#kt_login_signup_form > :nth-child(2) > .form-control'
    
    enterUsername(username){
    cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
    cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
    cy.get(this.signin_button).click()
    }

    rememberMe(){
    cy.get('.form-check-input').check()
    }

    forgetPassword(useremail){
    cy.get(this.forgetpassword_button).click()
    cy.wait(2000)
    cy.get(this.forgetpassword_textbox).type(useremail)
    cy.get(this.forgetpassword_submit_button).click()
    }

    forgetPasswordCancel(){
        cy.get(this.forgetpassword_button).click()
        cy.get(this.forgetpassword_cancel_button).click()       
        }

    createNewAccountButton(){
        cy.contains('Create').click()
    }

    newAccountFullName(fullname){
        cy.get(this.newaccount_fullname_textbox).type(fullname)
    }

    newAccountEmail(newaccemail){
    cy.get('[type="email"]').type(newaccemail)
    }

    newAccountPassword(){
        cy.get('.mb-3 > .form-control').type('Password@123')
    }

    newAccountConfirmPassword(){
        cy.get(':nth-child(5) > .form-control').type('Password@123')
    }

    newAccountSubmit(){
        cy.get('.form-check-input').check()
        cy.get('#kt_sign_up_submit').click()
    }

}