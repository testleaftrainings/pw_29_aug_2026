// BREAK STATEMENT
//
// The break statement immediately stops the loop
// and comes out of the loop.
//
// Example:
// Stop the loop when the value reaches 3.

function learnBreak() {

    for (let i = 1; i <= 5; i++) {

        if (i === 3) {
            break;
        }

        console.log(i);
    }
}

learnBreak();