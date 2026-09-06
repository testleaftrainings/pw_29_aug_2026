# JavaScript Functions, Callbacks, Promises & Async/Await
# Interview Questions

## 1. Function Expression – Interview Questions

### Q1. What is a Function Expression?

A Function Expression is a function that is assigned to a variable.

```javascript
let login = function () {
    console.log("Login successful");
};
```

---

### Q2. How do you call a Function Expression?

Use the variable name followed by parentheses.

```javascript
login();
```

---

### Q3. What is the difference between a Function Declaration and Function Expression?

**Function Declaration:**

```javascript
function login() {
    console.log("Login");
}
```

**Function Expression:**

```javascript
let login = function () {
    console.log("Login");
};
```

A major difference is hoisting. Function declarations can generally be called before their declaration, whereas a function expression assigned to `let` or `const` cannot be accessed before initialization.

---

### Q4. Can a Function Expression be named?

Yes.

```javascript
let login = function loginUser() {
    console.log("Login");
};
```

---

### Q5. Can a Function Expression be anonymous?

Yes.

```javascript
let login = function () {
    console.log("Login");
};
```

---

### Q6. What is the purpose of assigning a function to a variable?

It allows the function to be treated as a value and passed as an argument, returned from another function, or stored for later execution.

---

# 2. Arrow Function – Interview Questions

### Q7. What is an Arrow Function?

An Arrow Function is a concise syntax for defining a function using `=>`.

```javascript
let login = () => {
    console.log("Login successful");
};
```

---

### Q8. What is the difference between a Function Expression and an Arrow Function?

```javascript
let login1 = function () {
    console.log("Login");
};

let login2 = () => {
    console.log("Login");
};
```

The arrow function provides shorter syntax and has different `this` behavior.

---

### Q9. Can an Arrow Function have parameters?

Yes.

```javascript
let add = (a, b) => {
    return a + b;
};
```

---

### Q10. How can you simplify an Arrow Function with a single return statement?

```javascript
let add = (a, b) => a + b;
```

The return value is implicit.

---

### Q11. Does an Arrow Function have its own `this`?

No. Arrow functions inherit `this` from their surrounding lexical scope.

---

### Q12. Can an Arrow Function be used as a constructor with `new`?

No. Arrow functions do not have their own `prototype` and cannot be used as constructors.

---

### Q13. Why are Arrow Functions commonly used as callbacks?

They provide concise syntax and are especially convenient when the callback needs to use the surrounding `this`.

Example:

```javascript
setTimeout(() => {
    console.log("Executed");
}, 1000);
```

---

# 3. Synchronous JavaScript – Interview Questions

### Q14. What is synchronous execution?

Synchronous execution means JavaScript executes statements one after another, waiting for the current operation to finish before moving to the next statement.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

---

### Q15. Is JavaScript synchronous or asynchronous?

JavaScript execution is synchronous by default.

However, JavaScript environments provide asynchronous APIs such as timers, network operations, and Promise-based APIs.

---

### Q16. What does blocking mean?

Blocking means an operation prevents further code from executing until that operation finishes.

---

# 4. Asynchronous JavaScript – Interview Questions

### Q17. What is asynchronous execution?

Asynchronous execution allows an operation to be started without blocking the execution of subsequent code.

---

### Q18. What is `setTimeout()`?

`setTimeout()` schedules a callback to execute after a specified delay.

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

---

### Q19. Does `setTimeout()` pause JavaScript execution?

No.

It schedules the callback for later. The remaining synchronous code continues executing.

---

### Q20. What is the output?

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Output:

```text
A
C
B
```

---

### Q21. Why does `C` execute before `B`?

`setTimeout()` schedules its callback to run later. JavaScript continues executing the synchronous statements before the callback is executed.

---

# 5. Event Loop – Interview Questions

### Q22. What is the Event Loop?

The Event Loop is the mechanism that coordinates synchronous JavaScript execution with asynchronous callbacks.

It checks whether the call stack is available and helps move eligible asynchronous work into execution.

---

### Q23. What is the Call Stack?

The Call Stack keeps track of functions currently being executed.

Example:

```javascript
function login() {
    console.log("Login");
}

login();
```

When `login()` is called, it is placed on the call stack and removed after execution.

---

### Q24. What is the relationship between Call Stack and Event Loop?

A simplified flow is:

```text
JavaScript Code
      ↓
   Call Stack
      ↓
Asynchronous API
      ↓
Task / Microtask Queue
      ↓
   Event Loop
      ↓
   Call Stack
```

The exact scheduling depends on the type of asynchronous operation.

---

### Q25. Which generally gets priority: Promise callbacks or timer callbacks?

Promise reactions such as `.then()` are microtasks, while `setTimeout()` callbacks are tasks/macrotasks.

After the current synchronous code completes, microtasks are generally processed before the next task.

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

---

# 6. Callback Functions – Interview Questions

### Q26. What is a Callback Function?

A callback is a function passed as an argument to another function so that it can be invoked later.

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

