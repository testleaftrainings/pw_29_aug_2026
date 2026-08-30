# JavaScript Notes – Workspace, Data Types & Operators

## 1. Create a JavaScript Workspace in VS Code

### Step 1: Create a Folder

Create a folder for the JavaScript practice.

Example:

```text
javascript-basics
```

### Step 2: Open the Folder in VS Code

1. Open **VS Code**.
2. Select **File → Open Folder**.
3. Select the `javascript-basics` folder.

### Step 3: Create a JavaScript File

Create a file:

```text
day01.js
```

### Step 4: Write JavaScript Code

```javascript
console.log("This is my first JavaScript program");
```

### Step 5: Open the Terminal

In VS Code:

```text
Terminal → New Terminal
```

### Step 6: Execute the JavaScript File

Run:

```bash
node day01.js
```

Output:

```text
This is my first JavaScript program
```

### Execution Flow

```text
Create Workspace
      ↓
Open Workspace in VS Code
      ↓
Create .js File
      ↓
Write JavaScript Code
      ↓
Open Terminal
      ↓
node filename.js
      ↓
View Output
```

---

# 2. `console.log()`

### Definition

`console.log()` is used to print information to the console.

```javascript
console.log("Hello JavaScript");
console.log(10);
```

Output:

```text
Hello JavaScript
10
```

---

# 3. Comments

Comments are used to explain code and are not executed by JavaScript.

### Single-Line Comment

```javascript
// This is a comment
console.log("Hello");
```

### Multi-Line Comment

```javascript
/*
This is a
multi-line comment
*/
```

---

# 4. Data Types

### Definition

A data type defines the kind of value stored in a variable.

JavaScript data types are broadly classified into:

```text
Primitive Data Types
        +
Non-Primitive Data Types
```

---

## 5. Primitive Data Types

Primitive data types represent a single value.

JavaScript has 7 primitive data types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

---

## 6. String

A string represents text.

```javascript
let name = "Playwright";
let course = 'JavaScript';
```

Strings can be written using:

- Single quotes `' '`
- Double quotes `" "`
- Backticks `` ` ` ``

---

## 7. Number

The `number` type represents both integer and floating-point numbers.

```javascript
let age = 25;
let price = 99.50;
```

JavaScript does not have separate `int` and `float` data types.

---

## 8. Boolean

Boolean represents one of two values:

```text
true
false
```

Example:

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

Commonly used in conditions.

---

## 9. Undefined

A variable that has been declared but has not been assigned a value has the value `undefined`.

```javascript
let city;

console.log(city);
```

Output:

```text
undefined
```

---

## 10. Null

`null` represents an intentional absence of a value.

```javascript
let result = null;
```

### Important Point

```javascript
typeof null
```

returns:

```text
object
```

This is a historical behavior in JavaScript.

`null` is still classified as a **primitive data type**, even though `typeof null` returns `"object"`.

---

## 11. BigInt

`BigInt` is used to represent integers larger than the safe integer range of the `number` type.

```javascript
let largeNumber = 123456789012345678901234567890n;
```

The `n` at the end indicates a BigInt literal.

---

## 12. Symbol

`Symbol` creates a unique value.

```javascript
let id = Symbol("id");
```

Each Symbol is unique, even when the descriptions are the same.

```javascript
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
```

Output:

```text
false
```

---

# 13. Non-Primitive Data Types

Objects are non-primitive values.

Common examples:

- Object
- Array
- Function

### Object

```javascript
let user = {
    name: "John",
    age: 30
};
```

### Array

```javascript
let browsers = ["Chrome", "Firefox", "Edge"];
```

### Function

```javascript
function greet() {
    console.log("Hello");
}
```

---

# 14. Primitive vs Non-Primitive

| Primitive | Non-Primitive |
|---|---|
| Stores a single value | Can represent collections/structured values |
| Immutable value behavior | Objects can be modified |
| String | Object |
| Number | Array |
| Boolean | Function |
| Undefined | |
| Null | |
| BigInt | |
| Symbol | |

---

