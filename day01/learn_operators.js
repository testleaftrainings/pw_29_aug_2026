// JavaScript Operators

// Operators - Symbols / Signs
// Example: + - * /

// Assignment Operator
// Used to assign a value to a variable.
// =

var num = 7;
var a = 8;
var b = 3;


// Arithmetic Operators

// Addition
console.log(a + b);

// Subtraction
console.log(a - b);

// Multiplication
console.log(a * b);

// Power
console.log(a ** b);

// Division
console.log(a / b);

// Remainder
console.log(a % b);

// To get the whole number
console.log(Math.floor(a / b));


// Comparison Operators

// Used to compare two values.
// Returns true if the comparison is correct.
// Otherwise, returns false.

var c = 10;
var d = 12;

// Less Than <
console.log(c < d); // 10 < 12

// Greater Than >
console.log(c > d); // 10 > 12

// Less Than or Equal To <=
console.log(c <= d); // 10 < 12 OR 10 == 12

// Greater Than or Equal To >=
console.log(c >= d); // 10 > 12 OR 10 == 12


// Equality Operators

// =   Assignment
// ==  Loose Equality
// === Strict Equality

// == compares values after type conversion if required.
// === compares both value and data type.

console.log("---------------------------");

var p = 1;
var q = true;

// Strict Equality
console.log(p == q); // true
console.log(p === q); // false

// Not Equal To
console.log(p != q); // true


// Increment and Decrement Operators

// Increment - Increases the value by 1.

// Post-Increment
// variable++

var s = 7;

console.log(s++); // 7
console.log(s);   // 8

// Pre-Increment
// ++variable

console.log(++s); // 9


// Decrement - Decreases the value by 1.

// Post-Decrement
// variable--

console.log(s--); // 9
console.log(s);   // 8

// Pre-Decrement
// --variable

console.log(--s); // 7


// Logical Operators
// Used to combine or reverse conditions.
// AND  &&
// OR   ||
// NOT  !

var u = 10;
var x = 15;


// AND
// Returns true only when both conditions are true.
console.log(u < x && u == x); // true && false → false


// OR
// Returns true when at least one condition is true.
console.log(u < x || u == x); // true || false → true


// NOT
// Reverses the result of a condition.
console.log(!(u < x)); // !(true) → false