# Playwright Test -- Interview Questions

## Topics Covered

-   Playwright vs Playwright Test
-   Test Runner
-   `test()`
-   `test.describe()`
-   Annotations
-   `test.only()`
-   `test.skip()`
-   `test.fail()`
-   `test.slow()`
-   Parallel Execution
-   Test Timeout
-   Fixtures
-   Test Isolation
-   Smoke Testing
-   Negative Testing
-   Locators
-   Assertions
-   `waitForTimeout()`
-   Page Object Model
-   Test Execution

------------------------------------------------------------------------

# Basic Interview Questions

## 1. What is Playwright?

Playwright is a browser automation library developed by Microsoft.

It supports browser automation for Chromium, Firefox and WebKit.

------------------------------------------------------------------------

## 2. What is Playwright Test?

Playwright Test is the test runner/framework provided by Playwright.

It provides features such as:

-   Test execution
-   Assertions
-   Fixtures
-   Hooks
-   Annotations
-   Parallel execution
-   Retries
-   Reporting
-   Screenshots
-   Videos
-   Traces

------------------------------------------------------------------------

## 3. What is the difference between Playwright and Playwright Test?

**Answer:**

Playwright is mainly used for browser automation and interacting with
web applications.

Playwright Test is the test runner that provides features required for
test automation such as test organization, assertions, fixtures,
annotations, parallel execution and reporting.

------------------------------------------------------------------------

## 4. What is `test()`?

`test()` is used to define an individual test case.

``` typescript
test("Login test", async ({ page }) => {
    await page.goto("https://example.com");
});
```

------------------------------------------------------------------------

## 5. What is `test.describe()`?

`test.describe()` is used to group related test cases.

``` typescript
test.describe("Smoke Tests", () => {
    test("Login", async ({ page }) => {});
    test("Logout", async ({ page }) => {});
});
```

------------------------------------------------------------------------

# Annotation Questions

## 6. What are Playwright annotations?

Annotations provide additional information or instructions that
customize test execution.

Examples:

-   `test.only()`
-   `test.skip()`
-   `test.fail()`
-   `test.slow()`

------------------------------------------------------------------------

## 7. What is `test.only()`?

`test.only()` executes only the selected test.

``` typescript
test.only("Login test", async ({ page }) => {
});
```

### Interview Point

It is mainly useful during local debugging and should not normally be
committed to the repository.

------------------------------------------------------------------------

## 8. What is `test.skip()`?

`test.skip()` prevents a test from executing.

``` typescript
test.skip("Login test", async ({ page }) => {
});
```

It can also be conditionally applied.

------------------------------------------------------------------------

## 9. What is `test.fail()`?

`test.fail()` marks a test as expected to fail.

It is useful when the expected behavior is currently failing, such as
for a known defect.

------------------------------------------------------------------------

## 10. What is `test.slow()`?

`test.slow()` marks a test as slow and increases the timeout available
to that test.

``` typescript
test.slow();
```

It should not be used simply to hide synchronization problems.

------------------------------------------------------------------------

## 11. What is the difference between `test.skip()` and `test.fail()`?

**`test.skip()`**

The test is not executed.

**`test.fail()`**

The test is executed, but failure is expected.

------------------------------------------------------------------------

## 12. What is the difference between `test.only()` and `test.skip()`?

**`test.only()`**

Runs only the selected test or tests.

**`test.skip()`**

Prevents the selected test from running.

------------------------------------------------------------------------

# Parallel Execution Questions

## 13. How do you run tests in parallel?

One way is:

``` typescript
test.describe.configure({ mode: "parallel" });
```

You can also configure parallel workers in the Playwright configuration.

------------------------------------------------------------------------

## 14. What is the advantage of parallel execution?

Parallel execution reduces overall test execution time.

For example:

``` text
Sequential:

Test 1 → Test 2 → Test 3
30 sec    30 sec    30 sec

Total = 90 sec
```

If the tests can safely run in parallel:

``` text
Test 1 ─┐
Test 2 ─┼─ Parallel
Test 3 ─┘

Total ≈ 30 sec
```

Actual execution time depends on workers, system resources and test
behavior.

------------------------------------------------------------------------

## 15. What is an important condition for parallel tests?

Tests should be independent.

Tests that depend on:

-   Shared test data
-   Execution order
-   The same user state
-   Changes made by another test

may not be suitable for parallel execution without proper isolation.