# 15. `typeof` Operator

### Definition

`typeof` is used to identify the type of a value.

```javascript
console.log(typeof "Hello");
console.log(typeof 10);
console.log(typeof true);
```

Output:

```text
string
number
boolean
```

### Common Results

```javascript
typeof "Playwright"   // "string"
typeof 100            // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof 10n            // "bigint"
typeof Symbol("id")   // "symbol"
typeof {}             // "object"
typeof []             // "object"
typeof function() {}  // "function"
typeof null           // "object"
```

### Important Interview Point

```javascript
typeof null
```

returns:

```text
object
```

But `null` is a **primitive data type**.

---

# 16. Operators

### Definition

An operator is a symbol or keyword used to perform an operation on values.

Example:

```javascript
let result = 10 + 5;
```

Here:

- `+` → Operator
- `10`, `5` → Operands

---

# 17. Arithmetic Operators

Used for mathematical calculations.

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `10 + 5` |
| `-` | Subtraction | `10 - 5` |
| `*` | Multiplication | `10 * 5` |
| `/` | Division | `10 / 5` |
| `%` | Remainder | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

# 18. Assignment Operators

Used to assign or update values.

### Basic Assignment

```javascript
let a = 10;
```

### Compound Assignment

```javascript
a += 5;   // a = a + 5
a -= 5;   // a = a - 5
a *= 5;   // a = a * 5
a /= 5;   // a = a / 5
a %= 5;   // a = a % 5
```

---

# 19. Comparison Operators

Used to compare values.

| Operator | Meaning |
|---|---|
| `==` | Loose equality |
| `===` | Strict equality |
| `!=` | Loose inequality |
| `!==` | Strict inequality |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

Example:

```javascript
let a = 10;
let b = 20;

console.log(a < b);
console.log(a > b);
console.log(a === b);
```

---

# 20. `==` vs `===`

### `==` – Loose Equality

Compares values after type coercion.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

### `===` – Strict Equality

Compares both value and data type.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

### Recommendation

Prefer `===` when you need strict comparison.

---

# 21. Logical Operators

Used to combine or negate conditions.

| Operator | Meaning |
|---|---|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

### AND

```javascript
console.log(true && true);
```

Output:

```text
true
```

Both conditions must be true.

### OR

```javascript
console.log(true || false);
```

Output:

```text
true
```

At least one condition must be true.

### NOT

```javascript
console.log(!true);
```

Output:

```text
false
```

---

# 22. Increment and Decrement

### Increment `++`

Increases a value by 1.

```javascript
let count = 5;

count++;

console.log(count);
```

Output:

```text
6
```

### Decrement `--`

Decreases a value by 1.

```javascript
let count = 5;

count--;

console.log(count);
```

Output:

```text
4
```

---

# 23. Pre-Increment vs Post-Increment

### Post-Increment

```javascript
let a = 5;

console.log(a++);
console.log(a);
```

Output:

```text
5
6
```

The current value is used first, then incremented.

### Pre-Increment

```javascript
let a = 5;

console.log(++a);
console.log(a);
```

Output:

```text
6
6
```

The value is incremented first, then used.

---

# 24. Ternary Operator

The ternary operator is a short form of `if...else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text
Adult
```

---

# 25. Type Coercion

### Definition

Type coercion is the conversion of a value from one data type to another during an operation or comparison.

Example:

```javascript
console.log(5 + "5");
```

Output:

```text
55
```

Here, the number is converted to a string during the operation.

Another example:

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

---

# 26. Key Interview Points

- JavaScript is dynamically typed.
- A variable can hold values of different types at different times.
- `typeof` is used to identify the type of a value.
- `null` is primitive, although `typeof null` returns `"object"`.
- Arrays return `"object"` with `typeof`.
- Functions return `"function"` with `typeof`.
- `===` performs strict equality comparison.
- `==` allows type coercion.
- `&&`, `||`, and `!` are logical operators.
- `++` increments by 1.
- `--` decrements by 1.
- `%` returns the remainder.
- `**` performs exponentiation.
