# Playwright Interview Questions

## Topics Covered
- Playwright Architecture
- Why Playwright over Selenium
- Playwright vs Selenium
- `playwright.config.ts`
- Browser
- BrowserContext
- Page
- Fixtures
- Scenario-based questions
- Tricky questions
- High-priority interview questions

---

# 1. Playwright Architecture

### Q1. What is Playwright?

Playwright is an end-to-end browser automation framework developed by Microsoft. It supports Chromium, Firefox, and WebKit.

### Q2. What are the major components of Playwright?

- Playwright Test Runner
- Playwright APIs
- Browser
- BrowserContext
- Page
- Locator
- `playwright.config.ts`
- Fixtures
- Projects

### Q3. Explain Playwright architecture.

```text
Test Script
    ↓
Playwright Test Runner
    ↓
Playwright API
    ↓
Browser
    ↓
BrowserContext
    ↓
Page
    ↓
Web Application
```

### Q4. How does Playwright communicate with browsers?

Playwright uses its browser automation implementation and browser-specific communication mechanisms to control supported browsers. It does not use the Selenium WebDriver protocol.

### Q5. Does Playwright use WebDriver?

No. Playwright does not use Selenium WebDriver for its normal browser automation.

### Q6. What is the role of the Playwright Test Runner?

It provides test execution, fixtures, parallel execution, retries, projects, reporting, tracing, screenshots, and other test-management capabilities.

### Q7. What is test isolation in Playwright?

Playwright uses isolated BrowserContexts so tests can have independent cookies, local storage, authentication state, and other session-related data.

---

# 2. Why Playwright Over Selenium?

### Q8. Why would you choose Playwright over Selenium?

Common advantages include:

- Built-in auto-waiting
- Modern locator APIs
- BrowserContext isolation
- Multi-page/tab support
- Chromium, Firefox, and WebKit support
- Network interception and mocking
- Trace Viewer
- Screenshots and video
- Strong TypeScript support
- Integrated Playwright Test Runner
- Parallel execution
- No separate WebDriver executable for normal Playwright usage

### Q9. What are the major differences between Playwright and Selenium?

| Playwright | Selenium |
|---|---|
| Modern browser automation framework | Browser automation project based on WebDriver |
| BrowserContext provides lightweight isolation | Browser sessions are commonly managed as separate WebDriver sessions |
| Built-in auto-waiting for many actions | Explicit/implicit waits are commonly used |
| Chromium, Firefox, WebKit | Major browsers through WebDriver implementations |
| Built-in tracing | Similar debugging usually requires additional setup/tools |
| Network interception is built in | Often requires additional mechanisms |
| Playwright Test is integrated | Selenium commonly works with external test frameworks |

### Q10. What is Playwright auto-waiting?

Before many actions, Playwright waits for required actionability conditions such as visibility, stability, receiving events, enabled state, and attachment.

```typescript
await page.getByRole('button', { name: 'Login' }).click();
```

### Q11. Does Playwright eliminate the need for explicit waits?

Not completely. Good Playwright tests generally use locators, assertions, and built-in waiting instead of arbitrary sleeps.

Avoid:

```typescript
await page.waitForTimeout(5000);
```

Prefer:

```typescript
await expect(page.getByText('Dashboard')).toBeVisible();
```

### Q12. Why is `waitForTimeout()` generally discouraged?

It waits for a fixed amount of time instead of waiting for an actual application condition. This can make tests slow and flaky.

---

# 3. playwright.config.ts

### Q13. What is `playwright.config.ts`?

It is the central configuration file for a Playwright Test project.

It can define:

- Test directory
- Timeout
- Retries
- Workers
- Projects
- Base URL
- Browser settings
- Reporter
- Trace
- Screenshot
- Video
- Global test settings

