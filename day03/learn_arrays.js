
// ==================================================
// JavaScript Arrays
// ==================================================

// Arrays are Non-Primitive data types.
// An array can store multiple values in a single variable.

// Index:   0   1   2   3    4
let scores = [70, 80, 30, 50, 100];

console.log(scores);


// ==================================================
// Accessing Array Elements
// ==================================================

// Retrieve a single value using its index
console.log(scores[0]); // 70
console.log(scores[4]); // 100

// Accessing an index that does not exist returns undefined
console.log(scores[5]); // undefined


// ==================================================
// Array Length
// ==================================================

// length represents the total number of elements
let numberOfValues = scores.length;

console.log(numberOfValues); // 5

// Last index = length - 1
// length = 5
// Last index = 4


// ==================================================
// Retrieving All Array Elements
// ==================================================

// Using for loop to retrieve all elements

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}


// ==================================================
// push()
// ==================================================

// Adds one or more elements to the end of the array

scores.push(60, 150);

console.log(scores);


// ==================================================
// unshift()
// ==================================================

// Adds one or more elements to the beginning of the array

scores.unshift(200, 10);

console.log(scores);


// ==================================================
// pop()
// ==================================================

// Removes the last element from the array

scores.pop();

console.log(scores);


// ==================================================
// shift()
// ==================================================

// Removes the first element from the array

scores.shift();

console.log(scores);


// ==================================================
// slice()
// ==================================================

// Extracts a portion of an array
// start index → included
// end index   → excluded
// Does NOT modify the original array

let slicedArray = scores.slice(2, 5);

console.log(slicedArray);
console.log(scores);


// ==================================================
// splice()
// ==================================================

// Removes elements from the array
// start index  → 2
// delete count → 7
// Modifies the original array

let splicedArray = scores.splice(2, 7);

console.log(splicedArray);
console.log(scores);


// ==================================================
// sort() - Strings
// ==================================================

let course = ["Playwright", "Selenium", "GenAI"];

course.sort();

console.log(course);


// ==================================================
// sort() - Numbers
// ==================================================

let marks = [20, 30, 70, 35, 15, 33, 74];

// Ascending order
marks.sort((a, b) => a - b);

console.log(marks);

// Descending order
marks.sort((a, b) => b - a);

console.log(marks);
