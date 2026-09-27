// Import the abstract class from the learn_abstract_class file
import { AbstractBrowserImplementation } from "./learn_abstract_class";

// Create a child class by extending the abstract class
class AbstractImplementation extends AbstractBrowserImplementation {

    // Implement the abstract enterUsername method
    enterUsername(): string {

        // Return the username value
        return "Demo";
    }

    // Implement the abstract enterPassword method
    enterPassword(): string {

        // Return the password value
        return "crm";
    }
}