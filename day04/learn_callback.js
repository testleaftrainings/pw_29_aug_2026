// Callback Function Example

// login() is the main function.
// call1 and call2 are callback functions.
function login(call1, call2) {

    console.log("Login successful"); // Executed first

    call1(); // Calls createAccount() - Executed second

    call2(); // Calls createLead() - Executed third
}


// Function to create a lead
function createLead() {

    console.log("Lead created");
}


// Function to create an account
function createAccount() {

    console.log("Account created");
}


// Passing functions as arguments to login()
login(createAccount, createLead);


// This would also work if login() accepts only one callback:
// login(createLead);