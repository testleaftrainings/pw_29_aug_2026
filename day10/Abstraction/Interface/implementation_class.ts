// Create a class that implements the BrowserAction interface
class BrowserImplementation implements BrowserAction {

    // Implement the clickAction method defined in the interface
    clickAction(): void {

        // Print a message after clicking the element
        console.log("Clicked");
    }

    // Implement the fillValue method defined in the interface
    fillValue(): string {

        // Print a message after entering the username
        console.log("Username Entered");

        // Return the username value
        return "Demosalesmanager";
    }
}

// Create an object of the BrowserImplementation class
let obj = new BrowserImplementation();

// Call the clickAction method using the object
obj.clickAction();

// Call the fillValue method using the object
obj.fillValue();