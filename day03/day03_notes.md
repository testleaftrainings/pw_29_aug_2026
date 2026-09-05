# JavaScript - Important Concept Definitions

## 1. JavaScript

**Definition:**  
JavaScript is a high-level, dynamically typed programming language used to make web applications interactive and is also widely used for automation, backend development, and other applications.

---

## 2. Data Type

**Definition:**  
A data type defines the kind of value a variable can hold.

```javascript
let name = "Vineeth"; // string
let age = 25;         // number
let isActive = true;  // boolean
```

---

## 3. Primitive Data Types

**Definition:**  
Primitive data types represent single values and are immutable.

JavaScript has 7 primitive data types:

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

Example:

```javascript
let name = "Vineeth";
let age = 25;
let isActive = true;
```

---

## 4. Non-Primitive Data Types

**Definition:**  
Non-primitive data types can store collections of values or more complex data and are reference-based.

Common examples:

```text
Object
Array
Function
```

Example:

```javascript
let scores = [70, 80, 90];

let employee = {
    name: "Vineeth",
    age: 25
};
```

---

## 5. Variable

**Definition:**  
A variable is a named storage location used to hold a value.

```javascript
let name = "Vineeth";
```

Here:

```text
name → variable
"Vineeth" → value
```

---

## 6. `var`

**Definition:**  
`var` is an older keyword used to declare variables. It is function-scoped and can be redeclared and reassigned.

```javascript
var name = "Vineeth";

var name = "Rajendran";

console.log(name);
```

---

## 7. `let`

**Definition:**  
`let` is used to declare a block-scoped variable that can be reassigned but cannot be redeclared within the same scope.

```javascript
let age = 25;

age = 30;
```

---

## 8. `const`

**Definition:**  
`const` is used to declare a block-scoped variable whose binding cannot be reassigned.

```javascript
const browser = "Chrome";

// browser = "Firefox"; // Error
```

---

## 9. Scope

**Definition:**  
Scope determines where a variable can be accessed in a program.

Common types:

```text
Global Scope
Function Scope
Block Scope
```

---

## 10. Array

**Definition:**  
An array is a non-primitive data type used to store multiple values in a single variable.

```javascript
let scores = [70, 80, 90];
```

---

## 11. Array Index

**Definition:**  
An array index represents the position of an element in an array. Array indexing starts from `0`.

```javascript
let scores = [70, 80, 90];

console.log(scores[0]); // 70
```

---

## 12. Array `length`

**Definition:**  
The `length` property returns the total number of elements in an array.

```javascript
let scores = [70, 80, 90];

console.log(scores.length); // 3
```

```text
Last index = length - 1
```

---

## 13. `push()`

**Definition:**  
`push()` adds one or more elements to the end of an array.

```javascript
scores.push(100);
```

**Important:** Modifies the original array.

---

## 14. `unshift()`

**Definition:**  
`unshift()` adds one or more elements to the beginning of an array.

```javascript
scores.unshift(50);
```

**Important:** Modifies the original array.

---

## 15. `pop()`

**Definition:**  
`pop()` removes the last element from an array.

```javascript
scores.pop();
```

**Important:** Modifies the original array.

---

## 16. `shift()`

**Definition:**  
`shift()` removes the first element from an array.

```javascript
scores.shift();
```

**Important:** Modifies the original array.

---

## 17. `slice()`

**Definition:**  
`slice()` extracts a portion of an array or string without modifying the original value.

```javascript
let result = scores.slice(1, 3);
```

```text
start → included
end   → excluded
```

---

## 18. `splice()`

**Definition:**  
`splice()` is used to add, remove, or replace elements in an array and modifies the original array.

```javascript
scores.splice(1, 2);
```

---

## 19. `sort()`

**Definition:**  
`sort()` sorts the elements of an array and modifies the original array.

For numbers:

```javascript
let marks = [20, 5, 100, 30];

marks.sort((a, b) => a - b);
```

---

## 20. String

**Definition:**  
A string is a sequence of characters used to represent text.

```javascript
let course = "Playwright";
```

---

## 21. String Literal

**Definition:**  
A string literal is a string created directly using quotes.

```javascript
let course = "Playwright";
```

Strings can use:

```javascript
"Playwright"
'Playwright'
`Playwright`
```

---

## 22. String Object

**Definition:**  
A String Object is an object created using the `String` constructor.

```javascript
let course = new String("Playwright");

console.log(typeof course); // object
```

---

## 23. Template Literal

