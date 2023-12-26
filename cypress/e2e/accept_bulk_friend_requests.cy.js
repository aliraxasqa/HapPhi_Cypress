import { loginPage } from "./pages/login_page.cy";
import { homePage } from "./pages/home_page.cy";
import { contactsPage } from "./pages/contacts_page.cy";

const login_Page = new loginPage()
const home_Page = new homePage()
const contacts_page = new contactsPage()

// // accept_friendrequest = ':nth-child(1) > .text-end > .d-flex > .btn-outline-primary'

// function acceptFriendRequests() {

//     cy.get(':nth-child(1) > .text-end > .d-flex > .btn-outline-primary').then((buttons) => {
//       if (buttons != null &&buttons.length > 0) {
   
//         cy.get(':nth-child(1) > .text-end > .d-flex > .btn-outline-primary:first').click({force: true});
  
//         cy.wait(2000);
  
//         // Recursively call the function to continue accepting requests
//         acceptFriendRequests();
//       } else {
        
//         cy.log("No requests found!");
//       //  cy.get('body').should('contain', 'No more friend requests to accept.'); // To add any assertion
//       }
//     });
//   }

//   it ('accept all friend requests', () => {

//     cy.visit('/')
    
//     login_Page.enterUsername('longbottom@mailinator.com')
//     login_Page.enterPassword('Password@123')
//     login_Page.clickLogin()

//     cy.wait(12000)

//     home_Page.contactsPage()

//     cy.wait(25000)
    
//     contacts_page.dropDownList()
//     contacts_page.dropDownList_selectPending()

//     cy.wait(3000)

//     acceptFriendRequests();  
//   })

function acceptFriendRequests(selector) {
    // Check if there are any "accept" buttons
    cy.get(selector).then((buttons) => {
        cy.log(buttons, 'buttons lists');
      if (bbuttons != null &&buttons.length > 0) {
        // Click the first "accept" button
        cy.get(selector + ':first').click({ force: true });
  
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
  
  it ('accept all friend requests', () => {
    cy.visit('/')
    
    login_Page.enterUsername('longbottom@mailinator.com')
    login_Page.enterPassword('Password@123')
    login_Page.clickLogin()
  
    cy.wait(12000)
  
    home_Page.contactsPage()
  
    cy.wait(25000)
    
    contacts_page.dropDownList()
    contacts_page.dropDownList_selectPending()
  
    cy.wait(3000)
  
    // Pass the selector as a parameter
    acceptFriendRequests(':nth-child(1) > .text-end > .d-flex > .btn-outline-primary');  
  })
  