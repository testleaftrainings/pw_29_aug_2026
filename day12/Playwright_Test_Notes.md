# Playwright Test -- Notes

## 1. Topics Covered

-   Playwright vs Playwright Test
-   Playwright Test Runner
-   `test()`
-   `test.describe()`
-   Test Annotations
-   `test.only()`
-   `test.skip()`
-   `test.fail()`
-   `test.slow()`
-   `test.describe.configure()`
-   Parallel Test Execution
-   Test Timeout
-   Fixtures
-   Test Isolation
-   Test Organization
-   Test Execution and Reporting
-   Browser and Page Interaction
-   `page.goto()`
-   `page.locator()`
-   Console Logging
-   Smoke Testing
-   Valid, Invalid and Negative Test Scenarios

------------------------------------------------------------------------

## 2. Playwright

Playwright is a browser automation library developed by Microsoft.

It is used to automate web browsers and perform actions such as:

-   Launching browsers
-   Opening web pages
-   Locating elements
-   Clicking elements
-   Entering text
-   Selecting options
-   Handling dialogs
-   Handling multiple pages
-   Uploading files
-   Taking screenshots
-   Performing API requests

### Common Playwright APIs

``` typescript
await page.goto("https://example.com");
await page.locator("#username").fill("admin");
await page.getByRole("button", { name: "Login" }).click();
```

Playwright focuses mainly on browser automation and application
interaction.

------------------------------------------------------------------------

## 3. Playwright Test

Playwright Test is the test runner provided by Playwright.

It provides features required for building and executing automated test
suites.

### Major Playwright Test Features

-   Test execution
-   Assertions
-   Fixtures
-   Hooks
-   Annotations
-   Parallel execution
-   Retries
-   Timeouts
-   Test isolation
-   Screenshots
-   Videos
-   Traces
-   HTML reports
-   Projects
-   Tags and test filtering

### Simple Difference

**Playwright:** Browser automation.

**Playwright Test:** Test automation framework/test runner built around
Playwright.

------------------------------------------------------------------------

## 4. `test()`

The `test()` function is used to define an individual test case.

Example:

``` typescript
test("Test to verify login", async ({ page }) => {
    await page.goto("https://example.com");
});
```

The first argument is the test name.

The second argument is the test function.

------------------------------------------------------------------------

## 5. `test.describe()`

`test.describe()` is used to group related test cases.

Example:

``` typescript
test.describe("Smoke Testcases", () => {

    test("Login test", async ({ page }) => {
        // Test steps
    });

    test("Logout test", async ({ page }) => {
        // Test steps
    });

});
```

### Benefits

-   Organizes test cases
-   Groups related scenarios
-   Allows configuration for a group of tests
-   Makes reports easier to understand

------------------------------------------------------------------------

## 6. Test Annotations

Annotations provide additional instructions to Playwright Test about how
a test should be executed.

Important annotations include:

### `test.only()`

Executes only the selected test.

``` typescript
test.only("Login test", async ({ page }) => {
});
```

Useful during debugging.

**Important:** Do not commit `test.only()` to the main branch because it
can prevent other tests from executing.

------------------------------------------------------------------------

### `test.skip()`

Skips a test.

``` typescript
test.skip("Login test", async ({ page }) => {
});
```

It can also be used conditionally.

``` typescript
test.skip(browserName === "firefox", "Not supported in Firefox");
```

------------------------------------------------------------------------

### `test.fail()`

Marks a test as expected to fail.

``` typescript
test.fail("Known failing test", async ({ page }) => {
});
```

If the test fails as expected, Playwright considers that expected
behavior.

This is useful for known bugs or scenarios that are intentionally
expected to fail.

------------------------------------------------------------------------

### `test.slow()`

Marks a test as slow and increases its timeout.

``` typescript
test.slow();
```

It is useful when a particular test needs more time than the normal
timeout.

You can also provide a reason:

``` typescript
test.slow(true, "Application takes longer to load");
```

------------------------------------------------------------------------

## 7. Parallel Execution

Playwright can execute tests in parallel.

Example:

``` typescript
test.describe.configure({ mode: "parallel" });
```

This configures tests inside the `describe` block to run in parallel.

### Sequential vs Parallel

Sequential:

``` text
Test 1 → Test 2 → Test 3
```

Parallel:

``` text
Test 1 ─┐
Test 2 ─┼─ Execute simultaneously
Test 3 ─┘
```

### Benefits

-   Reduces overall execution time
-   Improves CI/CD execution speed
-   Useful for independent test cases

### Important Consideration

Tests running in parallel should ideally be independent.

If multiple tests modify the same data or depend on the execution order,
parallel execution can cause failures.

------------------------------------------------------------------------

