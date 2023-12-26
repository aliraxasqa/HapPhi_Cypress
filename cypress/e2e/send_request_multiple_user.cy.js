import { loginPage } from "./pages/login_page.cy";
import { homePage } from "./pages/home_page.cy";

const login_Page = new loginPage();
const home_Page = new homePage();

// Define an array of users
const users = [
  { username: 'bellatrix@mailinator.com', password: 'Password@123' },
  { username: 'moody@mailinator.com', password: 'Password@123' },
  { username: 'ginny@mailinator.com', password: 'Password@123' },
  { username: 'sirius@mailinator.com', password: 'Password@123' },
];

describe("Happhi Send Request", () => {
  users.forEach((user, index) => {
    it(`User ${index + 1} sends a request`, () => {
      
      cy.visit('/');

      login_Page.enterUsername(user.username);
      login_Page.enterPassword(user.password);
      login_Page.clickLogin();

      cy.wait(12000);

      home_Page.addContacts();

      cy.wait(3000);
      
      home_Page.searchContacts('dumbl');
      
      cy.wait(5000);
      
      home_Page.sendRequest();

      cy.wait(2000)

      // You can add assertions here to verify that the request was sent successfully if needed
    });
  });
});