### Q14. Give a basic `playwright.config.ts`.

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://example.com',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});
```

### Q15. What is `defineConfig()`?

It provides a typed and structured way to define Playwright Test configuration.

### Q16. What is `testDir`?

It specifies the directory containing test files.

```typescript
testDir: './tests'
```

### Q17. What is `baseURL`?

It defines the common base URL of the application.

```typescript
use: {
    baseURL: 'https://example.com'
}
```

Then:

```typescript
await page.goto('/login');
```

### Q18. What is the `use` section?

It contains default settings used during test execution.

Example:

```typescript
use: {
    baseURL: 'https://example.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
}
```

### Q19. What is `headless`?

It controls whether the browser UI is visible.

```typescript
headless: true
```

runs without visible browser UI.

```typescript
headless: false
```

runs with visible browser UI.

### Q20. What are retries?

Retries specify how many times a failed test should be retried.

```typescript
retries: 2
```

### Q21. What are workers?

Workers are processes used by Playwright Test to execute tests in parallel.

```typescript
workers: 4
```

### Q22. What are Playwright projects?

Projects allow the same test suite to run with different configurations.

```typescript
projects: [
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] }
    },
    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] }
    }
]
```

Projects are useful for:

- Cross-browser testing
- Device testing
- Different environments
- Different authentication states
- Different configurations

### Q23. What is a reporter?

A reporter controls how test results are displayed or generated.

```typescript
reporter: 'html'
```

### Q24. What is the difference between screenshot and trace?

A screenshot captures an image at a point in time.

A trace provides richer debugging information about test execution, including actions, snapshots, and other information depending on configuration.

---

# 4. Browser

### Q25. What is Browser in Playwright?

`Browser` represents a browser instance launched by Playwright.

```typescript
const browser = await chromium.launch();
```

### Q26. How do you launch Chromium?

```typescript
import { chromium } from '@playwright/test';

const browser = await chromium.launch();
```

### Q27. Can one Browser have multiple BrowserContexts?

Yes.

```typescript
const context1 = await browser.newContext();
const context2 = await browser.newContext();
```

### Q28. Why use BrowserContext instead of launching a new Browser for every test?

Launching a browser is more expensive. BrowserContexts provide lightweight isolated sessions within the browser.

---

# 5. BrowserContext

### Q29. What is BrowserContext?

A BrowserContext is an isolated browser session inside a Browser.

It can have its own:

- Cookies
- Local storage
- Session storage
- Permissions
- Authentication state

### Q30. How do you create a BrowserContext?

```typescript
const context = await browser.newContext();
```

### Q31. How do you create a Page from a BrowserContext?

```typescript
const page = await context.newPage();
```

### Q32. Can multiple Pages exist inside one BrowserContext?

Yes.

```typescript
const page1 = await context.newPage();
const page2 = await context.newPage();
```

### Q33. Can two BrowserContexts share cookies automatically?

No. BrowserContexts are isolated by default.

### Q34. Can Pages in the same BrowserContext share authentication?

Yes. Pages in the same context share the context's browser session state.

### Q35. How do you reuse authentication state?

```typescript
const context = await browser.newContext({
    storageState: 'auth.json'
});
```

---

# 6. Page

### Q36. What is a Page in Playwright?

A Page represents a single browser tab.

### Q37. How do you create a Page?

```typescript
const page = await context.newPage();
```

### Q38. Can a BrowserContext contain multiple Pages?

Yes.

```text
BrowserContext
    ├── Page 1
    ├── Page 2
    └── Page 3
```

### Q39. What is the relationship between Browser, BrowserContext, and Page?

```text
Browser
   ↓
BrowserContext
   ↓
Page
```

- Browser → browser instance
- BrowserContext → isolated browser session
- Page → browser tab

---

# 7. Browser vs Context vs Page

| Component | Meaning |
|---|---|
| Browser | Browser instance |
| BrowserContext | Isolated browser session |
| Page | Browser tab |

### Interview Answer

> Browser represents the browser instance, BrowserContext represents an isolated browser session inside that browser, and Page represents an individual browser tab.

---

# 8. Fixtures

### Q40. What is a Playwright fixture?

A fixture provides test dependencies and setup/teardown functionality.

Common built-in fixtures include:

- `page`
- `context`
- `browser`
- `browserName`
- `request`

### Q41. Where does the `page` fixture come from?

It is provided by the Playwright Test Runner.

```typescript
import { test } from '@playwright/test';

test('Login test', async ({ page }) => {
    await page.goto('/');
});
```

When using the standard Playwright Test fixtures, you normally do not need to manually create the Browser, Context, and Page.

---

# 9. Architecture Scenario Questions

### Q42. If you need two independent users, what should you create?

Create two BrowserContexts.

```typescript
const adminContext = await browser.newContext();
const userContext = await browser.newContext();

const adminPage = await adminContext.newPage();
const userPage = await userContext.newPage();
```

### Q43. If you need two tabs for the same logged-in user, what should you create?

Create two Pages in the same BrowserContext.

```typescript
const page1 = await context.newPage();
const page2 = await context.newPage();
```

### Q44. If two Pages belong to different contexts, will they share cookies?

No.

### Q45. If two Pages belong to the same context, will they share cookies?

Yes, because they belong to the same browser session.

### Q46. How would you test Admin and Customer simultaneously?

Use separate contexts with separate authentication states.

```typescript
const adminContext = await browser.newContext({
    storageState: 'admin.json'
});

