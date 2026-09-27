// Create an interface to define browser actions
interface BrowserAction {

    // Declare a method for clicking a button
    clickAction(): void;

    // Declare a method for entering text into a field
    fillValue(): string;
}

// Cannot create an object directly from an interface
// let ob = new BrowserAction();

