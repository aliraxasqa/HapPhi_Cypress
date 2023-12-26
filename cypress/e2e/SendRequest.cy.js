import { loginPage } from "./pages/login_page.cy"
import { homePage } from "./pages/home_page.cy"

const login_Page = new loginPage()
const home_Page = new homePage()

it ('Happi Send Request', () => {

  cy.visit('/')

  login_Page.enterUsername('harry@mailinator.com')
  
  login_Page.enterPassword('Password@123')

  login_Page.clickLogin()

  cy.wait(9000)

  home_Page.addContacts()

  cy.wait(3000)

  home_Page.searchContacts('pau')

  cy.wait(3000)

  home_Page.sendRequest()

})