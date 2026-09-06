# JavaScript Functions, Callbacks, Promises, and Async/Await

## 1. Function Expression

### Definition

A **Function Expression** is a function that is assigned to a variable.

```javascript
let loginDetails = function login() {
    console.log("Login executed successfully");
};

loginDetails();
```

### Key Points

- Uses the `function` keyword.
- The function is assigned to a variable.
- The function can be called using the variable name.
- `login` is the function name.
- `loginDetails` is the variable that stores the function.

### Anonymous Function Expression

The function name is optional when a function is assigned to a variable.

```javascript
let loginDetails = function () {
    console.log("Login executed successfully");
};

loginDetails();
```

---

## 2. Arrow Function

### Definition

An **Arrow Function** is a shorter and modern syntax for writing functions.

```javascript
let loginDetails = () => {
    console.log("Login executed successfully");
};

loginDetails();
```

### Key Points

- Uses the `=>` syntax.
- Does not use the `function` keyword.
- Provides concise syntax.
- Commonly used with callbacks and Promises.
- Arrow functions do not have their own `this`.

### Single-Line Arrow Function

When there is only one statement, the braces can be omitted.

```javascript
let loginDetails = () => console.log("Login executed successfully");

loginDetails();
```

---

## 3. Function Expression vs Arrow Function

| Function Expression | Arrow Function |
|---|---|
| Uses `function` keyword | Uses `=>` syntax |
| Traditional syntax | Modern concise syntax |
| Can have its own `this` | Does not have its own `this` |
| Suitable for regular functions | Commonly used for callbacks |
| Can be named or anonymous | Usually anonymous when assigned to a variable |

### Important

Arrow functions are not simply a replacement for every function expression. The behavior of `this`, `arguments`, `prototype`, and constructors is different.

---

# 4. Synchronous Execution

### Definition

**Synchronous execution** means JavaScript executes statements one after another in sequence.

```javascript
console.log("Enter Username");
console.log("Enter Password");
console.log("Click Login Button");
```

### Output

```text
Enter Username
Enter Password
Click Login Button
```

The next statement executes after the current statement is completed.

---

# 5. Asynchronous Execution

### Definition

**Asynchronous execution** allows JavaScript to start an operation and continue executing other code without waiting for that operation to finish.

Example:

```javascript
console.log("Code for Enter Username");

setTimeout(() => {
    console.log("Code for Enter Password");
}, 5000);

console.log("Code for Click Login Button");
```

### Output

```text
Code for Enter Username
Code for Click Login Button
Code for Enter Password
```

The password code executes after 5 seconds.

### Important Correction

JavaScript does **not** execute all code asynchronously by default.

- Normal JavaScript statements execute synchronously.
- Operations such as `setTimeout()`, Promises, and many browser/Node.js APIs can work asynchronously.
- JavaScript uses the **event loop** to coordinate asynchronous operations.

---

# 6. setTimeout()

### Definition

`setTimeout()` schedules a function to execute after a specified delay.

```javascript
setTimeout(() => {
    console.log("Executed after 5 seconds");
}, 5000);
```

### Syntax

```javascript
setTimeout(callback, delay);
```

- `callback` → function to execute later.
- `delay` → time in milliseconds.
- `5000` milliseconds = 5 seconds.

### Important

`setTimeout()` does not pause the JavaScript program for the specified time. It schedules the callback to run later.

---

# 7. Callback Function

### Definition

A **callback function** is a function passed as an argument to another function and invoked by that function.

Example:

```javascript
function createAccount() {
    console.log("Account created");
}

function login(callback) {
    console.log("Login successful");
    callback();
}

login(createAccount);
```

### Output

```text
Login successful
Account created
```

Here:

- `createAccount` is passed as an argument.
- `callback` receives the function.
- `callback()` executes `createAccount()`.

---

# 8. Multiple Callback Functions

A function can accept more than one callback.

```javascript
function login(call1, call2) {

    console.log("Login successful");

    call1(); // createAccount()
    call2(); // createLead()
}

function createAccount() {
    console.log("Account created");
}

function createLead() {
    console.log("Lead created");
}

login(createAccount, createLead);
```

### Output

```text
Login successful
Account created
Lead created
```

### Execution Flow

```text
login()
   ↓
Login successful
   ↓
createAccount()
   ↓
Account created
   ↓
createLead()
   ↓
Lead created
```

### Important

When passing a function as a callback:

```javascript
login(createAccount);
```

Do **not** write:

```javascript
login(createAccount());
```

`createAccount()` executes the function immediately, whereas `createAccount` passes the function itself.

---

# 9. Promise

### Definition

A **Promise** is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise can have three states:

1. **Pending** – operation is still in progress.
2. **Fulfilled** – operation completed successfully.
3. **Rejected** – operation failed.

---

## 10. Creating a Promise

```javascript
let enterPassword = new Promise((resolve, reject) => {

    setTimeout(() => {

        console.log("Code for Enter Password");

        resolve();

    }, 5000);

});
```

### Explanation

```javascript
new Promise((resolve, reject) => {
```

Creates a new Promise.

```javascript
resolve();
```

Indicates that the asynchronous operation completed successfully.

```javascript
reject();
```

Indicates that the asynchronous operation failed.

---

# 11. Handling a Promise with then()

The `.then()` method executes when the Promise is fulfilled.

```javascript
console.log("Code for Enter Username");

let enterPassword = new Promise((resolve) => {

    setTimeout(() => {

        console.log("Code for Enter Password");

        resolve();

    }, 5000);

});

enterPassword.then(() => {

    console.log("Code for Click Login Button");

});
```

