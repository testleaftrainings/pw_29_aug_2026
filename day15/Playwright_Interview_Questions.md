# Playwright with TypeScript -- Interview Questions

Questions and concise sample answers based on the uploaded code
examples.

## 1. Playwright Locators

### Q1. What is a locator in Playwright?

**Sample answer:** A locator identifies an element on the page so the
test can perform actions or assertions against it.

### Q2. What is the difference between `getByRole()` and `locator()`?

**Sample answer:** `getByRole()` uses an element's role and accessible
name; `locator()` accepts selector syntax such as CSS or XPath.

### Q3. When would you use `getByLabel()`?

**Sample answer:** When a form control is associated with a label, such
as a password input labelled Password.

### Q4. Why might `getByText()` click the wrong element?

**Sample answer:** The text may match multiple elements or a parent and
child. Make the locator unique, for example by using exact matching or a
more specific locator.

### Q5. Which locator strategy should generally be preferred?

**Sample answer:** Prefer user-facing locators such as role and label
when they are reliable and uniquely identify the target; use CSS
selectors when appropriate.

## 2. Storage State and Authentication

### Q6. What is `storageState` in Playwright?

**Sample answer:** It saves browser state such as cookies and local
storage so tests can reuse an authenticated session.

### Q7. How do you save storage state?

**Sample answer:** Call
`await page.context().storageState({ path: 'SSData/login_leaftaps.json' })`
after successful login.

### Q8. How do you reuse saved storage state?

**Sample answer:** Configure
`test.use({ storageState: 'SSData/login_leaftaps.json' })` or set
`storageState` in the Playwright project configuration.

### Q9. The JSON file is created, but the test is still redirected to login. What would you check?

**Sample answer:** Verify the saved state was captured after successful
authentication, check the file path, confirm the app uses cookies/local
storage supported by storage state, and check whether the session
expired.

### Q10. Why should storage-state files not be committed to Git?

**Sample answer:** They may contain reusable authentication cookies or
other sensitive session data.

## 3. Playwright Hooks

### Q11. What are Playwright test hooks?

**Sample answer:** Lifecycle callbacks used to perform setup and cleanup
before or after tests.

### Q12. What is the difference between `beforeAll` and `beforeEach`?

**Sample answer:** `beforeAll` runs once per worker in the relevant
scope; `beforeEach` runs before every test in that scope.

### Q13. What is the difference between `afterEach` and `afterAll`?

**Sample answer:** `afterEach` runs after every test; `afterAll` runs
once per worker in the relevant scope after the tests.

### Q14. Can you use the test-scoped `page` fixture directly in `beforeAll`?

**Sample answer:** Not as the normal test-scoped fixture. Use an
appropriate worker-scoped fixture or create and manage a
browser/context/page explicitly when shared setup is genuinely needed.

### Q15. Why should tests be independent?

**Sample answer:** Independent tests are more reliable, easier to debug,
and safer to run in parallel or retry.

## 4. API Testing with Axios and Jira

### Q16. What does `axios.post()` do?

**Sample answer:** It sends an HTTP POST request with a request body and
optional configuration.

### Q17. What fields are present in the Jira issue-creation payload shown in the example?

**Sample answer:** Project key, issue type, summary, and description.

### Q18. What is the purpose of the `Content-Type` header?

**Sample answer:** It tells the server the media type of the request
body; `application/json` indicates JSON.

### Q19. How should Jira Cloud credentials be handled?

**Sample answer:** Use the account email and API token through
environment variables or a secret manager; do not hard-code them.

### Q20. What should be asserted after creating an issue through an API?

**Sample answer:** Check the HTTP status and validate key response
fields such as the created issue key or ID.

### Q21. How should API errors be handled?

**Sample answer:** Catch the error, inspect a safe status/message, and
avoid logging credentials or sensitive headers.

### Q22. What should you do if a real API token was committed or shared?

**Sample answer:** Revoke or rotate it immediately, then remove it from
active code and secure the replacement.

## 5. Scenario-Based Questions

### Q23. A locator times out even though the element is visible. What would you investigate?

**Sample answer:** Check whether the locator matches the correct
element, whether there are duplicate matches, whether the element is in
a frame, and whether an overlay or application state prevents the
action.

### Q24. A test passes alone but fails in a full suite. What might cause this?

**Sample answer:** Shared mutable data, dependency on test order, reused
state, timing assumptions, or incomplete cleanup. Make setup isolated
and tests independent.

### Q25. A storage-state file exists but is not loaded. What is a likely cause?

**Sample answer:** The configured relative path may resolve from a
different working directory, or the file path/configuration may not
match.

### Q26. The Jira API returns an authorization error. What would you check?

**Sample answer:** Verify the account email and API token, permissions,
authentication method, Jira base URL, and whether the token is valid.

### Q27. The API request returns success, but the expected issue is not visible. What would you verify?

**Sample answer:** Check the returned issue key, target project,
permissions, filters, and whether the UI is showing the same Jira
instance.

------------------------------------------------------------------------

**Interview tip:** Treat these answers as revision points. Expand them
with examples from your own project experience during an interview.
