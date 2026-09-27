// Import the parent class from the launch_browser file
import { LaunchBrowser } from "./launch_browser";

// Create the child class by extending the parent class
class LaunchChrome extends LaunchBrowser {

    // Override the launch method of the parent class
    launch() {

        // Call the parent class launch method using super
        super.launch();

        // Print a message specific to Chrome browser
        // console.log("Code for Chrome Browser");
    }
}

// Create an object of the child class
let obj = new LaunchChrome();

// Call the overridden launch method using the child object
obj.launch();