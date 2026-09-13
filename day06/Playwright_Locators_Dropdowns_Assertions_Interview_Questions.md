# Playwright Locators, Dropdowns and Assertions -- Interview Questions

## Section 1 -- Locator Questions

### 1. What is a locator in Playwright?

A locator is used to identify an element on a web page so that
Playwright can perform actions or assertions on that element.

------------------------------------------------------------------------

### 2. What locator strategies are used in your Create Lead test?

The test uses:

-   `getByRole()`
-   `getByLabel()`
-   `getByText()`
-   `locator()` with ID
-   `locator()` with attribute
-   XPath
-   `first()`
-   `last()`
-   `nth()`

------------------------------------------------------------------------

### 3. What is `getByRole()`?

`getByRole()` locates elements using their accessibility role and
accessible name.

Example:

``` typescript
await page.getByRole("button", { name: "Login" }).click();
```

------------------------------------------------------------------------

### 4. What is the difference between role and accessible name?

The **role** describes what the element represents, such as:

``` text
button
textbox
link
option
checkbox
```

The **accessible name** identifies the element, for example:

``` typescript
{ name: "Login" }
```

------------------------------------------------------------------------

### 5. Why would you use `getByLabel()`?

`getByLabel()` is useful for locating form controls through their
associated labels.

Example:

``` typescript
await page.getByLabel("Password").fill("crmsfa");
```

------------------------------------------------------------------------

### 6. What is the difference between `getByText()` and `getByRole()`?

`getByText()` locates an element based on visible text.

`getByRole()` locates an element based on its accessibility role and
accessible name.

Examples:

``` typescript
await page.getByText("CRM/SFA").click();

await page.getByRole("link", { name: "Create Lead" }).click();
```

------------------------------------------------------------------------

### 7. What does `exact: true` do?

It requests an exact text match.

Example:

``` typescript
await page.getByText("Leads", { exact: true }).click();
```

This avoids matching text that contains additional characters or words.

------------------------------------------------------------------------

### 8. What is `first()`?

`first()` returns the first element matching a locator.

``` typescript
await page.getByRole("textbox").first().fill("Demosalesmanager");
```

------------------------------------------------------------------------

### 9. What is `last()`?

`last()` returns the last matching element.

``` typescript
await page.getByRole("textbox").last().fill("crmsfa");
```

------------------------------------------------------------------------

### 10. What is `nth()`?

`nth()` selects an element by zero-based index.

``` typescript
await page.getByRole("textbox").nth(0).fill("Demosalesmanager");
await page.getByRole("textbox").nth(1).fill("crmsfa");
```

------------------------------------------------------------------------

### 11. Which is preferable: `nth()` or a unique locator?

A unique, meaningful locator is generally preferable.

For example:

``` typescript
await page.getByLabel("Password").fill("crmsfa");
```

is generally clearer than:

``` typescript
await page.getByRole("textbox").nth(1).fill("crmsfa");
```

because the element's position may change.

------------------------------------------------------------------------

## Section 2 -- Form and Action Questions

### 12. What does `fill()` do?

`fill()` enters text into an input or editable element.

Example:

``` typescript
await page.locator("#createLeadForm_firstName").fill("Vineeth");
```

------------------------------------------------------------------------

### 13. What is the difference between `fill()` and `click()`?

`fill()` enters or replaces text in an input.

`click()` performs a click action on an element.

------------------------------------------------------------------------

### 14. How do you locate an element using its ID?

Use a CSS ID selector:

``` typescript
await page.locator("#createLeadForm_companyName").fill("TestLeaf");
```

------------------------------------------------------------------------

### 15. How do you locate an element using an attribute?

Use a CSS attribute selector:

``` typescript
await page.locator('[name="submitButton"]').click();
```

------------------------------------------------------------------------

### 16. Why would you use XPath?

XPath can be useful when the element can be reliably identified through
its DOM structure, text, or attributes.

Example:

``` typescript
await page.locator("//h5[text()='Type your name']").innerText();
```

However, XPath should not automatically be the first choice when a
stable user-facing locator is available.

------------------------------------------------------------------------

## Section 3 -- Native Dropdown Questions

### 17. How do you handle a native select dropdown in Playwright?

Use `selectOption()` on the `<select>` element.

``` typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ label: "Partner" });
```

------------------------------------------------------------------------

### 18. What are the different ways to use `selectOption()`?

Common approaches include:

### By value

``` typescript
await page.locator("select")
    .selectOption({ value: "LEAD_EMPLOYEE" });
```

### By label

``` typescript
await page.locator("select")
    .selectOption({ label: "Partner" });
```

### By index

``` typescript
await page.locator("select")
    .selectOption({ index: 2 });
```

------------------------------------------------------------------------

### 19. Is the index in `selectOption()` zero-based?

Yes.

