import { loginPage } from "./pages/login_page.cy";

const login_Page = new loginPage

const userData = [
    { fullName: 'Tom Riddle', email: 'voldemort@mailinator.com' },
    { fullName: 'Dobby Elf', email: 'dobby@mailinator.com' },
    { fullName: 'Victor', email: 'victor@mailinator.com' },

  ];

userData.forEach((user) => {

it ('should successfully create a new account', () => {

    cy.visit('/')

    login_Page.createNewAccountButton()

    cy.wait(2000)

    login_Page.newAccountFullName(user.fullName)
    login_Page.newAccountEmail(user.email)
    login_Page.newAccountPassword()
    login_Page.newAccountConfirmPassword()
    login_Page.newAccountSubmit()

    cy.wait(3000)

    console.log('User Created')
})
})

