import { loginPage } from "./pages/login_page.cy";
import { homePage } from "./pages/home_page.cy";
import { storage } from "./pages/storage_page.cy";

const login_Page = new loginPage()
const home_Page = new homePage()
const storage_Page = new storage()

function getRandomFolderName() {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${randomString}`;
  }

it('should create multiple folders', () => {

    cy.visit('/')

    login_Page.enterUsername('moody@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()

    for (let i=0; i<50; i++) {
    
    const randomFolderName = getRandomFolderName();

    home_Page.storagePage({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})
    cy.contains('Upload').click({force: true}, {waitForAnimations: false}, {animationDistanceThreshold: 20})
    storage_Page.clickUploadFolder()
    storage_Page.newFolderName(randomFolderName)
    storage_Page.newFolderSubmit()
    }

})

