# Playwright MCP Prompts — Leaftaps Login Functionality

Application URL: https://leaftaps.com/opentaps/control/main

## 1. Prompt for Planner

Act as a Playwright Test Planner.

**Application URL:** https://leaftaps.com/opentaps/control/main  
**Feature:** Leaftaps Login Functionality

### Objective
Analyze the Leaftaps login page and create a comprehensive test plan for login functionality.

### Test scenarios to cover
1. Verify that the login page loads successfully.
2. Verify login with valid username and password.
3. Verify login with an invalid username and valid password.
4. Verify login with a valid username and invalid password.
5. Verify login with an invalid username and password.
6. Verify login with empty username and password.
7. Verify login with an empty username.
8. Verify login with an empty password.
9. Verify that successful login navigates to the expected landing page.
10. Verify that appropriate error messages are displayed for unsuccessful login attempts.
11. Verify password masking.
12. Verify that the login form can be submitted using the Enter key, if supported.

### Instructions
- Use Playwright MCP to inspect the application and identify the actual login fields, buttons, and page behavior.
- Do not assume element names, locators, or error messages without inspecting the page.
- Identify positive and negative test scenarios.
- Include test scenario ID, description, preconditions, test steps, test data, and expected results.
- Prioritize stable, user-facing validations.
- Do not modify application data or perform destructive actions.
- Do not generate test code yet. Produce only the test plan.

---

## 2. Prompt for Generator

Act as a Playwright Test Generator.

**Application URL:** https://leaftaps.com/opentaps/control/main  
**Feature:** Leaftaps Login Functionality

### Credentials for the positive login test
- Username: `Demosalesmanager`
- Password: `crmsfa`

### Task
Generate Playwright automation tests in TypeScript based on the approved test plan created by the Planner.

### Requirements
1. Use the Playwright Test framework (`@playwright/test`).
2. Create a test file named `login.spec.ts`.
3. Use a suitable `test.describe()` block for login functionality.
4. Cover valid login, invalid credentials, empty fields, password masking, and successful navigation, wherever applicable to the actual application.
5. Inspect the page using Playwright MCP before selecting locators.
6. Prefer `getByRole()`, `getByLabel()`, `getByPlaceholder()`, and stable attributes where appropriate.
7. Avoid brittle XPath and positional locators unless necessary.
8. Use web-first assertions such as `expect(locator).toBeVisible()` and `expect(page).toHaveURL()` where appropriate.
9. Do not use fixed waits such as `page.waitForTimeout()`.
10. Keep each test independent and ensure that negative login tests do not depend on a successful login test.
11. Use `test.step()` to organize major actions when useful.
12. Keep credentials in test configuration or environment variables for maintainability; do not hardcode them in reusable production test code.
13. Do not invent error messages or expected URLs. Verify the actual application behavior before defining assertions.
14. Ensure tests do not depend on a particular test execution order.
15. Provide the complete TypeScript code, required imports, and execution command.

### Expected output
- `login.spec.ts`
- Explanation of the scenarios covered
- Commands to execute the tests

Generate the code only after analyzing the page and the approved test plan.

---

## 3. Prompt for Healer

Act as a Playwright Test Healer.

**Application URL:** https://leaftaps.com/opentaps/control/main  
**Feature:** Leaftaps Login Functionality

### Task
Analyze failed Playwright TypeScript login tests, identify the root cause, and repair the tests.

### Instructions
1. Inspect the failing test, error message, stack trace, and Playwright execution report.
2. Use Playwright MCP to inspect the current application state and relevant DOM elements.
3. Identify whether the failure is caused by an incorrect locator, timing issue, navigation, authentication behavior, test data, or an incorrect assertion.
4. Verify the actual application behavior before changing the code.
5. Update locators using stable, user-facing attributes wherever possible.
6. Replace fixed waits with Playwright auto-waiting, locator waiting, or web-first assertions.
7. Correct assertions only when they do not match the application's verified behavior.
8. Preserve the original test objective and coverage.
9. Do not remove failing tests or weaken assertions merely to make the suite pass.
10. Do not change the application or bypass authentication to make a test pass.
11. Keep tests independent and repeatable.
12. Rerun the affected test and verify the fix. If possible, run the complete login test suite.
13. Explain the root cause, the changes made, and the test results.

### Credentials for valid-login testing
- Username: `Demosalesmanager`
- Password: `crmsfa`

### Security requirements
- Use credentials only for the authorized test environment.
- Do not expose credentials in logs, screenshots, reports, or generated source code.
- Do not perform destructive actions.

### Expected output
- Corrected `login.spec.ts`
- Root cause analysis
- Summary of changes
- Test execution results, including any remaining failures
