// Create and export an abstract class
export abstract class AbstractBrowserImplementation {

    // Declare an abstract method for entering the username
    abstract enterUsername(): string;

    // Declare an abstract method for entering the password
    abstract enterPassword(): string;

    // Create a concrete method for clicking the Login button
    clickLogin(): void {

        // Add the common Login button implementation here
    }
}

// Cannot create an object directly from an abstract class
// let obje = new AbstractBrowserImplementation();