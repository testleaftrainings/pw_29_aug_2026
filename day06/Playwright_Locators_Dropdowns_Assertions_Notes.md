# Playwright Locators, Dropdowns and Assertions -- Notes

## 1. Overview

These notes combine three practical Playwright scenarios:

1.  **Create Lead functionality** -- locators, login, navigation, form
    filling, and native select dropdown handling.
2.  **Assertions** -- URL, title, element state, text extraction, hard
    assertions, and soft assertions.
3.  **Non-select dropdown** -- handling a custom dropdown by clicking
    the dropdown and then clicking an option.

------------------------------------------------------------------------

# Part 1 -- Playwright Locators

## 2. What is a Locator?

A locator is a mechanism used by Playwright to identify an element on a
web page so that we can perform actions or assertions on it.

Common locator approaches used in these tests are:

-   `getByRole()`
-   `getByLabel()`
-   `getByText()`
-   `locator()`
-   XPath
-   CSS selectors
-   `first()`
-   `last()`
-   `nth()`

------------------------------------------------------------------------

## 3. `getByRole()`

`getByRole()` locates an element based on its accessible role.

### Example

``` typescript
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
```

Here:

-   `textbox` is the role.
-   `Username` is the accessible name.
-   `fill()` enters the username.

Another example:

``` typescript
await page.getByRole("button", { name: "Login" }).click();
```

This locates the Login button using its role and accessible name.

------------------------------------------------------------------------

## 4. `getByLabel()`

`getByLabel()` locates a form control using its associated label.

### Example

``` typescript
await page.getByLabel("Password").fill("crmsfa");
```

This is useful when a form field has a proper accessible label.

------------------------------------------------------------------------

## 5. `getByText()`

`getByText()` locates an element using visible text.

### Example

``` typescript
await page.getByText("CRM/SFA").click();
```

To match text exactly:

``` typescript
await page.getByText("Leads", { exact: true }).click();
```

The `exact: true` option helps avoid matching elements containing
additional text.

------------------------------------------------------------------------

## 6. `getByRole()` for Links

A link can be located using:

``` typescript
await page.getByRole("link", { name: "Create Lead" }).click();
```

This is generally more descriptive than relying only on a CSS or XPath
selector when the accessible role and name are reliable.

------------------------------------------------------------------------

# Part 2 -- `first()`, `last()` and `nth()`

## 7. `first()`

When multiple elements match the same locator, `first()` selects the
first matching element.

``` typescript
await page.getByRole("textbox").first().fill("Demosalesmanager");
```

------------------------------------------------------------------------

## 8. `last()`

`last()` selects the last matching element.

``` typescript
await page.getByRole("textbox").last().fill("crmsfa");
```

------------------------------------------------------------------------

## 9. `nth()`

`nth()` selects an element using a zero-based index.

``` typescript
await page.getByRole("textbox").nth(0).fill("Demosalesmanager");
await page.getByRole("textbox").nth(1).fill("crmsfa");
```

Indexing starts from `0`.

Therefore:

``` text
nth(0) → First element
nth(1) → Second element
nth(2) → Third element
```

### Important

Prefer a unique, meaningful locator over `nth()` when possible because
the order of elements can change when the application UI changes.

------------------------------------------------------------------------

# Part 3 -- CSS and XPath Locators

## 10. ID Selector

An element can be located using its ID.

``` typescript
await page.locator("#createLeadForm_companyName").fill("TestLeaf");
```

The `#` represents an ID selector.

------------------------------------------------------------------------

## 11. Attribute Selector

An element can be located using an attribute.

``` typescript
await page.locator('[name="submitButton"]').click();
```

This locates an element whose `name` attribute is `submitButton`.

------------------------------------------------------------------------

## 12. XPath Locator

XPath can be used when required.

``` typescript
await page.locator("//h5[text()='Type your name']").innerText();
```

This locates an `h5` element whose text is exactly `Type your name`.

