import { loginPage } from "./pages/login_page.cy";

const login_Page = new loginPage

function getRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `user${randomString}@mailinator.com`;
  }

  function getRandomFullName() {
    const firstNames = ["Harry", "Ron", "Charlie", "Luna", "Ginny", "Cersie", "Walter"];
    const lastNames = ["Lovegood", "Malfoy", "Weasley", "Potter", "White", "Lannister"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
  }
  
  for (let i = 0; i < 50; i++) {
    const randomFullName = getRandomFullName();
    const randomEmail = getRandomEmail();

it ('should successfully create a new account', () => {

    cy.visit('/')

    login_Page.createNewAccountButton()

    cy.wait(2000)

    login_Page.newAccountFullName(randomFullName)
    login_Page.newAccountEmail(randomEmail)
    login_Page.newAccountPassword()
    login_Page.newAccountConfirmPassword()
    login_Page.newAccountSubmit()

    cy.wait(4000)

    console.log('User Created')

})
}
  