**Definition:**  
A template literal is a string created using backticks (`) that allows variables and expressions to be embedded using `${}`.

```javascript
let name = "Vineeth";

console.log(`Hello ${name}`);
```

---

## 24. String `length`

**Definition:**  
The `length` property returns the number of characters in a string.

```javascript
let course = "Playwright";

console.log(course.length);
```

---

## 25. `charAt()`

**Definition:**  
`charAt()` returns the character at a specified index.

```javascript
let course = "Playwright";

console.log(course.charAt(1));
```

---

## 26. `indexOf()`

**Definition:**  
`indexOf()` returns the index of the first occurrence of a specified character or substring.

```javascript
let course = "Playwright";

console.log(course.indexOf("w"));
```

If the value is not found:

```text
-1
```

---

## 27. `substring()`

**Definition:**  
`substring()` extracts characters between two specified indexes.

```javascript
let username = "rajeshkumar@hotmail.com";

let name = username.substring(0, 6);
```

```text
start → included
end   → excluded
```

---

## 28. `split()`

**Definition:**  
`split()` divides a string into an array of substrings based on a specified separator.

```javascript
let batchName = "Playwright August 2026";

let result = batchName.split(" ");

console.log(result);
```

Output:

```text
["Playwright", "August", "2026"]
```

---

## 29. Function

**Definition:**  
A function is a reusable block of code designed to perform a specific task.

```javascript
function add() {
    let a = 10;
    let b = 20;

    console.log(a + b);
}
```

---

## 30. Parameter

**Definition:**  
A parameter is a variable defined in a function declaration to receive input.

```javascript
function login(username, password) {

}
```

Here:

```text
username → parameter
password → parameter
```

---

## 31. Argument

**Definition:**  
An argument is the actual value passed to a function when the function is called.

```javascript
login("Demo1", "Pass1");
```

Here:

```text
"Demo1" → argument
"Pass1" → argument
```

---

## 32. `return`

**Definition:**  
`return` sends a value from a function back to the place where the function was called.

```javascript
function add() {

    let a = 10;
    let b = 20;

    return a + b;
}

let result = add();

console.log(result);
```

---

## 33. `console.log()`

**Definition:**  
`console.log()` displays a value in the console. It does not return the value from the function.

```javascript
function add() {

    let a = 10;
    let b = 20;

    console.log(a + b);
}
```

---

## 34. Local Variable

**Definition:**  
A local variable is a variable declared inside a function or block and can generally be accessed only within that scope.

```javascript
function add() {

    let a = 10;

    console.log(a);
}
```

---

## 35. Loop

**Definition:**  
A loop is a programming construct used to execute a block of code repeatedly based on a condition.

Common JavaScript loops:

```text
for
while
do...while
for...of
forEach()
```

---

## 36. `for` Loop

**Definition:**  
A `for` loop is used to execute a block of code repeatedly while a specified condition is true.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## 37. `for...of`

**Definition:**  
`for...of` is used to iterate directly over the values of an iterable, such as an array or string.

```javascript
let scores = [70, 80, 90];

for (let score of scores) {
    console.log(score);
}
```

---

## 38. `forEach()`

**Definition:**  
`forEach()` executes a callback function once for each element in an array.

```javascript
let scores = [70, 80, 90];

scores.forEach((score) => {
    console.log(score);
});
```

---

## 39. Type Coercion

**Definition:**  
Type coercion is the automatic conversion of one data type into another by JavaScript during an operation.

```javascript
let a = "20";
let b = "10";

console.log(a + b); // "2010"
console.log(a - b); // 10
```

---

## 40. `==`

**Definition:**  
`==` is the loose equality operator. It compares values after performing type coercion when necessary.

```javascript
console.log("20" == 20); // true
```

---

## 41. `===`

**Definition:**  
`===` is the strict equality operator. It compares both the value and the data type without performing type coercion.

```javascript
console.log("20" === 20); // false
```

---

## 42. Object

**Definition:**  
An object is a non-primitive data type used to store data as key-value pairs.

```javascript
let employee = {
    name: "Vineeth",
    role: "SDET",
    experience: 5
};
```

---

## 43. Set

**Definition:**  
A `Set` is a collection that stores unique values and does not allow duplicates.

```javascript
let numbers = new Set([10, 20, 20, 30]);

console.log(numbers);
```

---

## 44. Map

**Definition:**  
A `Map` is a collection of key-value pairs where each key is unique.

```javascript
let employee = new Map();

employee.set("name", "Vineeth");
employee.set("role", "SDET");
```

---

## 45. Palindrome

**Definition:**  
A palindrome is a value that remains the same when it is reversed.

Examples:

```text
121   → Palindrome
MADAM → Palindrome
1331  → Palindrome

123   → Not a Palindrome
```

---

## 46. Nested Loop

**Definition:**  
A nested loop is a loop placed inside another loop.

```javascript
for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

        // Logic

    }
}
```

It is commonly used when comparing elements between two arrays.

---

## 47. Callback Function

**Definition:**  
A callback function is a function passed as an argument to another function and executed by that function.

```javascript
scores.forEach((score) => {
    console.log(score);
});
```

Here:

```text
(score) => { ... }
```

is the callback function.

---

## 48. Dynamic Test Data

**Definition:**  
Dynamic test data means providing different input values to the same function or test instead of hardcoding the values inside the function.

```javascript
function login(username, password) {

    console.log(username);
    console.log(password);
}

login("Demo1", "Pass1");
login("Demo2", "Pass2");
login("Demo3", "Pass3");
```

This is particularly useful in test automation, where the same test logic may need to run with multiple sets of data.