### Output

```text
Code for Enter Username
Code for Enter Password
Code for Click Login Button
```

The login button code executes only after `resolve()` is called.

---

# 12. Promise with Resolve and Reject

```javascript
let login = new Promise((resolve, reject) => {

    let isLoginSuccessful = true;

    if (isLoginSuccessful) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }

});

login
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Promise Methods

| Method | Purpose |
|---|---|
| `.then()` | Handles successful completion |
| `.catch()` | Handles failure |
| `.finally()` | Executes regardless of success or failure |

---

# 13. async Keyword

### Definition

The `async` keyword is used to declare an asynchronous function.

An `async` function always returns a Promise.

```javascript
async function login() {
    console.log("Login successful");
}

login();
```

Even though no Promise is explicitly created, `login()` returns a Promise.

---

# 14. await Keyword

### Definition

`await` is used to wait for a Promise to settle before continuing with the next statement inside the asynchronous function.

```javascript
function enterPassword() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Password entered");

            resolve();

        }, 5000);

    });

}

async function login() {

    console.log("Username entered");

    await enterPassword();

    console.log("Login button clicked");

}

login();
```

### Execution Flow

```text
Username entered
       ↓
enterPassword()
       ↓
Wait for Promise
       ↓
Password entered
       ↓
Promise resolved
       ↓
Login button clicked
```

### Important Rule

`await` is normally used inside an `async` function.

```javascript
async function example() {
    await somePromise();
}
```

Modern JavaScript also supports top-level `await` in appropriate module environments.

---

# 15. Promise vs async/await

Both approaches can handle asynchronous operations.

### Using then()

```javascript
enterPassword.then(() => {
    console.log("Login button clicked");
});
```

### Using async/await

```javascript
async function login() {

    await enterPassword;

    console.log("Login button clicked");
}
```

### Comparison

| Promise `.then()` | `async/await` |
|---|---|
| Uses `.then()` and `.catch()` | Uses `await` and `try/catch` |
| Can become difficult to read with many chained operations | Usually easier to read |
| Promise-based | Built on top of Promises |
| Useful for chaining | Useful for sequential asynchronous flow |

---

# 16. Error Handling with async/await

Use `try...catch` to handle rejected Promises.

```javascript
function login() {

    return new Promise((resolve, reject) => {

        let isSuccessful = false;

        if (isSuccessful) {
            resolve("Login successful");
        } else {
            reject("Login failed");
        }

    });

}

async function executeLogin() {

    try {

        let message = await login();

        console.log(message);

    } catch (error) {

        console.log(error);

    }

}

executeLogin();
```

---

# 17. Sequential Execution in Automation

In automation, actions often need to happen in a specific order.

Example:

```text
Enter Username
      ↓
Enter Password
      ↓
Click Login
      ↓
Verify Home Page
```

With Playwright, many actions return Promises. Therefore, `await` is commonly used.

```javascript
await page.getByLabel("Username").fill("admin");
await page.getByLabel("Password").fill("admin123");
await page.getByRole("button", { name: "Login" }).click();
```

Each `await` waits for the corresponding asynchronous operation to complete before moving to the next statement.

---

# 18. Important Correction for Playwright

Do not say:

> "JavaScript is asynchronous by default."

A better explanation is:

> **JavaScript executes normal code synchronously, while asynchronous operations are handled through mechanisms such as Promises and the event loop. In Playwright, many browser actions return Promises, so we commonly use `await` to perform actions sequentially.**

---

# 19. Callback vs Promise vs async/await

| Concept | Purpose |
|---|---|
| Callback | Pass a function to be executed later |
| Promise | Represents the eventual result of an asynchronous operation |
| `.then()` | Handles a fulfilled Promise |
| `.catch()` | Handles a rejected Promise |
| `async` | Declares an asynchronous function |
| `await` | Waits for a Promise inside an async function |

### Simple Evolution

```text
Callback
   ↓
Promise
   ↓
async / await
```

This is a useful way to understand how asynchronous code can become easier to manage.

---

# 20. Complete Example

```javascript
// Function Expression
let loginDetails1 = function login() {
    console.log("Login executed successfully");
};

loginDetails1();


// Arrow Function
let loginDetails2 = () => {
    console.log("Login executed successfully");
};

loginDetails2();


// Callback Function
function createAccount() {
    console.log("Account created");
}

function createLead() {
    console.log("Lead created");
}

function login(call1, call2) {

    console.log("Login successful");

    call1();
    call2();
}

login(createAccount, createLead);


// Promise
function enterPassword() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Password entered");

            resolve();

        }, 2000);

    });

}


// async/await
async function executeLogin() {

    console.log("Username entered");

    await enterPassword();

    console.log("Login button clicked");

}

executeLogin();
```

---

# Quick Interview Notes

### What is a Function Expression?

A function assigned to a variable is called a Function Expression.

### What is an Arrow Function?

An Arrow Function is a concise syntax for defining functions using `=>`.

### What is a Callback?

A function passed as an argument to another function is called a callback function.

### What is a Promise?

A Promise represents the eventual success or failure of an asynchronous operation.

### What are the states of a Promise?

- Pending
- Fulfilled
- Rejected

### What is `async`?

`async` declares a function that returns a Promise.

### What is `await`?

`await` pauses the execution of the async function until the Promise settles.

### Does `await` make JavaScript synchronous?

No. It only makes the asynchronous code inside the async function easier to write and read in a sequential style.

### Why is `await` commonly used in Playwright?

Because many Playwright APIs return Promises, and `await` allows the test to wait for those operations to complete before continuing.
