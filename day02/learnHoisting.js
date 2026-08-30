// HOISTING
//
// Hoisting is the JavaScript behavior where declarations
// are processed during the creation phase before execution.
//
// var, let, const, and function declarations are hoisted.
//
// var      → Hoisted and initialized with undefined
// let      → Hoisted but remains in the Temporal Dead Zone (TDZ)
// const    → Hoisted but remains in the Temporal Dead Zone (TDZ)
// function → Function declaration is fully hoisted


// ==================================================
// TEMPORAL DEAD ZONE (TDZ)
// ==================================================
//
// Definition:
// The Temporal Dead Zone is the period between the start
// of a block and the point where a let or const variable
// is declared.
//
// During this period, the variable cannot be accessed.
//
// Accessing a let or const variable inside the TDZ
// results in a ReferenceError.


// ==================================================
// let - Temporal Dead Zone (TDZ)
// ==================================================

/*
console.log(num);

// ReferenceError:
// Cannot access 'num' before initialization
*/

console.log(num);
var num = 10;



// ==================================================
// Function Hoisting
// ==================================================
//
// Function declarations are fully hoisted.
// Therefore, the function can be called before its declaration.

hoistedFunction();

function hoistedFunction() {
    console.log("hoistedFunction");
}