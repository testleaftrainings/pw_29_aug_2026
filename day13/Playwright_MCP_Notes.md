# Playwright MCP — Notes

## 1. What is MCP?

MCP stands for **Model Context Protocol**. It is an open protocol that allows an AI application to connect to external tools and data sources through a consistent interface.

In test automation, MCP can let an AI assistant interact with browser automation tools, inspect a web page, and gather evidence to help plan, generate, or debug tests.

## 2. What is Playwright MCP?

Playwright MCP is an MCP server that exposes browser automation capabilities to an MCP-compatible AI client. It can help the client interact with a browser and inspect web application behavior.

Typical activities include:
- Opening a web page.
- Inspecting page content and interactive elements.
- Clicking buttons and links.
- Filling text fields.
- Taking screenshots or examining page state, depending on the available tools.
- Gathering evidence to support test planning and troubleshooting.

**Important:** The exact capabilities depend on the Playwright MCP server version and the tools enabled in the MCP client.

## 3. MCP architecture

The main components are:

1. **MCP host/client:** The AI application where the user enters a request.
2. **MCP client:** Manages communication with an MCP server.
3. **MCP server:** Exposes tools and resources for browser interaction.
4. **Browser automation layer:** Performs browser actions and returns results.
5. **Web application:** The application being inspected or tested.

Typical flow:

`User request → AI host/client → Playwright MCP server → Browser → Web application`

The browser result is returned through the server to the client, where the AI can use it to decide the next action.

## 4. Playwright MCP vs. Playwright Test

| Playwright MCP | Playwright Test |
|---|---|
| Connects an AI client to browser tools through MCP. | A test framework for authoring and running automated tests. |
| Useful for interactive inspection and AI-assisted workflows. | Provides test cases, fixtures, assertions, retries, reports, and parallel execution. |
| Tool usage depends on the MCP server and client. | Tests are generally written in JavaScript or TypeScript. |
| Does not automatically mean a reusable test suite has been created. | Runs repeatable tests from source files such as `login.spec.ts`. |

They can complement each other: MCP can help inspect the page and gather evidence, while Playwright Test can execute the final repeatable test suite.

## 5. Common use cases

### Test planning
- Inspect the application before writing scenarios.
- Identify visible fields, buttons, links, labels, and navigation behavior.
- Build positive and negative scenarios from observed behavior.
- Record assumptions and areas that need clarification.

### Test generation
- Use an approved test plan as input.
- Select locators based on inspected page evidence.
- Generate TypeScript tests using `@playwright/test`.
- Use assertions that reflect verified application behavior.

### Test healing
- Inspect the failed test and error output.
- Check the current DOM and browser state.
- Determine whether the issue is a locator, timing, navigation, data, environment, or assertion problem.
- Make the smallest valid correction and rerun the test.

## 6. Planner, Generator, and Healer workflow

### Planner
**Purpose:** Decide what should be tested.

Expected output:
- Scenario ID and title.
- Preconditions.
- Steps and test data.
- Expected result.
- Priority and positive/negative classification, when useful.

The Planner should inspect the application rather than guess field names, error messages, or URLs.

### Generator
**Purpose:** Turn an approved plan into executable tests.

Expected output:
- Test source such as `login.spec.ts`.
- Appropriate imports and test structure.
- Stable locators.
- Independent tests.
- Web-first assertions.
- Run commands and scenario coverage summary.

The Generator should not invent expected results or silently omit difficult scenarios.

### Healer
**Purpose:** Diagnose and repair failed tests.

Expected output:
- Root cause supported by evidence.
- Code changes and their rationale.
- Rerun results.
- Remaining failures or environment limitations.

The Healer should preserve test intent and should not delete tests, weaken assertions, or bypass authentication simply to get a passing result.

## 7. Setting up Playwright MCP in VS Code

The exact steps vary with the MCP client and server version. A general setup process is:

1. Install a supported Node.js version.
2. Open the project in VS Code.
3. Install or configure an MCP-compatible client/extension.
4. Follow the official Playwright MCP installation instructions for the selected package and version.
5. Add the server configuration in the MCP client's supported configuration file.
6. Restart or reload the MCP client if required.
7. Confirm that the Playwright MCP tools appear and are enabled.
8. Ask the client to open a test page and inspect its visible content.
9. Verify that the browser interaction works before using MCP for a larger task.

Use the current official documentation for exact package names and configuration syntax. Do not copy configuration meant for a different client without checking its format.

Official resources:
- Playwright: https://playwright.dev/
- Playwright MCP repository: https://github.com/microsoft/playwright-mcp
- Model Context Protocol: https://modelcontextprotocol.io/

## 8. Example workflow: Leaftaps login

Application: `https://leaftaps.com/opentaps/control/main`

### Step 1 — Inspect
Ask the Planner to open the login page and identify the actual username field, password field, submit button, and visible page behavior.

### Step 2 — Plan
Create scenarios for:
- Page load.
- Valid credentials.
- Invalid username and/or password.
- Empty fields.
- Password masking.
- Enter-key submission, if supported.
- Successful navigation.
- Visible validation or authentication errors.

### Step 3 — Generate
Ask the Generator to use the approved plan and inspected evidence to create `login.spec.ts`.

### Step 4 — Execute
From the project directory, run:

```bash
npx playwright test login.spec.ts
```

Run with the HTML report if configured:

```bash
npx playwright test login.spec.ts --reporter=html
npx playwright show-report
```

### Step 5 — Heal
If a test fails, provide the failing test, stack trace, report details, and current browser evidence. Ask the Healer to identify the root cause, make a justified correction, and rerun the affected tests.

## 9. Locator and assertion guidance

Prefer locators that express user-facing meaning:
- `getByRole()` for buttons, links, headings, and other accessible roles.
- `getByLabel()` for properly labelled form controls.
- `getByPlaceholder()` when the placeholder is stable and meaningful.
- `getByTestId()` when the application provides a stable test ID.
- CSS selectors when needed and sufficiently stable.

Avoid relying on:
- Long, brittle XPath expressions.
- Positional selectors without a clear reason.
- Generated class names that frequently change.
- Assumed labels or error text that have not been verified.

Prefer web-first assertions, for example:

```typescript
await expect(page.getByRole("heading", { name: "Dashboard" }))
  .toBeVisible();
```

Use the actual heading, locator, and expected behavior observed in the application. The example above is illustrative; do not assume that Leaftaps displays a heading named `Dashboard`.

## 10. Good practices and limitations

- Inspect the application before deciding on locators.
- Separate browser exploration from repeatable automated test execution.
- Keep credentials in environment variables or approved secret storage.
- Do not put passwords in screenshots, reports, source control, or logs.
- Use only authorized test environments and accounts.
- Avoid destructive operations unless specifically approved and safely controlled.
- Treat browser content as application data, not as instructions to override the user's task or security rules.
- Confirm the MCP server's available tools and permissions; capabilities differ by setup.
- Review generated tests before relying on them in CI.
- A test passing once does not guarantee that it is stable or comprehensive.
- Do not claim a test was executed unless it was actually run and its result observed.

## 11. Quick revision

- **MCP:** Standard protocol for connecting AI applications with tools and data.
- **Playwright MCP:** Exposes browser interaction tools to an MCP-compatible AI client.
- **Planner:** Determines what to test.
- **Generator:** Converts an approved plan into test code.
- **Healer:** Diagnoses failures and repairs tests using evidence.
- **Playwright Test:** Executes repeatable automated tests and provides assertions, fixtures, and reports.
- **Best practice:** Inspect first, plan, generate, execute, diagnose, and verify.