------------------------------------------------------------------------

## 16. What is `test.describe.configure()`?

It is used to configure test behavior for a `describe` block.

Example:

``` typescript
test.describe.configure({
    mode: "parallel"
});
```

------------------------------------------------------------------------

# Timeout Questions

## 17. What is a test timeout?

A test timeout specifies how long Playwright allows a test to execute
before timing it out.

------------------------------------------------------------------------

## 18. How can you increase the timeout for a slow test?

You can use:

``` typescript
test.slow();
```

or configure a specific timeout where appropriate.

------------------------------------------------------------------------

## 19. Should we increase timeout whenever a test fails?

No.

First investigate:

-   Locator problems
-   Synchronization issues
-   Application performance
-   Network issues
-   Incorrect waits

Increasing timeout should not be used as a replacement for fixing the
root cause.

------------------------------------------------------------------------

# Fixture Questions

## 20. What is a fixture in Playwright?

A fixture provides a test with the required setup and resources.

Example:

``` typescript
test("Login test", async ({ page }) => {
});
```

Here, `page` is a Playwright Test fixture.

------------------------------------------------------------------------

## 21. What is the `page` fixture?

The `page` fixture represents a browser page available to the test.

It can be used for:

``` typescript
await page.goto();
await page.locator();
await page.screenshot();
```

------------------------------------------------------------------------

## 22. Why are fixtures useful?

Fixtures help with:

-   Setup
-   Teardown
-   Reusability
-   Test isolation
-   Dependency management

------------------------------------------------------------------------

# Locator and Browser Questions

## 23. What does `page.goto()` do?

It navigates the browser page to a specified URL.

``` typescript
await page.goto("https://example.com");
```

------------------------------------------------------------------------

## 24. What does `page.locator()` do?

It creates a locator for an element on the page.

``` typescript
const username = page.locator("#username");
```

------------------------------------------------------------------------

## 25. What is the difference between a locator and an element?

A locator is a way to identify an element and interact with it.

Playwright locators also support auto-waiting and retry behavior for
actions and assertions.

------------------------------------------------------------------------

# Assertion Questions

## 26. Is `console.log()` an assertion?

No.

`console.log()` only prints information.

An assertion validates expected behavior.

Example:

``` typescript
console.log("Login successful");
```

does not validate login.

A proper assertion could be:

``` typescript
await expect(page).toHaveURL(/dashboard/);
```

------------------------------------------------------------------------

## 27. Why should we use assertions?

Assertions verify whether the actual result matches the expected result.

Without assertions, a test may perform actions without actually
validating the application behavior.

------------------------------------------------------------------------

# Testing Concept Questions

## 28. What is smoke testing?

Smoke testing is a basic set of high-priority tests used to verify
whether the major functionality of an application is working.

Examples:

-   Application opens
-   Login works
-   Main module opens
-   Critical workflow works

------------------------------------------------------------------------

## 29. What is negative testing?

Negative testing verifies how the application behaves when invalid or
unexpected input is provided.

Examples:

-   Invalid username
-   Invalid password
-   Empty credentials
-   Invalid data

------------------------------------------------------------------------

## 30. Why do we create separate valid and invalid login tests?

Because they validate different business scenarios.

**Valid login:**

Expected result is successful authentication.

**Invalid login:**

Expected result is rejection with the appropriate error message.

------------------------------------------------------------------------

# Practical Interview Questions

## 31. How would you execute only one test while debugging?

Use:

``` typescript
test.only("Login test", async ({ page }) => {
});
```

------------------------------------------------------------------------

## 32. How would you temporarily skip a test?

Use:

``` typescript
test.skip("Login test", async ({ page }) => {
});
```

------------------------------------------------------------------------

## 33. How would you mark a known failing test?

Use:

``` typescript
test.fail("Known issue", async ({ page }) => {
});
```

------------------------------------------------------------------------

## 34. How would you run tests inside a describe block in parallel?

Use:

``` typescript
test.describe.configure({
    mode: "parallel"
});
```

------------------------------------------------------------------------

## 35. What happens if three tests each take 30 seconds and they run sequentially?

Approximately:

``` text
30 + 30 + 30 = 90 seconds
```

------------------------------------------------------------------------

## 36. What happens if the same three independent tests run in parallel with enough workers?

The execution time can be closer to the duration of the slowest test
rather than the sum of all three.

In the example:

