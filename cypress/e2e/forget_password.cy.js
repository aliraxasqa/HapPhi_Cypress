import { loginPage } from "./pages/login_page.cy";
import { mailinatorEmailFetch } from "./pages/mailinator_link_fetch.cy";

const login_Page = new loginPage();
const email_Fetch = new mailinatorEmailFetch();

// describe("Forget Password Test", () => {
//   it("should reset password successfully", () => {
    
//     cy.visit("https://hogwarts.appuix.com/");

//     login_Page.forgetPassword("paul@mailinator.com");

//     cy.wait(2000);

//     cy.visit("https://www.mailinator.com/");

//     email_Fetch.searchEmail("paul");
//     email_Fetch.mailinatorNavigation();

//   });
// });

describe("Forget Password Test", () => {
    it("should reset password successfully", () => {
      // Visit the login page
      cy.visit("/");
  
      // Initiate password reset
      login_Page.forgetPassword("paul@mailinator.com");
  
      cy.wait(2000);

        cy.visit("https://www.mailinator.com/");
  
      cy.origin("https://www.mailinator.com", () => {

   
        cypress.require("./pages/mailinator_link_fetch.cy");
        email_Fetch.searchEmail("paul");
        email_Fetch.mailinatorNavigation();
  
      });
  
    });
  });