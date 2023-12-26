import { loginPage } from "./pages/login_page.cy";
import { homePage } from "./pages/home_page.cy";
import { storage } from "./pages/storage_page.cy";

const login_Page = new loginPage()
const home_Page = new homePage()
const storage_Page = new storage()

it('should create new folder and upload file in that Folder', () => {

    cy.visit('/')

    login_Page.enterUsername('dumbledor@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()

    cy.wait(25000)

    home_Page.storagePage({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})

    cy.wait(5000)

    cy.contains('Upload').click()
    cy.get('.menu.py-5 > :nth-child(1) > .menu-link').click({waitForAnimations: false})
    cy.get('#kt_create_folder_modal > .modal-dialog > .modal-content > .modal-body > .position-relative > .form-control').type('800 Aug')
    cy.get('#kt_create_folder_modal > .modal-dialog > .modal-content > .modal-body > .row > .btn').click()

    cy.wait(5000)

    cy.contains('800 Aug').click()

    cy.wait(2000)

    cy.contains('Upload').click()

    cy.get('.menu.py-5 > :nth-child(2) > .menu-link').click({waitForAnimations: false})

    cy.wait()

    cy.contains('Drop files').attachFile('Fish1.jpeg')

    cy.wait(4000)

    cy.get('#kt_modal_upload_file_dropzone').click()

    console.log('Passed')

})