# Playwright with TypeScript -- Topic Notes

## 1. Playwright Locators

Locators identify elements on a page so a test can interact with them.
Prefer user-facing locators when possible because they are generally
more resilient and accessible.

### Common locator methods

-   `page.getByRole("button", { name: "Login" })` -- locates an element
    by its role and accessible name.
-   `page.getByLabel("Password")` -- locates a form control through its
    associated label.
-   `page.getByText("CRM/SFA")` -- locates an element by visible text.
-   `page.locator("#createLeadForm_companyName")` -- locates an element
    using a CSS selector.
-   `page.locator('[name="submitButton"]')` -- locates an element by its
    `name` attribute.

### Example

``` ts
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
await page.getByLabel("Password").fill("crmsfa");
await page.getByRole("button", { name: "Login" }).click();
```

### Good practices

-   Prefer `getByRole`, `getByLabel`, and other user-facing locators
    when they uniquely identify the element.
-   Use CSS selectors when an accessible locator is not practical.
-   Use `{ exact: true }` with text locators when an exact text match is
    required.
-   If a locator matches more than one element, narrow it down rather
    than relying on an arbitrary match.
-   Use `fill()` for text inputs and `click()` for clickable controls.

## 2. Saving and Reusing Browser Storage State

Storage state allows a test to reuse browser authentication state
instead of logging in for every test. It can include cookies and local
storage data.

### Save the state after login

``` ts
import { test } from "@playwright/test";

test("save login state", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/login");
  await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
  await page.getByLabel("Password").fill("crmsfa");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("CRM/SFA").click();

  await page.context().storageState({ path: "SSData/login_leaftaps.json" });
});
```

### Reuse the saved state

``` ts
import { test } from "@playwright/test";

test.use({ storageState: "SSData/login_leaftaps.json" });

test("create lead", async ({ page }) => {
  await page.goto("https://leaftaps.com/crmsfa/control/main");
  await page.getByText("Leads", { exact: true }).click();
  await page.getByRole("link", { name: "Create Lead" }).click();
  await page.locator("#createLeadForm_companyName").fill("TestLeaf");
  await page.locator("#createLeadForm_firstName").fill("Vineeth");
  await page.locator("#createLeadForm_lastName").fill("Rajendran");
  await page.locator('[name="submitButton"]').click();
});
```

### Troubleshooting

-   Confirm that the JSON file was generated at the expected path.
-   Confirm that the path in `storageState` exactly matches the saved
    file location.
-   Make sure the state was saved after a successful login and after the
    application established its authenticated session.
-   If the application uses session storage, note that Playwright's
    standard storage-state file does not automatically persist session
    storage.
-   Authentication state may expire; regenerate it when necessary.
-   Treat storage-state files as secrets because they can contain
    reusable authentication data. Do not commit them to source control.

## 3. Playwright Test Hooks

Hooks run setup or cleanup code at defined points in the test lifecycle.

  -----------------------------------------------------------------------
  Hook                    When it runs            Typical use
  ----------------------- ----------------------- -----------------------
  `test.beforeAll()`      Once before tests in    Start shared setup or
                          the relevant scope      prepare test data

  `test.beforeEach()`     Before each test        Navigate to a page or
                                                  prepare per-test state

  `test.afterEach()`      After each test         Clean up test-specific
                                                  data or capture
                                                  diagnostics

  `test.afterAll()`       Once after tests in the Release shared
                          relevant scope          resources or perform
                                                  final cleanup
  -----------------------------------------------------------------------

### Example

``` ts
import { test } from "@playwright/test";

test.beforeAll(async () => {
  console.log("Before All Test");
});

test.beforeEach(async () => {
  console.log("Before each Test");
});

test("testcase1", async ({ page }) => {
  console.log("testcase1 executed");
});

test("testcase2", async ({ page }) => {
  console.log("testcase2 executed");
});

test.afterEach(async () => {
  console.log("After each Test");
});

test.afterAll(async () => {
  console.log("After All Test");
});
```

### Important points

-   `beforeEach` and `afterEach` run for each test in their scope.
-   `beforeAll` and `afterAll` run once per worker for their scope; they
    are not a guarantee of one execution across an entire multi-worker
    run.
-   The `page` fixture is test-scoped by default. Do not assume the same
    test-scoped `page` can be used directly inside `beforeAll`.
-   Prefer isolated test setup so tests can run independently and in
    parallel.

## 4. API Testing -- Creating a Jira Issue with Axios

The uploaded API example sends an HTTP `POST` request to Jira's issue
endpoint using Axios.

### Main concepts

-   `axios.post(url, data, config)` sends a POST request.
-   The request body contains a `fields` object such as project key,
    issue type, summary, and description.
-   `Content-Type: application/json` indicates that the request body is
    JSON.
-   Basic authentication can be supplied through Axios's `auth`
    configuration, although Jira Cloud commonly uses an account email
    and API token.
-   `response.data` contains the response body returned by the server.
-   A successful issue-creation request normally returns a successful
    HTTP status and issue details; tests should assert the status and
    important response fields rather than only printing the response.

### Safe implementation pattern

``` ts
import axios from "axios";

async function createIssue() {
  const response = await axios.post(
    `${process.env.JIRA_BASE_URL}/rest/api/2/issue`,
    {
      fields: {
        project: { key: "PA" },
        issuetype: { name: "Bug" },
        summary: "Login page issue with application not working as expected",
        description: "Login failed - issue created by API test"
      }
    },
    {
      headers: { "Content-Type": "application/json" },
      auth: {
        username: process.env.JIRA_EMAIL!,
        password: process.env.JIRA_API_TOKEN!
      }
    }
  );

  console.log(response.status);
  console.log(response.data);
}

createIssue().catch(error => {
  console.error(error.response?.status ?? error.message);
});
```

### Security and reliability

-   Never hard-code passwords or API tokens in source code.
-   Store credentials in environment variables or a secure secret
    manager.
-   If a real token or password has been exposed in source code,
    revoke/rotate it immediately.
-   Do not commit `.env` files; add them to `.gitignore`.
-   Validate the HTTP status and returned issue key/ID.
-   Handle errors and avoid printing sensitive request headers or
    credentials.
-   Confirm the Jira project key, issue type, permissions, and API
    endpoint for the target Jira instance.

## 5. Quick Revision

-   **Locator:** A way to find a page element.
-   **`storageState`:** Saves browser authentication state for reuse.
-   **`beforeEach`:** Runs before each test in scope.
-   **`afterEach`:** Runs after each test in scope.
-   **`beforeAll`:** Runs once per worker for the hook's scope before
    tests.
-   **`afterAll`:** Runs once per worker for the hook's scope after
    tests.
-   **Axios POST:** Sends data to an API endpoint to create a resource.
-   **Environment variables:** Keep secrets outside source code.