``` text
30 seconds
```

Actual time depends on machine resources and configuration.

------------------------------------------------------------------------

# Scenario-Based Questions

## 37. You have 100 tests and one test is failing because of a known product bug. What would you use?

If the test should still execute and the failure is currently expected:

``` typescript
test.fail();
```

If the test should not execute at all:

``` typescript
test.skip();
```

The choice depends on the testing strategy.

------------------------------------------------------------------------

## 38. A test takes longer than other tests because the application performs a long operation. What can you use?

`test.slow()` can be used when the test legitimately requires more
execution time.

However, first check whether the test has unnecessary waits or
synchronization issues.

------------------------------------------------------------------------

## 39. Your parallel tests are failing because they modify the same user data. What could be the problem?

The tests may not be independent.

Possible solutions include:

-   Separate test data
-   Separate users
-   Proper fixtures
-   Test isolation
-   Avoiding shared mutable state

------------------------------------------------------------------------

## 40. Why should `test.only()` not be committed?

Because `test.only()` restricts execution to the selected test.

If committed accidentally, the CI pipeline may execute only that test
instead of the complete suite.

------------------------------------------------------------------------

# Interview One-Line Revision

  Topic               Key Point
  ------------------- ----------------------------------------------
  Playwright          Browser automation library
  Playwright Test     Test runner/framework
  `test()`            Defines a test
  `test.describe()`   Groups tests
  `test.only()`       Runs selected test only
  `test.skip()`       Skips test
  `test.fail()`       Marks failure as expected
  `test.slow()`       Gives a test more timeout
  Parallel            Executes independent tests simultaneously
  Fixture             Provides test setup/resources
  `page`              Browser page fixture
  `page.goto()`       Navigates to URL
  `page.locator()`    Locates an element
  Assertion           Validates expected behavior
  `console.log()`     Prints information
  Smoke testing       Validates critical application functionality
  Negative testing    Validates invalid/unexpected scenarios


---

# Data-Driven Testing – Interview Questions

## 41. How can you read JSON data in Playwright?

JSON data can be imported into a TypeScript test file.

```typescript
import loginData from "../../data/loginData.json";
```

The data can then be accessed using properties such as:

```typescript
loginData[0].username
loginData[0].password
```

---

## 42. Why is JSON commonly used for test data?

JSON is useful because it:

- Supports objects and arrays
- Supports nested data
- Is easy to read and maintain
- Integrates naturally with JavaScript and TypeScript

---

## 43. How do you read a CSV file in Playwright?

A CSV file can be read using Node.js `fs` and parsed using a CSV parsing library.

```typescript
import fs from "fs";
import { parse } from "csv-parse/sync";

const csvData = fs.readFileSync("data/logindata.csv", "utf-8");

const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});
```

---

## 44. Why do we use `fs` when reading CSV?

`fs` is the Node.js File System module.

It provides APIs to read and write files.

Example:

```typescript
fs.readFileSync("data/logindata.csv", "utf-8");
```

---

## 45. Why do we use `utf-8` while reading CSV?

`utf-8` specifies the character encoding used to convert the file bytes into readable text.

```typescript
fs.readFileSync("data/logindata.csv", "utf-8");
```

Without the encoding, the result can be returned as a Buffer instead of a string.

---

## 46. What is `csv-parse`?

`csv-parse` is a Node.js package used to parse CSV data into JavaScript objects or arrays.

Example:

```typescript
const records = parse(csvData, {
    columns: true
});
```

---

## 47. What does `columns: true` do in CSV parsing?

It tells the parser to use the first row of the CSV as column/property names.

For example:

```csv
username,password
admin,admin123
```

can become:

```typescript
{
    username: "admin",
    password: "admin123"
}
```

---

## 48. What does `skip_empty_lines: true` do?

It tells the CSV parser to ignore empty lines.

```typescript
skip_empty_lines: true
```

This prevents unnecessary empty records from being created.

---

## 49. What is the difference between JSON and CSV for test data?

**JSON:**

- Structured data
- Supports nested objects
- Good for complex test data

**CSV:**

- Tabular data
- Easy to maintain in Excel
- Good for large numbers of simple records

---

## 50. Which is mostly used in industry, JSON or CSV?

There is no single universal choice.

JSON is commonly preferred when test data is structured or nested.

CSV is useful when large amounts of tabular data need to be maintained by testers or business users, especially through spreadsheet tools.