## 8. Test Timeout

A timeout defines how long Playwright waits before considering a test or
operation timed out.

Example:

``` typescript
test.setTimeout(120000);
```

For a slow test:

``` typescript
test.slow();
```

The exact timeout values depend on the Playwright configuration.

### Best Practice

Do not increase timeouts unnecessarily.

First investigate whether the issue is caused by:

-   Incorrect locator
-   Missing wait condition
-   Application performance
-   Network issue
-   Synchronization problem

------------------------------------------------------------------------

## 9. Fixtures

Fixtures provide objects and resources required by tests.

The most commonly used fixture is `page`.

``` typescript
test("Login test", async ({ page }) => {
    await page.goto("https://example.com");
});
```

The `page` fixture represents a browser page.

Other commonly used fixtures include:

-   `browser`
-   `context`
-   `page`
-   `request`

Fixtures help create reusable and isolated test environments.

------------------------------------------------------------------------

## 10. Test Isolation

Playwright Test provides isolation between tests.

Typically, each test gets its own browser context and page.

This helps prevent one test from affecting another.

Example:

``` text
Test 1 → Context 1 → Page 1

Test 2 → Context 2 → Page 2

Test 3 → Context 3 → Page 3
```

This is particularly important when tests run in parallel.

------------------------------------------------------------------------

## 11. Smoke Testing

Smoke testing is a basic level of testing used to verify that the major
functionality of an application is working.

Typical smoke scenarios may include:

-   Application launches
-   Login works
-   Main menu is accessible
-   Important module can be opened
-   Critical workflow works

Smoke tests are usually:

-   High priority
-   Fast to execute
-   Focused on critical functionality

------------------------------------------------------------------------

## 12. Negative Testing

Negative testing verifies how the application behaves when invalid or
unexpected input is provided.

Examples:

-   Invalid username
-   Invalid password
-   Empty username
-   Empty password
-   Invalid data format

Example:

``` typescript
test("Login with invalid credentials", async ({ page }) => {
    // Negative scenario
});
```

------------------------------------------------------------------------

## 13. `page.goto()`

`page.goto()` navigates to a URL.

``` typescript
await page.goto("https://leaftaps.com/opentaps/control/main");
```

It is commonly used as the first step of a browser-based test.

------------------------------------------------------------------------

## 14. `page.locator()`

`page.locator()` creates a locator for an element.

``` typescript
page.locator(".id")
```

The locator can then be used for actions such as:

``` typescript
await page.locator(".id").click();
await page.locator("#username").fill("admin");
```

------------------------------------------------------------------------

## 15. Console Logging

`console.log()` prints information to the terminal.

``` typescript
console.log("Valid credentials entered");
```

It can be useful for debugging and understanding test execution.

However, assertions should be used to actually validate expected
application behavior.

------------------------------------------------------------------------

## 16. Assertions vs Console Logs

A console message does not make a test pass or fail.

Example:

``` typescript
console.log("Login successful");
```

This only prints text.

For validation, use an assertion:

``` typescript
await expect(page).toHaveURL(/dashboard/);
```

Therefore:

**Console log = Information**

**Assertion = Validation**

------------------------------------------------------------------------

## 17. Standard Test Flow

A typical Playwright Test execution flow is:

``` text
Test Definition
      ↓
Fixture Creation
      ↓
Browser/Page Setup
      ↓
Navigate to Application
      ↓
Locate Element
      ↓
Perform Action
      ↓
Validate Result
      ↓
Test Pass/Fail
      ↓
Report Generation
```

------------------------------------------------------------------------

## 18. Industry Best Practices

-   Prefer `import { test } from "@playwright/test"`.
-   Use meaningful test names.
-   Group related tests using `test.describe()`.
-   Avoid `test.only()` in committed code.
-   Use `test.skip()` only when there is a valid reason.
-   Use `test.fail()` for known expected failures.
-   Avoid unnecessary `waitForTimeout()`.
-   Prefer Playwright's auto-waiting and assertions.
-   Keep parallel tests independent.
-   Use Page Object Model for maintainability.
-   Use assertions to validate functionality.
-   Keep smoke tests short and focused.


---

# 19. Reading Test Data from JSON

JSON (JavaScript Object Notation) is commonly used to store structured test data.

Example:

```json
[
    {
        "url": "https://leaftaps.com/opentaps/control/main",
        "username": "Demosalesmanager1",
        "password": "crmsfa"
    }
]
```

### Import JSON Data

With TypeScript configuration supporting JSON modules:

```typescript
import loginData from "../../data/loginData.json";
```

The data can then be accessed using:

```typescript
loginData[0].username
loginData[0].password
loginData[0].url
```

