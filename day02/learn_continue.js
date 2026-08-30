// CONTINUE STATEMENT
//
// The continue statement skips the current iteration
// and continues with the next iteration of the loop.
//
// Example:
// Skip the number 3 and print the remaining numbers.

function learnContinue() {

    for (let i = 1; i <= 5; i++) {

        if (i === 3) {
            continue;
        }

        console.log(i);
    }
}

learnContinue();