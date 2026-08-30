// Conditional Statement - if...else if...else
// Example: Check whether a number is Positive, Negative, or Zero

function findNumber() {

    var inputNumber = 0;

    // Check whether the number is positive
    if (inputNumber > 0) {
        console.log("The number is positive");
    }

    // Check whether the number is negative
    else if (inputNumber < 0) {
        console.log("The number is negative");
    }

    // If both conditions are false, the number is zero
    else {
        console.log("The number is Zero");
    }
}

findNumber();