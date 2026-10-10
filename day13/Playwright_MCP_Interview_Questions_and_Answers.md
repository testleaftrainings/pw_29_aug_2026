# Playwright MCP — Interview Questions and Answers

## Beginner Level

### 1. What does MCP stand for?
**Answer:** MCP stands for Model Context Protocol. It is an open protocol that standardizes how AI applications connect to external tools and data sources.

### 2. What is Playwright MCP?
**Answer:** Playwright MCP is an MCP server that exposes browser interaction and inspection capabilities to an MCP-compatible AI client. The client can use these tools to inspect pages and interact with web applications.

### 3. Why would a tester use Playwright MCP?
**Answer:** A tester can use it to help inspect a page, identify UI elements, understand application behavior, prepare test scenarios, and investigate failures with browser evidence.

### 4. Is Playwright MCP the same as Playwright Test?
**Answer:** No. Playwright MCP connects an AI client to browser tools. Playwright Test is a test framework used to write and execute repeatable tests with assertions, fixtures, retries, and reports.

### 5. What are the main components in an MCP setup?
**Answer:** The main components are the MCP host or AI application, an MCP client, the MCP server, the browser automation layer, and the web application.

### 6. What is the role of the MCP server?
**Answer:** It exposes tools or other supported capabilities that the MCP client can call. In this case, those tools enable browser-related actions and inspection.

### 7. Does using Playwright MCP automatically create an automated test suite?
**Answer:** No. MCP can assist with browser exploration and test development, but a reusable test suite still needs to be authored, reviewed, and executed using an appropriate framework such as Playwright Test.

### 8. What is a test locator?
**Answer:** A locator identifies an element on a page so that a test can interact with it or assert its state. Examples include role-based, label-based, placeholder-based, and test-ID locators.

## Intermediate Level

### 9. Explain the Planner, Generator, and Healer roles.
**Answer:**
- **Planner:** Inspects the application and produces test scenarios and expected results.
- **Generator:** Uses an approved test plan and inspected page evidence to create automated tests.
- **Healer:** Investigates test failures, identifies root causes, applies justified fixes, and reruns the tests.

These are workflow roles or prompt patterns; they are not necessarily three built-in MCP server components.

### 10. What information should a test plan contain?
**Answer:** It should contain a scenario ID, description, preconditions, steps, test data, expected results, and optionally priority and test type.

### 11. How should the Generator choose locators?
**Answer:** It should inspect the page and prefer accessible, stable locators such as `getByRole()`, `getByLabel()`, `getByPlaceholder()`, and `getByTestId()`. It should avoid guessing labels or relying unnecessarily on brittle XPath or positional selectors.

### 12. Why should expected error messages be verified before assertions are written?
**Answer:** Applications can display different messages or behaviors depending on validation and authentication logic. Guessing the message can create false failures or hide real defects. The expected result should be based on observed and confirmed behavior.

### 13. How can MCP help with test healing?
**Answer:** The AI client can use browser tools to inspect the current page and relevant elements, compare that evidence with the failing test and error output, identify the likely cause, and help validate a correction.

### 14. What information should be supplied when asking a Healer to fix a test?
**Answer:** Provide the failing test, error message, stack trace, relevant report output, test data with secrets removed, and browser or DOM evidence where available. Include the intended test behavior so the fix preserves coverage.

### 15. Why should fixed waits be avoided?
**Answer:** A fixed wait pauses for a predetermined duration regardless of page state. It can make tests slower and flaky. Prefer Playwright auto-waiting, locator state checks, and web-first assertions.

### 16. What is a web-first assertion?
**Answer:** It is an assertion that automatically retries until the expected condition is met or the timeout expires. For example:

```typescript
await expect(page.getByRole("button", { name: "Login" }))
  .toBeVisible();
```

Use the actual accessible name observed on the page.

### 17. How do you keep login tests independent?
**Answer:** Each test should establish its own starting state, normally by navigating to the login page and supplying its own test data. Negative tests should not depend on another test having logged in successfully.

### 18. How should credentials be handled in generated tests?
**Answer:** Store credentials in environment variables or an approved secret store. Avoid hardcoding secrets in reusable source code and never expose passwords in logs, screenshots, or reports.

## Advanced Level

### 19. Can Playwright MCP replace Playwright Test in a CI pipeline?
**Answer:** Not necessarily. MCP is an integration protocol for exposing tools to an AI client, while Playwright Test is designed for repeatable test execution and reporting. A CI pipeline commonly runs the reviewed Playwright Test suite; MCP may support development or diagnosis depending on the environment.