------------------------------------------------------------------------

# Part 4 -- Form Handling

## 13. `fill()`

`fill()` is used to enter text into an input field.

Examples:

``` typescript
await page.locator("#createLeadForm_companyName").fill("TestLeaf");

await page.locator("#createLeadForm_firstName").fill("Vineeth");

await page.locator("#createLeadForm_lastName").fill("Rajendran");
```

------------------------------------------------------------------------

# Part 5 -- Native Select Dropdown

## 14. What is a Native Select Dropdown?

A native select dropdown is implemented using the HTML `<select>`
element.

For such elements, Playwright provides:

``` typescript
selectOption()
```

------------------------------------------------------------------------

## 15. Selecting by Value

``` typescript
await page
    .locator("#createLeadForm_dataSourceId")
    .selectOption({ value: "LEAD_EMPLOYEE" });
```

This selects an option based on its `value` attribute.

------------------------------------------------------------------------

## 16. Selecting by Label

``` typescript
await page
    .locator("#createLeadForm_dataSourceId")
    .selectOption({ label: "Partner" });
```

This selects an option based on its visible label.

------------------------------------------------------------------------

## 17. Selecting by Index

``` typescript
await page
    .locator("#createLeadForm_dataSourceId")
    .selectOption({ index: 2 });
```

The index is zero-based.

### Important correction for the Create Lead example

The original code contains:

``` typescript
await page
    .locator("#createLeadForm_dataSourceId")
    .selectOption([{ index: 2 }, { index: 3 }, { index: 5 }]);
```

This syntax requests multiple options and is appropriate when the
`<select>` element supports multiple selection.

If the Leaftaps dropdown is a normal single-select dropdown, use one
option:

``` typescript
await page
    .locator("#createLeadForm_dataSourceId")
    .selectOption({ index: 2 });
```

------------------------------------------------------------------------

# Part 6 -- Non-Select Dropdown

## 18. What is a Non-Select Dropdown?

A non-select dropdown is a custom dropdown that is not implemented using
a native `<select>` element.

It may be implemented using:

-   `div`
-   `button`
-   `ul`
-   `li`
-   Custom JavaScript components
-   ARIA-based components

------------------------------------------------------------------------

## 19. How to Handle a Non-Select Dropdown

The normal approach is:

``` text
Click Dropdown
      ↓
Options Appear
      ↓
Locate Required Option
      ↓
Click Option
```

### Example

``` typescript
await page.locator("//label[text()='Select Country']").click();

await page.getByRole("option", { name: "India" }).click();
```

------------------------------------------------------------------------

## 20. Native Select vs Non-Select Dropdown

  Native Select                     Non-Select Dropdown
  --------------------------------- ----------------------------------
  Uses `<select>`                   Usually uses custom HTML
  Use `selectOption()`              Usually use `click()`
  Options are `<option>` elements   Options may be `div`, `li`, etc.
  Browser-native behavior           Application-specific behavior

### Key interview point

Do not identify the dropdown type only by how it looks.

**Inspect the DOM** to determine whether it is a native `<select>` or a
custom component.

------------------------------------------------------------------------

# Part 7 -- Playwright Assertions

## 21. What is an Assertion?

An assertion verifies whether the actual application state matches the
expected result.

Playwright assertions are commonly written using:

``` typescript
expect()
```

------------------------------------------------------------------------

## 22. URL Assertion

``` typescript
await expect.soft(page)
    .toHaveURL("https://leafground.com/input.xhtml");
```

This verifies the current page URL.

------------------------------------------------------------------------

## 23. Title Assertion

``` typescript
await expect.soft(page)
    .toHaveTitle("Input Components");
```

This verifies the page title.

------------------------------------------------------------------------

## 24. Element State Assertion

``` typescript
await expect(
    page.getByRole("textbox", { name: "Babu Manickam" })
).toBeEditable();
```

This verifies that the textbox is editable.

Other commonly used state assertions include:

``` typescript
toBeVisible()
toBeHidden()
toBeEnabled()
toBeDisabled()
toBeChecked()
toBeEditable()
```

------------------------------------------------------------------------

# Part 8 -- Hard and Soft Assertions

## 25. Hard Assertion

A normal assertion is a hard assertion.

``` typescript
expect(textOnEle).toBe("Type your name");
```

If the assertion fails, the test fails at that point and execution does
not continue normally beyond the failure.

------------------------------------------------------------------------

## 26. Soft Assertion

A soft assertion is created using:

``` typescript
expect.soft()
```

Example:

``` typescript
await expect.soft(page)
    .toHaveURL("https://leafground.com/input.xhtml");

await expect.soft(page)
    .toHaveTitle("Input Components");
```

Soft assertions allow the test to continue so that additional assertions
can be evaluated. The test is still reported as failed if a soft
assertion fails.

------------------------------------------------------------------------

## 27. Hard vs Soft Assertion

  -----------------------------------------------------------------------
  Hard Assertion                      Soft Assertion
  ----------------------------------- -----------------------------------
  `expect()`                          `expect.soft()`

  Failure normally stops further test Test continues to collect further
  execution at the failure            assertion failures

  Useful for critical checkpoints     Useful when you want to validate
                                      multiple independent conditions
  -----------------------------------------------------------------------

### Example

``` typescript
expect(textOnEle).toBe("Type your name");
```

versus:

``` typescript
await expect.soft(page).toHaveTitle("Input Components");
```

------------------------------------------------------------------------

# Part 9 -- Retrieving Text

## 28. `innerText()`

`innerText()` retrieves the visible text from an element.

``` typescript
const textOnEle = await page
    .locator("//h5[text()='Type your name']")
    .innerText();
```

The retrieved value can then be verified:

``` typescript
expect(textOnEle).toBe("Type your name");
```

------------------------------------------------------------------------

# Part 10 -- End-to-End Flow in the Create Lead Test

The Create Lead test follows this flow:

``` text
Launch Leaftaps
      ↓
Enter Username
      ↓
Enter Password
      ↓
Click Login
      ↓
Click CRM/SFA
      ↓
Click Leads
      ↓
Click Create Lead
      ↓
Enter Company Name
      ↓
Enter First Name
      ↓
Enter Last Name
      ↓
Select Dropdown Option
      ↓
Click Submit
```

------------------------------------------------------------------------

# Part 11 -- Important Best Practices

## Prefer User-Facing Locators

Prefer:

``` typescript
getByRole()
getByLabel()
getByText()
```

when they provide a reliable unique locator.

------------------------------------------------------------------------

## Use CSS/ID When Appropriate

For stable unique IDs:

``` typescript
page.locator("#createLeadForm_firstName")
```

is perfectly valid.

------------------------------------------------------------------------

## Avoid Unnecessary `nth()`

Instead of:

``` typescript
page.getByRole("textbox").nth(1)
```

prefer:

``` typescript
page.getByLabel("Password")
```

when the label provides a reliable locator.

------------------------------------------------------------------------

## Avoid Unnecessary Waits

Do not add fixed waits such as:

``` typescript
await page.waitForTimeout(3000);
```

just to make the test pass.

Playwright's locator actions and assertions provide automatic waiting
for many common conditions.

------------------------------------------------------------------------

# Part 12 -- Quick Revision

``` text
getByRole()
    → Locate using accessibility role and accessible name

getByLabel()
    → Locate form control using associated label

getByText()
    → Locate using visible text

locator()
    → Use CSS/XPath/other selector strategies

first()
    → First matching element

last()
    → Last matching element

nth()
    → Element at zero-based index

fill()
    → Enter text

selectOption()
    → Select option from native <select>

click()
    → Click buttons, links, custom dropdowns, options

expect()
    → Hard assertion

expect.soft()
    → Soft assertion

innerText()
    → Retrieve visible text
```
