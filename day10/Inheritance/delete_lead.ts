// Import the CreateLead class from the create_lead file
import { CreateLead } from "./create_lead";

// Create the DeleteLead class by extending the CreateLead class
class DeleteLead extends CreateLead {

    // Create a method to perform the Delete Lead action
    clickDeleteLead() {

        // Print a message after deleting the lead
        console.log("Lead Deleted");
    }
}

// Create an object of the DeleteLead class
let deleteOptions = new DeleteLead();

// Call the method inherited from the LoginPage class
deleteOptions.enterCredentials();

// Call the method inherited from the LoginPage class
deleteOptions.clickLoginButton();

// Call the method inherited from the CreateLead class
deleteOptions.clickCreateLead();

// Call the method available in the DeleteLead class
deleteOptions.clickDeleteLead();