# JavaScript Notes – 3–5 Years

## 1. Variables – `var`, `let`, `const`

### `var`
- Function-scoped
- Can be redeclared
- Can be reassigned
- Hoisted and initialized with `undefined`

### `let`
- Block-scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but remains in the **TDZ**

### `const`
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Hoisted but remains in the **TDZ**
- Must be initialized during declaration

### Redeclaration vs Reassignment
- **Redeclaration:** Declaring the same variable again.
- **Reassignment:** Changing the value of an existing variable.

```javascript
var name = "JavaScript";
var name = "Playwright"; // Redeclaration

let age = 20;
age = 30;                // Reassignment
```

---

## 2. Scope

### Scope
Scope defines **where a variable can be accessed** in a JavaScript program.

### Function Scope
- `var` is function-scoped.
- A `var` declared inside a function can be accessed throughout that function.

### Block Scope
- `let` and `const` are block-scoped.
- A block is defined using `{ }`.
- Examples: `if`, `for`, `while`, etc.

```javascript
function test() {

    var a = 10;
    let b = 20;

    if (true) {
        var a = 30;
        let b = 40;

        console.log(a); // 30
        console.log(b); // 40
    }

    console.log(a); // 30
    console.log(b); // 20
}
```

### Key Difference

| Keyword | Scope |
|---|---|
| `var` | Function |
| `let` | Block |
| `const` | Block |

---

## 3. Hoisting

### Definition
**Hoisting** is the JavaScript behavior where declarations are processed during the creation phase before the code is executed.

### Hoisting Behavior

| Declaration | Hoisted | Initial Value |
|---|---|---|
| `var` | Yes | `undefined` |
| `let` | Yes | TDZ |
| `const` | Yes | TDZ |
| Function declaration | Yes | Fully available |

### `var`

```javascript
console.log(num);

var num = 10;
```

Output:

```text
undefined
```

### `let`

```javascript
console.log(num);

let num = 10;
```

Output:

```text
ReferenceError
```

### Function Declaration

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

---

## 4. Temporal Dead Zone – TDZ

### Definition
The **Temporal Dead Zone** is the period between entering a scope and the point where a `let` or `const` variable is initialized.

During the TDZ:
- The variable exists in the scope.
- The variable cannot be accessed.
- Accessing it results in a `ReferenceError`.

```javascript
console.log(num); // ReferenceError

let num = 10;
```

### Important Points
- `let` → TDZ
- `const` → TDZ
- `var` → No TDZ
- TDZ ends when the variable is initialized.

### Easy Comparison

```text
var
↓
Hoisted
↓
undefined
↓
Can be accessed
```

```text
let / const
↓
Hoisted
↓
TDZ
↓
Initialization
↓
Can be accessed
```

---

## 5. Operators

### Assignment Operator

```javascript
let age = 20;
```

`=` assigns a value.

### Equality Operators

#### `==`
- Compares values after type coercion.

```javascript
5 == "5"; // true
```

#### `===`
- Compares value and data type.
- Preferred in most cases.

```javascript
5 === "5"; // false
```

### Comparison

```text
=    → Assignment
==   → Loose equality
===  → Strict equality
```

### Type Coercion
Type coercion is the automatic conversion of one data type into another during an operation or comparison.

```javascript
5 == "5";   // true
5 === "5";  // false
```

---

## 6. Conditional Statements

### `if`
Used to execute code when a condition is true.

```javascript
if (condition) {
    // code
}
```

### `if...else`

```javascript
if (condition) {
    // true
} else {
    // false
}
```

### `else if`
Used when multiple conditions need to be checked.

```javascript
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

### When to Use
- Use `if...else` for **conditions and ranges**.
- Use `switch` when comparing **one value against multiple fixed options**.

---

## 7. Switch Case

### Definition
`switch` is used to execute different blocks of code based on the value of an expression.

```javascript
switch (value) {

    case "Chrome":
        console.log("Chrome");
        break;

    case "Firefox":
        console.log("Firefox");
        break;

    default:
        console.log("Invalid browser");
}
```

### Keywords
- `switch` → Defines the expression.
- `case` → Defines possible values.
- `break` → Exits the switch.
- `default` → Executes when no case matches.

### Without `break`
Execution continues into the following cases. This is called **fall-through**.

### `switch(true)`
Allows conditions to be evaluated inside cases.

```javascript
switch (true) {

    case number > 0:
        console.log("Positive");
        break;

    case number < 0:
        console.log("Negative");
        break;

    default:
        console.log("Zero");
}
```

---

## 8. `for` Loop

### Definition
A `for` loop repeatedly executes a block of code while a condition is true.

### Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

### Three Components

```text
Initialization → Starting point
Condition      → Determines whether loop continues
Update         → Changes loop variable
```

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Execution Order

```text
Initialization
      ↓
Condition
      ↓
Loop Body
      ↓
Update
      ↓
Condition
      ↓
Loop Body
      ↓
...
```

### Infinite Loop

An infinite loop occurs when the loop condition never becomes false.

```javascript
for (let i = 1; i <= 5;) {
    console.log(i);
}
```

The update is missing, so `i` never changes.

---

## 9. `break`

### Definition
`break` immediately terminates the loop or switch statement.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
```

### Key Point

```text
break
  ↓
Stops the entire loop
  ↓
Execution continues after the loop
```

---

## 10. `continue`

### Definition
`continue` skips the **current iteration** and moves to the next iteration.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

### Key Point

```text
continue
    ↓
Skip current iteration
    ↓
Move to next iteration
```

### `break` vs `continue`

| `break` | `continue` |
|---|---|
| Terminates the loop | Skips current iteration |
| Comes out of the loop | Continues with next iteration |
| Remaining iterations don't execute | Remaining iterations continue |

---

## 11. Practical Automation Usage

### Loop Through Test Data

```javascript
for (let i = 0; i < testData.length; i++) {
    // Execute validation
}
```

Useful when the same test operation needs to be performed against multiple test data records.

### Skip Invalid Data

Use `continue`.

```javascript
for (let i = 0; i < testData.length; i++) {

    if (!testData[i].isValid) {
        continue;
    }

    // Process valid data
}
```

### Stop on Critical Failure

Use `break`.

```javascript
for (let i = 0; i < testData.length; i++) {

    if (testData[i].criticalFailure) {
        break;
    }

    // Process test data
}
```

### Browser-Based Decision

For fixed browser values:

```javascript
switch (browser) {

    case "Chrome":
        // Chrome logic
        break;

    case "Firefox":
        // Firefox logic
        break;

    case "Edge":
        // Edge logic
        break;

    default:
        console.log("Unsupported browser");
}
```
