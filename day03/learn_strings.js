
// ==================================================
// JavaScript Strings
// ==================================================

// Declare a String
// 1. String Literal
// 2. String Object


// ==================================================
// String Object
// ==================================================

let course = new String("Playwright");

console.log(typeof course); // object


// ==================================================
// String Literal
// ==================================================

let courseName = "Playwright";

console.log(typeof courseName); // string


// ==================================================
// == vs ===
// ==================================================

// ==  → Compares only the value
// === → Compares both value and data type

console.log(course == courseName);  // true
console.log(course === courseName); // false


// ==================================================
// String Concatenation
// ==================================================

let firstName = "Vineeth";
let lastName = "Rajendran";

// Using + operator to concatenate strings

console.log("My firstname is " + firstName + " and my lastname is " + lastName);


// ==================================================
// Template Literal
// ==================================================

// Template literals are created using backticks (`).
// Variables can be directly embedded using ${variable}.

console.log(`My firstname is ${firstName} and my lastname is ${lastName}`);


// ==================================================
// String length
// ==================================================

let batch = "PW August";

console.log(batch.length);


// ==================================================
// charAt()
// ==================================================

// Retrieves a character from a string using its index.

// Index:  0 1 2 3 4 5 6 7
// String: P W   A u g u s t

console.log(batch.charAt(1)); // W


// ==================================================
// indexOf()
// ==================================================

// Returns the index of the first occurrence of a character or substring.

console.log(batch.indexOf("u")); // 4


// ==================================================
// substring()
// ==================================================

// Extracts a portion of a string.
// start index → included
// end index   → excluded

let username = "rajeshkumar@hotmail.com";

let name = username.substring(0, 6);

console.log(name); // rajesh


// ==================================================
// slice()
// ==================================================

// Extracts a portion of a string.
// start index → included
// end index   → excluded
// Negative indexes can be used with slice().

let croppedString = username.slice(0, -12);

console.log(croppedString);


// ==================================================
// split()
// ==================================================

// Splits a string into an array based on the given separator.

let batchName = "Playwright August 2026";

let splitStrings = batchName.split(" ");

console.log(splitStrings);

// Output:
// ["Playwright", "August", "2026"]