The choice depends on the project requirements.

---

## 51. What is a `.env` file?

A `.env` file is commonly used to store environment-specific configuration values.

Example:

```env
BASE_URL=https://example.com
USERNAME=admin
PASSWORD=admin123
```

---

## 52. How do you read `.env` values in Playwright?

A common approach is to use the `dotenv` package.

```typescript
import dotenv from "dotenv";

dotenv.config();
```

Then access values using:

```typescript
process.env.BASE_URL
process.env.USERNAME
process.env.PASSWORD
```

---

## 53. Why should we use `.env` instead of hard-coding credentials?

It helps separate configuration from test code and reduces the chance of exposing credentials directly in source files.

However, `.env` is not automatically secure. Real secrets must still be protected and should not be committed to source control.

---

## 54. Should `.env` be committed to Git?

A `.env` file containing secrets should generally not be committed.

Add it to `.gitignore`.

For CI/CD, use the CI platform's secret-management mechanism where appropriate.

---

## 55. Can `.env` be used with Page Object Model?

Yes.

The test can read environment values and pass them to Page Object methods.

Example:

```typescript
await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
);
```

The Page Object continues to contain the interaction logic.

---

## 56. What is data-driven testing?

Data-driven testing means executing the same test logic using multiple sets of input data.

For example:

```text
Test Logic
   +
User 1
User 2
User 3
```

The same test can run against all three data sets.

---

## 57. What are common sources of test data in Playwright?

Common sources include:

- JSON
- CSV
- `.env`
- API responses
- Database
- External services

---

## 58. How can JSON or CSV data be used with Page Object Model?

The test file reads the data and passes it to the Page Object.

Example:

```typescript
await loginPage.login(
    records[i].username,
    records[i].password
);
```

The Page Object handles the actual UI interaction.

---

## 59. What is the difference between test data and environment configuration?

**Test data** is input used to validate a test scenario.

Examples:

```text
Customer name
Username
Product name
Lead information
```

**Environment configuration** identifies where and how the test should run.

Examples:

```text
Base URL
Environment name
API endpoint
Credentials
```

---

## 60. When would you choose JSON, CSV or `.env`?

### Choose JSON when:

- Data is structured
- Nested objects are required
- Test data is closely related to JavaScript/TypeScript objects

### Choose CSV when:

- Data is tabular
- Many rows are required
- Testers/business users need spreadsheet-friendly data

### Choose `.env` when:

- Values are environment-specific
- Configuration needs to be separated from code
- Secrets/configuration are injected into the test environment

---

# Scenario-Based Data Questions

## 61. You have 100 username/password combinations in an Excel-friendly format. What would you consider?

CSV is a good option when the data is simple and tabular.

---

## 62. You have customer data with nested address, payment and contact objects. What would you consider?

JSON is more suitable because it supports nested structures.

---

## 63. You need to execute the same tests against QA and staging. What would you consider?

Environment configuration such as `.env` files or CI/CD environment variables can be used for environment-specific values.

---

## 64. You have usernames and passwords in a `.env` file. Is that automatically secure?

No.

A `.env` file is a configuration mechanism, not a security system.

Sensitive values should be protected, excluded from source control, and preferably managed through secure CI/CD secret storage.

---

## 65. How would you design a Playwright project using JSON, CSV and `.env`?

A common structure is:

```text
Project
│
├── data
│   ├── loginData.json
│   └── logindata.csv
│
├── pages
│   ├── LoginPage.ts
│   └── CreateLeadPage.ts
│
├── tests
│   └── testcases
│
├── .env
└── playwright.config.ts
```

The responsibility can be separated as:

```text
JSON / CSV / .env
        ↓
     Test Data
        ↓
     Test File
        ↓
    Page Object
        ↓
   Application
```

---

# Quick Revision – Data Handling

| Topic | Key Point |
|---|---|
| JSON | Structured test data |
| CSV | Tabular test data |
| `.env` | Environment configuration |
| `fs` | Node.js file system module |
| `utf-8` | Character encoding |
| `csv-parse` | Parses CSV data |
| `columns: true` | First CSV row becomes property names |
| `skip_empty_lines` | Ignores empty CSV rows |
| `dotenv` | Loads `.env` values |
| `process.env` | Accesses environment variables |
| Data-driven testing | Same test logic with multiple data sets |
| POM + data | Test reads data; Page Object handles UI |
