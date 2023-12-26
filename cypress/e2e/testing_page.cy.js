import { loginPage } from "./pages/login_page.cy";
import { homePage } from "./pages/home_page.cy";
import { contactsPage } from "./pages/contacts_page.cy";

const login_Page = new loginPage();
const home_Page = new homePage();
const contacts_page = new contactsPage();

const users = [
  { username: 'bellatrix@mailinator.com', password: 'Password@123' },
  { username: 'moody@mailinator.com', password: 'Password@123' },
  { username: 'ginny@mailinator.com', password: 'Password@123' },
  { username: 'sirius@mailinator.com', password: 'Password@123' },
  { username: 'jamesz@mailinator.com', password: 'Password@123' },
  
];
function acceptFriendRequests(selector) {
    // Check if there are any "accept" buttons
    cy.get(selector).then((buttons) => {
        cy.log(buttons, 'buttons lists');
      if (buttons != null &&buttons.length > 0) {
        // Click the first "accept" button
        
  
        cy.wait(2000);
  
        // Recursively call the function to continue accepting requests
        acceptFriendRequests(selector);
      } else {
        // If there are no more "accept" buttons, log a message
        cy.log("No more friend requests to accept.");
        // You can also add an assertion here if you want to ensure this message is displayed
      }
    });
  }

describe("Happhi Send Request", () => {
  users.forEach((user, index) => {
    it(`User ${index + 1} sends a request`, () => {
      cy.visit('/');

      login_Page.enterUsername(user.username);
      login_Page.enterPassword(user.password);
      login_Page.clickLogin();

      cy.wait(12000);

      home_Page.contactsPage()
  
    cy.wait(25000)
    
    contacts_page.dropDownList()
    contacts_page.dropDownList_selectPending()
  
    cy.wait(3000)
  
    // Pass the selector as a parameter
    cy.get(':nth-child(1) > .text-end > .d-flex > .btn-outline-primary').click()
    });
  });
});