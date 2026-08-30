// SWITCH CASE
// Used to execute different blocks of code based on a condition.

// Example: Check whether a number is Positive, Negative, or Zero

function learnSwitchCase() {

    var inputNumber = -20;

    switch (true) {

        case inputNumber > 0:
            console.log("The number is positive");
            break;

        case inputNumber < 0:
            console.log("The number is negative");
            break;

        case inputNumber === 0:
            console.log("The number is zero");
            break;

        default:
            console.log("Not a valid number");
    }
}

learnSwitchCase();