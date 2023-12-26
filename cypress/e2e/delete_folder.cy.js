import { loginPage } from "./pages/login_page.cy";
import { homePage } from "./pages/home_page.cy";
import { storage } from "./pages/storage_page.cy";

const login_Page = new loginPage()
const home_Page = new homePage()
const storage_Page = new storage()

it('should create multiple folders', () => {

    cy.visit('/')

    login_Page.enterUsername('moody@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()

    home_Page.storagePage({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})
    cy.get(':nth-child(1) > .text-end > .d-flex > .btn > .svg-icon > svg').select('Delete')
    }

)