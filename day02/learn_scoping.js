// VAR, LET, CONST
//
// var   → Function Scoped
// let   → Block Scoped
// const → Block Scoped

function learnScoping() {

    const num = 20;

    if (true) {
        // Reassignment is not allowed for const
        num = 30;
    }

    console.log(num);
}

learnScoping();