``` text
index 0 → First option
index 1 → Second option
index 2 → Third option
```

------------------------------------------------------------------------

### 20. Can `selectOption()` select multiple options?

Yes, when the underlying `<select>` supports multiple selection.

Example:

``` typescript
await page.locator("select").selectOption([
    { index: 0 },
    { index: 1 },
    { index: 2 }
]);
```

But for a normal single-select dropdown, select only one option.

------------------------------------------------------------------------

### 21. What issue do you see in the Create Lead dropdown code?

The code uses:

``` typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption([
        { index: 2 },
        { index: 3 },
        { index: 5 }
    ]);
```

This requests multiple selections.

If the dropdown is a normal single-select `<select>`, use:

``` typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ index: 2 });
```

------------------------------------------------------------------------

## Section 4 -- Non-Select Dropdown Questions

### 22. What is a non-select dropdown?

It is a custom dropdown that is not implemented using the native HTML
`<select>` element.

It may use `div`, `button`, `ul`, `li`, or a JavaScript UI component.

------------------------------------------------------------------------

### 23. How do you handle a non-select dropdown?

Typically:

``` text
Click Dropdown
      ↓
Wait for Options to Become Available
      ↓
Locate Required Option
      ↓
Click Option
```

Example:

``` typescript
await page.locator("//label[text()='Select Country']").click();

await page.getByRole("option", { name: "India" }).click();
```

------------------------------------------------------------------------

### 24. Can you use `selectOption()` on a non-select dropdown?

Normally no.

`selectOption()` is designed for native `<select>` elements.

A custom dropdown should generally be interacted with using its actual
UI elements.

------------------------------------------------------------------------

### 25. How do you identify whether a dropdown is native or custom?

Inspect the DOM.

If the control is:

``` html
<select>
```

it is a native select.

If it is built with elements such as:

``` html
<div>
<button>
<ul>
<li>
```

it is likely a custom/non-select dropdown.

------------------------------------------------------------------------

### 26. What would you do if `selectOption()` fails?

Inspect the DOM.

If the element is not a `<select>`, determine how the custom component
works and interact with it using appropriate locators and actions such
as `click()`.

------------------------------------------------------------------------

### 27. Why do you click the dropdown before selecting an option?

Many custom dropdowns render or expose their options only after the
dropdown is opened.

Therefore:

``` typescript
await page.locator("dropdown").click();
await page.getByRole("option", { name: "India" }).click();
```

------------------------------------------------------------------------

## Section 5 -- Assertion Questions

### 28. What is an assertion?

An assertion verifies that the actual application state matches the
expected result.

Playwright assertions use `expect()`.

------------------------------------------------------------------------

### 29. How do you verify the URL?

``` typescript
await expect(page)
    .toHaveURL("https://leafground.com/input.xhtml");
```

------------------------------------------------------------------------

### 30. How do you verify the page title?

``` typescript
await expect(page)
    .toHaveTitle("Input Components");
```

------------------------------------------------------------------------

### 31. How do you verify that an element is editable?

``` typescript
await expect(
    page.getByRole("textbox", { name: "Babu Manickam" })
).toBeEditable();
```

------------------------------------------------------------------------

### 32. What is a soft assertion?

A soft assertion allows the test to continue after an assertion failure
so that additional assertions can be evaluated.

Example:

``` typescript
await expect.soft(page)
    .toHaveURL("https://leafground.com/input.xhtml");
```

------------------------------------------------------------------------

### 33. What is the difference between `expect()` and `expect.soft()`?

`expect()` creates a normal hard assertion.

`expect.soft()` creates a soft assertion.

Example:

``` typescript
expect(textOnEle).toBe("Type your name");
```

and:

``` typescript
await expect.soft(page)
    .toHaveTitle("Input Components");
```

------------------------------------------------------------------------

### 34. When would you use a soft assertion?

Use soft assertions when multiple independent validations should be
collected in the same test rather than stopping at the first assertion
failure.

------------------------------------------------------------------------

### 35. Does a soft assertion mean the test will pass even when the assertion fails?

No.

A failed soft assertion is still reported as a test failure, but
Playwright can continue executing subsequent steps and collect
additional failures.

------------------------------------------------------------------------

## Section 6 -- Text Validation Questions

### 36. What does `innerText()` do?

It retrieves the visible text from an element.

Example:

``` typescript
const textOnEle = await page
    .locator("//h5[text()='Type your name']")
    .innerText();
```

------------------------------------------------------------------------

### 37. How do you verify the text retrieved using `innerText()`?

``` typescript
expect(textOnEle).toBe("Type your name");
```

------------------------------------------------------------------------

### 38. Why is `await` used with `innerText()`?

`innerText()` is an asynchronous Playwright operation, so we use `await`
to retrieve its resolved value.

------------------------------------------------------------------------

## Section 7 -- Scenario-Based Questions

