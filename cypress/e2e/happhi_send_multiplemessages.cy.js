import { loginPage } from "./pages/login_page.cy"
import { homePage } from "./pages/home_page.cy"

const login_Page = new loginPage()
const home_Page = new homePage()

it('Happhi Contacts', () => {

    cy.visit('/')

    login_Page.enterUsername('dumbledor@mailinator.com')

    login_Page.enterPassword('Password@123')

    login_Page.clickLogin()

    // login_Page.rememberMe()

    cy.wait(10000)

    home_Page.addContacts()

    cy.wait(1000)

    home_Page.searchContacts('harry')

    cy.wait(1000)

    home_Page.messageUserFromSearch()

    cy.wait(5000)

    for (let i = 0; i < 10; i++) {
    
              cy.get("#messageBox").type(`Hi`)
              // ${i + 1}
              cy.contains('Send').click()
        
              cy.wait(10)
            }

})