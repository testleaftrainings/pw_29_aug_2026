// Import the LoginPage class from the login_page file
import { LoginPage } from "./login_page";

// Create the CreateLead class by extending the LoginPage class
export class CreateLead extends LoginPage {

    // Create a method to perform the Create Lead action
    clickCreateLead() {

        // Print a message after creating the lead
        console.log("Lead created");
    }
}

// Create an object of the CreateLead class
let createLeadOptions = new CreateLead();

// Call the method inherited from the LoginPage class
createLeadOptions.enterCredentials();

// Call the method inherited from the LoginPage class
createLeadOptions.clickLoginButton();

// Call the method available in the CreateLead class
createLeadOptions.clickCreateLead();