
// ==================================================
// JavaScript Function - return
// ==================================================

// Variables declared outside the function
// let a = 10;
// let b = 20;
// let c = a + b;


// ==================================================
// Function without return
// ==================================================

function add() {

    let a = 10;
    let b = 20;

    let c = a + b; // number

     return c;
    // return "500";
    // return "The addition of two numbers";
}

console.log(add() + 100);


// ==================================================
// Important:
// ==================================================

// If a function does not return a value,
// JavaScript returns undefined by default.
//
// add() → undefined
//
// undefined + 100 → NaN