---

### Q27. Why are callbacks used?

Callbacks can be used to execute a function after another operation or to customize the behavior of another function.

---

### Q28. Can we pass multiple callbacks?

Yes.

```javascript
function login(call1, call2) {
    console.log("Login successful");

    call1();
    call2();
}

function createAccount() {
    console.log("Account created");
}

function createLead() {
    console.log("Lead created");
}

login(createAccount, createLead);
```

Output:

```text
Login successful
Account created
Lead created
```

---

### Q29. What is the difference between `createAccount` and `createAccount()` when passing a callback?

```javascript
login(createAccount);
```

Passes the function itself.

```javascript
login(createAccount());
```

Executes the function immediately and passes its return value.

---

### Q30. What is Callback Hell?

Callback Hell occurs when multiple asynchronous operations are nested inside callbacks, making the code difficult to read and maintain.

Example:

```javascript
login(() => {
    createAccount(() => {
        createLead(() => {
            createOpportunity(() => {
                console.log("Completed");
            });
        });
    });
});
```

Promises and `async/await` can make such flows easier to manage.

---

# 7. Promise – Interview Questions

### Q31. What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

### Q32. What are the states of a Promise?

A Promise has three states:

1. Pending
2. Fulfilled
3. Rejected

---

### Q33. What is the difference between fulfilled and rejected?

- **Fulfilled** → operation completed successfully.
- **Rejected** → operation failed.

---

### Q34. How do you create a Promise?

```javascript
let login = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }

});
```

---

### Q35. What are `resolve` and `reject`?

- `resolve()` marks the Promise as fulfilled.
- `reject()` marks the Promise as rejected.

---

### Q36. How do you handle a fulfilled Promise?

Use `.then()`.

```javascript
login.then((message) => {
    console.log(message);
});
```

---

### Q37. How do you handle a rejected Promise?

Use `.catch()`.

```javascript
login.catch((error) => {
    console.log(error);
});
```

---

### Q38. What is `.finally()`?

`.finally()` executes after the Promise settles, regardless of whether it was fulfilled or rejected.

```javascript
login
    .then(() => {
        console.log("Success");
    })
    .catch(() => {
        console.log("Failure");
    })
    .finally(() => {
        console.log("Completed");
    });
```

---

# 8. Promise Output-Based Questions

### Q39. What is the output?

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

---

### Q40. What is the output?

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

---

### Q41. What happens if a Promise is rejected and there is no rejection handler?

It results in an unhandled Promise rejection, which can produce an error/warning and may terminate the process depending on the environment and configuration.

---

# 9. async / await – Interview Questions

### Q42. What is `async`?

`async` is used to declare an asynchronous function.

An `async` function always returns a Promise.

```javascript
async function login() {
    return "Login successful";
}
```

---

### Q43. What is `await`?

`await` is used to wait for a Promise to settle and obtain its fulfillment value inside an async function.

```javascript
async function execute() {
    let result = await login();
    console.log(result);
}
```

---

### Q44. Can we use `await` outside an async function?

Normally, `await` is used inside an `async` function.

Modern JavaScript modules also support top-level `await`.

---

### Q45. Does `await` block the entire JavaScript application?

No.

`await` suspends the execution of the current async function until the Promise settles. It does not block the entire JavaScript runtime.

---

### Q46. Does an async function return a Promise?

Yes.

```javascript
async function login() {
    return "Success";
}

console.log(login());
```

The result is a Promise.

---

### Q47. How do you handle errors with async/await?

Use `try...catch`.

```javascript
async function executeLogin() {

    try {
        let result = await login();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
```

---

# 10. Promise vs async/await – Interview Questions

### Q48. Is async/await an alternative to Promises?

`async/await` is syntax built on top of Promises. It provides a more sequential-looking way to consume Promise-based operations.

---

### Q49. Which is easier to read: `.then()` or `async/await`?

For sequential asynchronous operations, `async/await` is often easier to read.

Using `.then()`:

```javascript
login()
    .then(() => enterPassword())
    .then(() => clickLogin());
```

Using `async/await`:

```javascript
async function execute() {
    await login();
    await enterPassword();
    await clickLogin();
}
```

---

### Q50. Can we use `try...catch` with Promises?

Yes.

```javascript
async function execute() {

    try {
        await login();
    } catch (error) {
        console.log(error);
    }

}
```

---

# 11. Sequential vs Parallel Execution

### Q51. How do you execute asynchronous operations sequentially?

Use `await` one after another.

```javascript
await step1();
await step2();
await step3();
```

The next statement waits for the previous Promise to settle.

---

### Q52. How do you execute independent Promises in parallel?

Use `Promise.all()`.

```javascript
let [result1, result2] = await Promise.all([
    operation1(),
    operation2()
]);
```

This is preferable when the operations are independent.

---

### Q53. What is `Promise.all()`?

`Promise.all()` waits for all supplied Promises to fulfill.

If any Promise rejects, the returned Promise rejects.

