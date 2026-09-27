// Import the CreateLead class from the create_lead file
import { CreateLead } from "./create_lead";

// Create the EditLead class by extending the CreateLead class
class EditLead extends CreateLead {

    // Create a method to perform the Edit Lead action
    clickEditLead() {

        // Print a message after clicking Edit Lead
        console.log("clickEditLead");
    }
}

// Create an object of the EditLead class
let editOptions = new EditLead();

// Call the method inherited from the LoginPage class
editOptions.enterCredentials();

// Call the method inherited from the LoginPage class
editOptions.clickLoginButton();

// Call the method inherited from the CreateLead class
editOptions.clickCreateLead();

// Call the method available in the EditLead class
editOptions.clickEditLead();