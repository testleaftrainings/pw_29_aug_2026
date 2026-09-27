// Class syntax
class LoginPage1 {

    // Variable declared inside the class
    username: string = "Demo";

    // Variable declared inside the class
    password: string = "crm";

    // Method to enter the username
    enterUsername(user: string) {

        // Print the local variable value
        console.log("The local variable is " + user);

        // Print the class variable value using this keyword
        console.log("The class variable is " + this.username);

        // Print successful username message
        console.log("Username entered successfully");
    }

    // Method to enter the password
    enterPassword(pass: string) {

        // Print the local variable value
        console.log(pass);

        // Print the class variable value using this keyword
        console.log(this.password);

        // Print successful password message
        console.log("Password entered successfully");
    }

    // Method to click the Login button
    clickLogin() {

        // Print successful Login message
        console.log("Login button clicked successfully");
    }
}

// Create an object of the LoginPage1 class
let loginPageOptions = new LoginPage1();

// Call the enterUsername method using the object
loginPageOptions.enterUsername("Demosalesmanager");

// Call the enterPassword method using the object
loginPageOptions.enterPassword("crmsfa");

// Call the clickLogin method using the object
loginPageOptions.clickLogin();