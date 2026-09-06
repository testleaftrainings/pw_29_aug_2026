// ==========================================
// Function Expression vs Arrow Function
// ==========================================

// --------------------------------------------------
// 1. Earlier Way to Express a Function
//    Function Expression
// --------------------------------------------------

// A function is assigned to a variable using the
// function keyword.

let loginDetails1 = function login() {
console.log("Login executed successfully");
};

// Calling the function
loginDetails1();

// --------------------------------------------------
// 2. Modern Way to Express a Function
//    Arrow Function
// --------------------------------------------------

// Arrow function provides a shorter syntax for
// writing a function.

let loginDetails2 = () => {
console.log("Login executed successfully");
};

// Calling the arrow function
loginDetails2();
