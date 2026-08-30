// FOR LOOP
// Used to execute a block of code repeatedly.

// Syntax:
// for (initialization; condition; update) {
//     // code to be executed
// }

// Example 1: Print numbers from 5 to 10
//
// Starting point = 5
// Ending point   = 10
// Update         = Increment (++)

function learnForLoop() {

    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }

    // Example 2: Print numbers from 5 to 1
    //
    // Starting point = 5
    // Ending point   = 1
    // Update         = Decrement (--)

    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}

learnForLoop();