### 20. What would you do if an MCP-generated locator stops working?
**Answer:** Inspect the current page and locator evidence, verify whether the UI changed, and replace the locator with the most stable suitable alternative. Then rerun the affected test and related coverage. Do not simply remove the assertion.

### 21. What is the difference between a locator failure and an assertion failure?
**Answer:** A locator failure means the test could not resolve or interact with the intended element as expected. An assertion failure means the test evaluated a condition—such as visibility, text, or URL—and the observed result did not satisfy it. Diagnosis requires checking the error output and current page state.

### 22. What should a Healer do if the application behavior differs from the approved test plan?
**Answer:** Gather evidence and explain the discrepancy. Update the test expectation only after confirming the actual behavior and determining that the plan or expectation is incorrect. If the application behavior is a defect, report it rather than weakening the test.

### 23. How do you verify a successful login?
**Answer:** Use observed application behavior, such as a verified landing-page URL, a distinctive visible element, or a confirmed authenticated state. Avoid relying on a guessed URL or generic text that could appear on the login page too.

### 24. How do you test invalid login credentials safely?
**Answer:** Use an authorized test environment and approved test accounts. Submit invalid test data, verify the actual user-facing response, and avoid repeated attempts that could lock accounts or trigger security controls.

### 25. What are common limitations of Playwright MCP?
**Answer:** Available actions depend on the server version, MCP client, configuration, and permissions. Browser exploration may not cover every state, and AI-generated tests can contain incorrect assumptions. Tests must be reviewed and actually executed before their results are trusted.

### 26. How would you investigate a test that passes locally but fails in CI?
**Answer:** Compare browser and dependency versions, environment variables, base URL, network access, authentication data, test parallelism, traces, screenshots, and reports. Reproduce the failure where possible, identify the evidence-supported cause, apply the smallest fix, and rerun the test in the relevant environment.

### 27. How can you prevent a Healer from hiding defects?
**Answer:** Require it to preserve the test objective, explain the root cause, justify assertion changes, retain coverage, and rerun the affected tests. It must not delete tests, bypass authentication, or weaken assertions merely to obtain a pass.

### 28. Describe an end-to-end MCP-assisted login testing workflow.
**Answer:**
1. Connect and verify the MCP server.
2. Ask the Planner to inspect the login page and create scenarios.
3. Review and approve the plan.
4. Ask the Generator to create independent Playwright Test cases using verified locators and expected behavior.
5. Run the suite and review the report.
6. Provide failures and evidence to the Healer.
7. Review the proposed fix and rerun the affected tests.
8. Report passed tests, remaining failures, and any limitations.

## Scenario-Based Questions

### 29. The login button is visible, but clicking it does not navigate. What would you check?
**Answer:** Check whether the click targets the correct element, whether fields are valid, whether a validation message appears, whether a request fails, and whether the application intentionally stays on the same page. Inspect browser state and test output before changing the assertion.

### 30. The invalid-password test fails because the expected error text is not found. What is your next step?
**Answer:** Inspect the actual response and DOM. Determine whether the application shows a different message, inline validation, a redirect, or no visible feedback. Update the test only after confirming the intended and actual behavior.

### 31. The test passes only when run after the valid-login test. What does this suggest?
**Answer:** The test likely depends on shared state, such as an authenticated session, cookies, or execution order. Make it independent by establishing the intended starting state and handling browser context or authentication state explicitly.

### 32. The Healer suggests removing a failing negative test. Should you accept it?
**Answer:** No, not without a valid reason tied to the test objective. Investigate the root cause, preserve coverage, fix the test or report an application defect, and document any justified change.

### 33. The page has two buttons with the same accessible name. How should you choose a locator?
**Answer:** Inspect the surrounding UI and accessible structure. Prefer a locator scoped to a meaningful container or improve the application's accessible names or test IDs if possible. Use positional selection only when the order is meaningful and stable.

### 34. How would you prove that a healed test is actually fixed?
**Answer:** Rerun the affected test, inspect the result and any trace or report, and run the full relevant suite when possible. Confirm that the original objective and assertions remain intact, and report any remaining failures honestly.

## Quick Revision

- MCP = Model Context Protocol.
- Playwright MCP exposes browser tools to an MCP-compatible client.
- Playwright Test is the framework for repeatable automated tests.
- Planner = decide what to test.
- Generator = create tests from the approved plan.
- Healer = diagnose and repair failures using evidence.
- Prefer stable locators and web-first assertions.
- Verify application behavior; do not invent URLs, messages, or locators.
- Preserve test coverage and never claim unrun tests passed.
