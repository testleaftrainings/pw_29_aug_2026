# String – Framework-Level Use Case: Dynamic Test Data

In a Playwright framework, **strings are commonly used to store and pass dynamic test data** such as usernames, passwords, search values, URLs, and expected messages.

```ts
const username = "admin";
const password = "Admin@123";

await loginPage.login(username, password);
```

## Framework-Level Benefits

- **Avoid hardcoding** values directly inside test steps.
- **Reuse** the same test flow with different string values.
- **Improve maintainability** when test data changes.
- Useful for **data-driven and parameterized testing**.

## Real-Time Example

```ts
const searchText = "iPhone";

await searchPage.search(searchText);

await expect(page.locator(".search-result"))
    .toContainText(searchText);
```

Here, `"iPhone"` is stored as a **string variable** and reused in both the test action and assertion.

## Interview Answer

> **“At framework level, I mainly use strings to manage dynamic test data such as usernames, search values, URLs, and expected messages. This helps avoid hardcoding and allows the same reusable test flow to work with different data.”**