const customerContext = await browser.newContext({
    storageState: 'customer.json'
});

const adminPage = await adminContext.newPage();
const customerPage = await customerContext.newPage();
```

---

# 10. Configuration Scenario Questions

### Q47. How do you run tests against different environments?

Use environment variables or separate Playwright projects.

```typescript
use: {
    baseURL: process.env.BASE_URL
}
```

### Q48. How do you capture screenshots only when a test fails?

```typescript
use: {
    screenshot: 'only-on-failure'
}
```

### Q49. How do you collect traces on the first retry?

```typescript
use: {
    trace: 'on-first-retry'
}
```

### Q50. How do you configure multiple browsers?

```typescript
projects: [
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] }
    },
    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] }
    },
    {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] }
    }
]
```

---

# 11. Tricky Interview Questions

### Q51. Is BrowserContext the same as Browser?

No.

Browser is the browser instance. BrowserContext is an isolated session inside the browser.

### Q52. Is Page the same as BrowserContext?

No.

Page represents a browser tab. BrowserContext represents an isolated browser session.

### Q53. Can a Context have multiple Pages?

Yes.

### Q54. Can a Browser have multiple Contexts?

Yes.

### Q55. Which is more lightweight: Browser or BrowserContext?

BrowserContext is generally more lightweight than launching a completely separate browser instance.

### Q56. What is the difference between `browser.newContext()` and `context.newPage()`?

```typescript
browser.newContext();
```

Creates a new isolated browser session.

```typescript
context.newPage();
```

Creates a new browser tab inside that session.

---

# 12. Complete Browser → Context → Page Example

```typescript
import { chromium } from '@playwright/test';

async function browserDemo() {

    // Launch browser
    const browser = await chromium.launch({
        headless: false
    });

    // Create isolated browser context
    const context = await browser.newContext();

    // Create browser tab
    const page = await context.newPage();

    // Navigate to application
    await page.goto('https://example.com');

    // Get page title
    console.log(await page.title());

    // Close resources
    await page.close();
    await context.close();
    await browser.close();
}

browserDemo();
```

### Flow

```text
chromium.launch()
       ↓
    Browser
       ↓
browser.newContext()
       ↓
 BrowserContext
       ↓
context.newPage()
       ↓
     Page
       ↓
 Web Application
```

---

# 13. High-Priority Interview Questions

Focus on these first:

1. What is Playwright?
2. Explain Playwright architecture.
3. How does Playwright communicate with browsers?
4. Does Playwright use WebDriver?
5. Why Playwright over Selenium?
6. Playwright vs Selenium?
7. What is auto-waiting?
8. What is Browser?
9. What is BrowserContext?
10. What is Page?
11. Browser vs BrowserContext vs Page?
12. Can one Browser have multiple Contexts?
13. Can one Context have multiple Pages?
14. How does Playwright provide test isolation?
15. What is `playwright.config.ts`?
16. What is `defineConfig()`?
17. What is `testDir`?
18. What is `baseURL`?
19. What is the `use` section?
20. What are Playwright projects?
21. What are workers?
22. What are retries?
23. What is headless mode?
24. How do you configure screenshots?
25. How do you configure tracing?
26. How do you handle multiple users?
27. How do you handle multiple tabs?
28. What is a Playwright fixture?
29. Where does the `page` fixture come from?
30. Why is `await` commonly used with Playwright APIs?

---

# 14. One-Minute Interview Answers

## Explain Playwright Architecture

> Playwright is a browser automation framework that supports Chromium, Firefox, and WebKit. The test interacts with Playwright APIs through the Playwright Test Runner. A Browser can contain multiple isolated BrowserContexts, and each BrowserContext can contain one or more Pages. BrowserContext provides session isolation, while Page represents a browser tab. Playwright also provides auto-waiting, tracing, network interception, fixtures, parallel execution, and projects.

## Why Playwright Over Selenium?

> I would choose Playwright when I need modern browser automation with built-in auto-waiting, isolated BrowserContexts, strong multi-page handling, network interception, tracing, and integrated test-runner capabilities. Playwright supports Chromium, Firefox, and WebKit through a unified API and does not require the traditional WebDriver setup used by Selenium.

## Browser vs Context vs Page

> Browser is the browser instance, BrowserContext is an isolated browser session within that browser, and Page represents an individual browser tab.
