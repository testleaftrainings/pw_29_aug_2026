# Playwright Locators – Notes

## 1. What is a Locator?

A locator is used to identify an element on a web page so that Playwright can perform actions such as `click()`, `fill()`, `check()`, and `selectOption()`.

### Example

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

---

## 2. getByRole()

`getByRole()` locates elements using their accessible role and, optionally, their accessible name.

### Syntax

```typescript
page.getByRole("role", { name: "accessible name" })
```

### Example

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

### Common Roles

| Role | Example |
|---|---|
| `button` | Login button |
| `textbox` | Input field |
| `link` | Anchor/link |
| `checkbox` | Checkbox |
| `radio` | Radio button |
| `heading` | Heading |
| `combobox` | Dropdown |

---

## 3. getByRole() with name

The `name` option helps identify a specific element when multiple elements have the same role.

```typescript
await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");
```

Here, Playwright identifies the textbox using its accessible name `Username`.

---

## 4. first()

`first()` returns the first element matching the locator.

```typescript
await page.getByRole("textbox").first()
    .fill("Demosalesmanager");
```

Use it when the first matching element is intentionally required.

---

## 5. nth()

`nth()` selects an element using a zero-based index.

```typescript
await page.getByRole("textbox").nth(0)
    .fill("Demosalesmanager");

await page.getByRole("textbox").nth(1)
    .fill("crmsfa");
```

Indexing starts from `0`.

- `nth(0)` → first element
- `nth(1)` → second element
- `nth(2)` → third element

Prefer a meaningful locator when one is available instead of depending on position.

---

## 6. last()

`last()` returns the last matching element.

```typescript
await page.getByRole("textbox").last()
    .fill("crmsfa");
```

Use it when the last matching element is consistently the intended element.

---

## 7. getByLabel()

`getByLabel()` locates a form control using its associated label.

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

This is useful when the application has properly associated labels with form controls.

---

## 8. getByText()

`getByText()` locates an element using visible text.

```typescript
await page.getByText("CRM/SFA").click();
```

For exact text matching:

```typescript
await page.getByText("Leads", { exact: true }).click();
```

---

## 9. exact: true

`exact: true` makes the text match exact.

```typescript
await page.getByText("Leads", { exact: true }).click();
```

This is useful when other elements contain `Leads` as part of longer text.

---

## 10. getByRole("link")

When an element is a link, it can be located using its link role.

```typescript
await page.getByRole("link", { name: "Create Lead" }).click();
```

This is more explicit than simply locating the visible text when the element is known to be a link.

---

## 11. locator()

`locator()` can be used with CSS selectors.

### ID Selector

```typescript
await page.locator("#createLeadForm_companyName")
    .fill("TestLeaf");
```

The `#` represents an HTML `id`.

### Attribute Selector

```typescript
await page.locator('[name="submitButton"]').click();
```

This locates an element based on its `name` attribute.

---

## 12. Locator Mapping from the Create Lead Script

| Application Step | Locator |
|---|---|
| Username | `getByRole("textbox", { name: "Username" })` |
| Password | `getByLabel("Password")` |
| Login | `getByRole("button", { name: "Login" })` |
| CRM/SFA | `getByText("CRM/SFA")` |
| Leads | `getByText("Leads", { exact: true })` |
| Create Lead | `getByRole("link", { name: "Create Lead" })` |
| Company Name | `locator("#createLeadForm_companyName")` |
| First Name | `locator("#createLeadForm_firstName")` |
| Last Name | `locator("#createLeadForm_lastName")` |
| Submit | `locator('[name="submitButton"]')` |

---

## 13. Recommended Locator Approach

A practical preference is:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. `getByTestId()`
6. CSS/XPath using `locator()`

The best locator depends on the application's HTML and which locator uniquely identifies the element.

---

## 14. Important Best Practices

- Prefer user-facing locators when they uniquely identify the element.
- Use `getByRole()` for semantically identifiable elements.
- Use `getByLabel()` for labelled form controls.
- Use `getByText()` for visible text when appropriate.
- Use `getByTestId()` when a stable test ID is intentionally provided.
- Use CSS selectors when stable IDs or attributes are available and suitable.
- Avoid unnecessary `nth()` because it creates a dependency on element order.
- Avoid unnecessary XPath when a simpler Playwright locator is available.
- Avoid hard-coded waits when Playwright's auto-waiting can handle the action.
- Choose locators that are readable, unique, and reasonably resilient to UI changes.

---

## 15. Quick Revision

```text
getByRole()
    ↓
Role + Accessible Name

getByLabel()
    ↓
Form Control + Label

getByText()
    ↓
Visible Text

first()
    ↓
First Matching Element

nth(index)
    ↓
Element at Zero-Based Index

last()
    ↓
Last Matching Element

locator("#id")
    ↓
CSS ID Selector

locator("[attribute='value']")
    ↓
CSS Attribute Selector
```

---

## Key Takeaway

A good Playwright locator should be:

**Readable + Unique + Stable + Aligned with the application's semantics**