### 39. Your username and password fields are both textboxes. How would you locate them reliably?

Prefer meaningful locators such as:

``` typescript
await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");

await page.getByLabel("Password")
    .fill("crmsfa");
```

This is generally more maintainable than relying only on element
position.

------------------------------------------------------------------------

### 40. You have five textboxes and need to interact with the third one. What can you use?

You can use:

``` typescript
await page.getByRole("textbox").nth(2).fill("value");
```

Remember that indexing starts at zero.

------------------------------------------------------------------------

### 41. A locator matches multiple elements. What options do you have?

You can:

-   Make the locator more specific.
-   Use `first()`.
-   Use `last()`.
-   Use `nth()` when the position is intentional.
-   Scope the locator to a specific container.

A unique locator is generally preferred.

------------------------------------------------------------------------

### 42. A custom dropdown has an option named India. How would you automate it?

``` typescript
await page.locator("dropdown locator").click();
await page.getByRole("option", { name: "India" }).click();
```

The exact dropdown locator depends on the application's DOM.

------------------------------------------------------------------------

### 43. How would you validate multiple conditions on a page?

Use multiple assertions.

For example:

``` typescript
await expect.soft(page)
    .toHaveURL("https://leafground.com/input.xhtml");

await expect.soft(page)
    .toHaveTitle("Input Components");

await expect(
    page.getByRole("textbox", { name: "Babu Manickam" })
).toBeEditable();
```

------------------------------------------------------------------------

### 44. Why should we avoid hard-coded waits?

Hard-coded waits such as:

``` typescript
await page.waitForTimeout(5000);
```

can make tests slower and unreliable because the required condition may
occur earlier or later.

Playwright's locator actions and assertions provide automatic waiting
for many common conditions.

------------------------------------------------------------------------

### 45. What is the overall automation flow in your Create Lead test?

``` text
Navigate
   ↓
Login
   ↓
Navigate to CRM/SFA
   ↓
Navigate to Leads
   ↓
Open Create Lead
   ↓
Fill Lead Details
   ↓
Handle Native Dropdown
   ↓
Submit Lead
```

------------------------------------------------------------------------

## Section 8 -- Practical Coding Questions

### 46. Write code to enter the username and password.

``` typescript
await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");

await page.getByLabel("Password")
    .fill("crmsfa");
```

------------------------------------------------------------------------

### 47. Write code to select a dropdown option using a label.

``` typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ label: "Partner" });
```

------------------------------------------------------------------------

### 48. Write code to select a dropdown option using its value.

``` typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ value: "LEAD_EMPLOYEE" });
```

------------------------------------------------------------------------

### 49. Write code to select an option from a non-select dropdown.

``` typescript
await page.locator("//label[text()='Select Country']").click();

await page.getByRole("option", { name: "India" }).click();
```

------------------------------------------------------------------------

### 50. Write code to verify the page title and URL.

``` typescript
await expect(page)
    .toHaveURL("https://leafground.com/input.xhtml");

await expect(page)
    .toHaveTitle("Input Components");
```

------------------------------------------------------------------------

## Quick Interview Revision Table

  Topic                 Key Point
  --------------------- --------------------------------------------------
  `getByRole()`         Locate by accessibility role and accessible name
  `getByLabel()`        Locate form control using associated label
  `getByText()`         Locate by visible text
  `locator()`           CSS/XPath and other selector strategies
  `first()`             First matching element
  `last()`              Last matching element
  `nth()`               Zero-based element position
  `fill()`              Enter/replace input text
  `click()`             Click an element
  `selectOption()`      Native `<select>` dropdown
  Non-select dropdown   Click dropdown, then click option
  `expect()`            Hard assertion
  `expect.soft()`       Soft assertion
  `toHaveURL()`         Verify URL
  `toHaveTitle()`       Verify title
  `toBeEditable()`      Verify editable state
  `innerText()`         Retrieve visible text
  `toBe()`              Compare exact expected value

------------------------------------------------------------------------

# Most Important Interview Questions to Remember

1.  What is the difference between a native select and a non-select
    dropdown?
2.  Why can't `selectOption()` be used for every dropdown?
3.  What is the difference between `getByRole()` and `getByLabel()`?
4.  What is the difference between `first()`, `last()`, and `nth()`?
5.  Why is `nth()` zero-based?
6.  What is the difference between hard and soft assertions?
7.  What does `toBeEditable()` validate?
8.  How do you validate page URL and title?
9.  How do you retrieve text using `innerText()`?
10. How do you handle a custom/non-select dropdown?
11. How do you select a native dropdown option by value, label, and
    index?
12. Why should unnecessary `waitForTimeout()` calls be avoided?
13. What would you do when a locator matches multiple elements?
14. How do you identify whether a dropdown is native or custom?
15. How would you design maintainable locators for a real-time
    Playwright framework?