### Typical JSON Data-Driven Flow

```text
JSON File
   ↓
Import JSON
   ↓
Array/Object
   ↓
Read Test Data
   ↓
Execute Test
```

### Advantages of JSON

- Easy to read
- Supports nested objects and arrays
- Useful for structured test data
- Convenient for configuration and test data
- Easy to consume from JavaScript/TypeScript

---

# 20. Reading Test Data from CSV

CSV (Comma-Separated Values) stores data in rows and columns.

Example:

```csv
url,username,password
https://leaftaps.com/opentaps/control/main,Demosalesmanager1,crmsfa
https://leaftaps.com/opentaps/control/main,DemoSalesManager2,crmsfa
```

### Read CSV Using Node.js

First import the file system module:

```typescript
import fs from "fs";
```

Read the CSV file:

```typescript
const csvData = fs.readFileSync("data/logindata.csv", "utf-8");
```

The `utf-8` encoding converts the file bytes into readable characters/text.

### Parse CSV

Using `csv-parse`:

```typescript
import { parse } from "csv-parse/sync";

const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});
```

`columns: true` uses the first row as property names.

For example:

```typescript
records[0].username
records[0].password
records[0].url
```

### Typical CSV Data-Driven Flow

```text
CSV File
   ↓
fs.readFileSync()
   ↓
CSV Text
   ↓
parse()
   ↓
Array of Objects
   ↓
for loop
   ↓
Execute Tests
```

### Advantages of CSV

- Easy to maintain tabular data
- Useful for large sets of rows
- Easy to edit using Excel
- Suitable for parameterized testing

---

# 21. Reading Environment Variables from `.env`

A `.env` file is commonly used to store environment-specific configuration and sensitive values that should not be hard-coded in test files.

Example:

```env
BASE_URL=https://leaftaps.com/opentaps/control/main
USERNAME=Demosalesmanager1
PASSWORD=crmsfa
```

### Load `.env` Values

Using the `dotenv` package:

```typescript
import dotenv from "dotenv";

dotenv.config();
```

Read a value:

```typescript
process.env.BASE_URL
process.env.USERNAME
process.env.PASSWORD
```

Example:

```typescript
await page.goto(process.env.BASE_URL!);
```

### Typical `.env` Flow

```text
.env File
   ↓
dotenv.config()
   ↓
process.env
   ↓
Test Code
```

### Why Use `.env`?

- Avoid hard-coding environment-specific values
- Keep credentials/configuration outside test code
- Easily switch between environments
- Useful for local, QA, staging and production configurations

### Important Best Practice

Do not commit real credentials or secrets to Git.

Add `.env` to `.gitignore` when it contains sensitive values.

---

# 22. JSON vs CSV vs `.env`

| Type | Primary Use | Structure |
|---|---|---|
| JSON | Structured test data | Objects and arrays |
| CSV | Tabular/large test data | Rows and columns |
| `.env` | Configuration and environment values | Key-value pairs |

### Simple Rule

**JSON:** Use when test data has a structured or nested format.

**CSV:** Use when test data is mainly tabular and there are many records.

**`.env`:** Use for environment-specific configuration and sensitive values such as URLs, usernames, tokens and passwords.

---

# 23. Data-Driven Testing

Data-driven testing means executing the same test logic with multiple sets of input data.

Example:

```text
Test Logic
    +
Data Set 1
    +
Data Set 2
    +
Data Set 3
```

With Playwright, data can come from:

- JSON
- CSV
- `.env`
- API responses
- Databases
- Other external files

### Example

```typescript
for (let i = 0; i < records.length; i++) {
    test(`Create Lead ${i + 1}`, async ({ page }) => {
        // Use records[i] as test data
    });
}
```

This dynamically creates tests based on the available data.

---

# 24. JSON, CSV and `.env` in Page Object Model

Data files can be used together with Page Object Model.

The test file is responsible for:

- Reading test data
- Creating page objects
- Passing data to page object methods

The Page Object is responsible for:

- Locators
- Page interactions
- Application-specific actions

Example:

```typescript
await loginPage.login(
    records[i].username,
    records[i].password
);
```

This keeps test data and page interaction logic separated.

---

# 25. Recommended Industry Structure

A simple Playwright project can organize these files as:

```text
Project
│
├── data
│   ├── loginData.json
│   └── logindata.csv
│
├── pages
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── CreateLeadPage.ts
│
├── tests
│   └── testcases
│
├── .env
├── playwright.config.ts
└── package.json
```

### Separation of Responsibility

```text
Test Data
   ↓
JSON / CSV / .env

Test Logic
   ↓
.spec.ts

Page Interaction
   ↓
Page Object Model

Execution
   ↓
Playwright Test
```
