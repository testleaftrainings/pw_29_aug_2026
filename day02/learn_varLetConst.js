// VARIABLE DECLARATION
// JavaScript provides three keywords to declare variables:
// var, let, and const


// ==================================================
// var
// ==================================================
// Redeclaration - Possible
// Reassignment - Possible

var courseName = "Playwright";

var courseName = "Playwright Automation";

console.log(courseName);


// ==================================================
// let
// ==================================================
// Redeclaration - Not Possible in the same scope
// Reassignment - Possible

let age = 20;

age = 30;

console.log(age);


// ==================================================
// const
// ==================================================
// Redeclaration - Not Possible
// Reassignment - Not Possible

const password = 123;

// password = 12345; // TypeError: Assignment to constant variable.

console.log(password);


// ==================================================
// SCOPE
// ==================================================
// var       → Function Scoped
// let       → Block Scoped
// const     → Block Scoped