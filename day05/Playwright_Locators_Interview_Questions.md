# Playwright Locators – Interview Questions

## Beginner Level

### 1. What is a locator in Playwright?

A locator identifies an element on a web page and allows Playwright to perform actions and assertions on that element.

---

### 2. What are the commonly used built-in locators in Playwright?

Common locators include:

- `getByRole()`
- `getByLabel()`
- `getByText()`
- `getByPlaceholder()`
- `getByAltText()`
- `getByTitle()`
- `getByTestId()`

---

### 3. What is `getByRole()`?

`getByRole()` locates an element using its accessible role and optionally its accessible name.

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

---

### 4. Why is `getByRole()` preferred?

It generally produces readable and resilient tests because it targets elements based on user-facing accessibility semantics.

---

### 5. What is `getByLabel()`?

`getByLabel()` locates a form control through its associated label.

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

---

### 6. What is `getByText()`?

`getByText()` locates an element based on its visible text.

```typescript
await page.getByText("CRM/SFA").click();
```

---

### 7. What is the purpose of `exact: true`?

It enables exact text matching.

```typescript
await page.getByText("Leads", { exact: true }).click();
```

---

### 8. What is `first()`?

`first()` returns the first element matching the locator.

```typescript
await page.getByRole("textbox").first().fill("value");
```

---

### 9. What is `last()`?

`last()` returns the last element matching the locator.

```typescript
await page.getByRole("textbox").last().fill("value");
```

---

### 10. What is `nth()`?

`nth()` selects an element using a zero-based index.

```typescript
await page.getByRole("textbox").nth(1).fill("value");
```

---

# Intermediate Level

### 11. What is the difference between `first()`, `last()`, and `nth()`?

| Method | Purpose |
|---|---|
| `first()` | Selects the first matching element |
| `last()` | Selects the last matching element |
| `nth(index)` | Selects a specific matching element |

---

### 12. Why should we avoid unnecessary `nth()`?

Because the test becomes dependent on the position of the element. If the DOM order changes, the test may interact with the wrong element.

A more specific locator is generally preferable.

---

### 13. When would you use CSS selectors?

Use CSS selectors when a stable ID, attribute, class, or CSS relationship provides a reliable way to identify the element.

```typescript
await page.locator("#createLeadForm_firstName")
    .fill("Vineeth");
```

---

### 14. What does `#` mean in a CSS selector?

`#` represents an ID selector.

```typescript
page.locator("#username")
```

matches:

```html
<input id="username">
```

---

### 15. What does `[name="submitButton"]` mean?

It is a CSS attribute selector. It identifies an element whose `name` attribute is `submitButton`.

```typescript
page.locator('[name="submitButton"]')
```

---

### 16. Which locator would you prefer for the Login button?

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

When the button has a reliable accessible name, this is a clear and user-facing locator.

---

### 17. Which locator would you prefer for the Password field?

If the field has a properly associated label:

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

---

### 18. What is the difference between a locator and a selector?

A selector is a way of describing how an element can be found, such as a CSS selector.

A Playwright locator is a higher-level mechanism that identifies an element and supports Playwright's actionability and auto-waiting behavior.

---

### 19. Can we chain locators in Playwright?

Yes.

```typescript
const form = page.locator("#createLeadForm");

await form.locator("#createLeadForm_firstName")
    .fill("Vineeth");
```

---

### 20. Does Playwright automatically wait before performing actions?

Yes. Playwright performs auto-waiting for relevant actionability conditions before actions such as `click()` and `fill()`.

This reduces the need for unnecessary hard-coded waits.

---

# Scenario-Based Questions

### 21. There are five textboxes on the page. How do you select the second textbox?

```typescript
await page.getByRole("textbox").nth(1).fill("value");
```

However, if a meaningful accessible name or label is available, prefer that instead.

---

### 22. There are multiple buttons with the same name. How can you identify the required button?

Use a more specific locator, such as:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

If necessary, further narrow the locator using a stable parent/container or another stable attribute.

---

### 23. The text is `Leads`, but other elements contain `Leads` as part of longer text. What would you do?

Use exact text matching:

```typescript
await page.getByText("Leads", { exact: true }).click();
```

---

### 24. The element has a stable ID. Which locator can you use?

```typescript
await page.locator("#createLeadForm_firstName")
    .fill("Vineeth");
```

---

### 25. The element has a stable `name` attribute. Which locator can you use?

```typescript
await page.locator('[name="submitButton"]').click();
```

---

### 26. How would you identify the Create Lead link?

```typescript
await page.getByRole("link", { name: "Create Lead" }).click();
```

---

### 27. Which is better for a link: `getByText()` or `getByRole("link")`?

When the element is semantically a link and has a reliable accessible name, `getByRole("link", { name: "..." })` is generally more explicit.

---

# Code-Based Questions

## Question 28

What does the following code do?

```typescript
await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");
```

### Expected Answer

It locates the textbox whose accessible name is `Username` and enters `Demosalesmanager`.

---

## Question 29

What does this code do?

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

### Expected Answer

It locates the form control associated with the `Password` label and enters `crmsfa`.

---

## Question 30

Explain this locator:

```typescript
await page.locator("#createLeadForm_companyName")
    .fill("TestLeaf");
```

### Expected Answer

It uses a CSS ID selector to locate the element whose `id` is `createLeadForm_companyName` and enters `TestLeaf`.

---

## Question 31

Explain:

```typescript
await page.locator('[name="submitButton"]').click();
```

### Expected Answer

It uses a CSS attribute selector to locate an element with `name="submitButton"` and clicks it.

---

## Question 32

What is the difference between these two?

```typescript
page.getByRole("textbox").first()
```

and

```typescript
page.getByRole("textbox").nth(0)
```

### Expected Answer

Both identify the first matching textbox. `first()` expresses the intent more clearly, while `nth(0)` explicitly uses the zero-based index.

---

# Practical Interview Challenge

### 33. Write the locator for the Username field.

Expected:

```typescript
await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");
```

---

### 34. Write the locator for the Password field.

Expected:

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

---

### 35. Write the locator for the Login button.

Expected:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

---

### 36. Write the locator for the Leads text using exact matching.

Expected:

```typescript
await page.getByText("Leads", { exact: true }).click();
```

---

### 37. Write the locator for the Create Lead link.

Expected:

```typescript
await page.getByRole("link", { name: "Create Lead" }).click();
```

---

### 38. Write the CSS locator for the First Name field.

Expected:

```typescript
await page.locator("#createLeadForm_firstName")
    .fill("Vineeth");
```

---

### 39. Write the CSS attribute locator for the Submit button.

Expected:

```typescript
await page.locator('[name="submitButton"]').click();
```

---

# Interview Tips

- Explain **why** you selected a locator, not just the syntax.
- Prefer stable and user-facing locators.
- Know the difference between role, label, text, ID, and attribute locators.
- Be able to explain `first()`, `last()`, and `nth()`.
- Understand zero-based indexing.
- Explain why excessive use of `nth()` can make tests fragile.
- Understand Playwright auto-waiting.
- Be ready to write locators from HTML snippets.