```javascript
await Promise.all([
    operation1(),
    operation2(),
    operation3()
]);
```

---

### Q54. What is the difference between sequential and parallel execution?

**Sequential:**

```javascript
await operation1();
await operation2();
```

`operation2()` starts after `operation1()` completes.

**Parallel:**

```javascript
await Promise.all([
    operation1(),
    operation2()
]);
```

Both operations are started without waiting for the other to finish.

---

# 12. Playwright + async/await Interview Questions

### Q55. Why do we use `await` in Playwright?

Many Playwright APIs return Promises because they perform asynchronous browser operations.

```javascript
await page.goto("https://example.com");
await page.getByLabel("Username").fill("admin");
await page.getByRole("button", { name: "Login" }).click();
```

`await` allows the test to wait for each operation before continuing.

---

### Q56. What happens if we forget `await` in Playwright?

The test may continue before the asynchronous operation has completed, potentially causing incorrect sequencing or failures.

Example:

```javascript
page.getByLabel("Username").fill("admin");
page.getByLabel("Password").fill("admin123");
```

Using `await` is the normal approach:

```javascript
await page.getByLabel("Username").fill("admin");
await page.getByLabel("Password").fill("admin123");
```

---

### Q57. Does Playwright wait automatically?

Playwright provides **auto-waiting** for many locator-based actions and assertions. However, Playwright methods that return Promises still need to be awaited when you need to wait for their completion.

---

### Q58. Why is `await` important in an automation script?

It helps maintain the intended sequence of asynchronous operations.

Example:

```text
Open Application
      ↓
Enter Username
      ↓
Enter Password
      ↓
Click Login
      ↓
Verify Home Page
```

---

### Q59. Is `await` a Playwright feature?

No.

`await` is a JavaScript language feature. Playwright uses Promise-based APIs, so `await` is commonly used with Playwright methods.

---

# 13. Scenario-Based Interview Questions

### Q60. Login requires username → password → click Login. How would you automate it?

```javascript
await page.getByLabel("Username").fill("admin");
await page.getByLabel("Password").fill("admin123");
await page.getByRole("button", { name: "Login" }).click();
```

---

### Q61. You have three independent API calls. Should you use three sequential `await` statements?

Not necessarily.

If the operations are independent, use `Promise.all()`.

```javascript
const [users, products, orders] = await Promise.all([
    getUsers(),
    getProducts(),
    getOrders()
]);
```

---

### Q62. You have three dependent operations. How would you execute them?

Use sequential `await`.

```javascript
const user = await createUser();
const account = await createAccount(user);
const lead = await createLead(account);
```

---

### Q63. How would you handle a failed asynchronous operation?

Use `try...catch`.

```javascript
try {
    await login();
} catch (error) {
    console.log("Login failed:", error);
}
```

---

# 14. Tricky Interview Questions

### Q64. Is Promise itself asynchronous?

A Promise is an object representing the result of an asynchronous operation. Creating a Promise does not automatically mean its executor is asynchronous.

Example:

```javascript
new Promise((resolve) => {
    console.log("Executed immediately");
    resolve();
});
```

The Promise executor runs synchronously when the Promise is created.

---

### Q65. Does `await` wait for a fixed amount of time?

No.

`await` waits for the Promise to settle. It does not represent a fixed delay.

---

### Q66. Is `setTimeout(..., 0)` executed immediately?

No.

It schedules the callback to run later as a task after the current synchronous execution and applicable microtasks have completed.

---

### Q67. What is the difference between `await` and `setTimeout()`?

`await` waits for a Promise.

`setTimeout()` schedules a callback after a minimum delay.

Example:

```javascript
await somePromise();
```

versus:

```javascript
setTimeout(() => {
    console.log("Executed later");
}, 5000);
```

---

### Q68. What is the difference between a callback and a Promise?

A callback is a function passed to another function.

A Promise is an object representing a future result.

Promises generally provide a structured way to compose asynchronous operations and handle success/failure.

---

# 15. High-Priority Interview Questions

For interview preparation, prioritize these questions:

1. What is a Function Expression?
2. Function Declaration vs Function Expression?
3. What is an Arrow Function?
4. Arrow Function vs Function Expression?
5. What is a callback function?
6. What is Callback Hell?
7. What is synchronous execution?
8. What is asynchronous execution?
9. How does `setTimeout()` work?
10. What is the Event Loop?
11. What is the Call Stack?
12. What is a Promise?
13. What are the states of a Promise?
14. What are `resolve()` and `reject()`?
15. What are `.then()`, `.catch()`, and `.finally()`?
16. What is `async`?
17. What is `await`?
18. Does `await` block the entire application?
19. How do you handle errors using async/await?
20. What is `Promise.all()`?
21. Sequential vs parallel execution?
22. Why is `await` used in Playwright?
23. What happens if `await` is missed in Playwright?
24. Is `await` a Playwright feature?
25. How do you handle independent asynchronous operations in Playwright?
