# Playwright Frames and Dialogs -- Topic Notes

## 1. Playwright Frames

A frame (iframe) is a webpage embedded inside another webpage.

### Why do we need frame handling?

Elements inside an iframe belong to a different document. We need to use
Playwright frame handling methods to interact with those elements.

### Common Frame Handling Methods

#### `page.frames()`

Returns all the frames available on the page.

``` typescript
const allFrames = page.frames();

console.log(allFrames.length);

for (let i = 0; i < allFrames.length; i++) {
    console.log(allFrames[i].url());
}
```

Use this when you want to inspect or work with the actual `Frame`
objects.

### `page.frameLocator()`

Creates a reference to an iframe and allows us to locate elements inside
it.

``` typescript
const frameReference = page.frameLocator("[id='singleframe']");

await frameReference.locator("//input[@type='text']")
    .fill("kumar@gmail.com");
```

### Nested Frames

A frame can contain another frame. In that case, create the outer frame
reference first and then create the inner frame reference.

``` typescript
const outerFrame = page.frameLocator("[src='MultipleFrames.html']");

const innerFrame = outerFrame.frameLocator("[src='SingleFrame.html']");

await innerFrame.locator("//input[@type='text']")
    .fill("maha@gmail.com");
```

### `frameLocator()` vs `frames()`

  -----------------------------------------------------------------------
  Method                              Purpose
  ----------------------------------- -----------------------------------
  `page.frames()`                     Gets all frame objects on the page

  `page.frameLocator()`               Creates a locator reference to an
                                      iframe

  `frame.frameLocator()`              Locates a nested iframe inside
                                      another iframe
  -----------------------------------------------------------------------

### Selenium vs Playwright

Selenium commonly uses:

``` java
driver.switchTo().frame(frame);
```

Playwright can directly interact with an iframe using:

``` typescript
const frame = page.frameLocator("iframe");
await frame.locator("input").fill("value");
```

Playwright does not require the same explicit switch-back approach used
in Selenium.

------------------------------------------------------------------------

# 2. JavaScript Dialogs

JavaScript dialogs include:

-   Alert
-   Confirm
-   Prompt

Playwright handles these dialogs using the `dialog` event.

## `page.on("dialog")`

Use the dialog event to listen for JavaScript dialogs.

``` typescript
page.on("dialog", async (dialog) => {
    // Handle the dialog
});
```

## `dialog.type()`

Returns the type of dialog.

Possible values include:

-   `alert`
-   `confirm`
-   `prompt`

Example:

``` typescript
console.log(dialog.type());
```

## `dialog.message()`

Returns the message displayed in the dialog.

``` typescript
console.log(dialog.message());
```

## `dialog.accept()`

Accepts the dialog.

For a prompt, a value can be entered while accepting:

``` typescript
await dialog.accept("Alert was handled By Us");
```

## `dialog.dismiss()`

Dismisses or cancels the dialog.

``` typescript
await dialog.dismiss();
```

------------------------------------------------------------------------

# 3. Handling Different Dialog Types

A common approach is to use conditional statements.

``` typescript
page.on("dialog", async (dialog) => {

    if (dialog.type() === "prompt") {
        await dialog.accept("Alert was handled By Us");
    }

    else if (dialog.type() === "confirm") {
        await dialog.dismiss();
    }

    else {
        await dialog.accept();
    }
});
```

Here:

-   Prompt → accept with a value
-   Confirm → dismiss
-   Alert → accept

------------------------------------------------------------------------

# 4. Important Dialog Rule

The dialog handler should be registered before clicking the button that
triggers the dialog.

``` typescript
page.on("dialog", async (dialog) => {
    await dialog.accept();
});

await page.getByRole("button", { name: "Show" }).click();
```

This ensures Playwright is listening when the dialog appears.

------------------------------------------------------------------------

# 5. Text Verification After Dialog Handling

After accepting or dismissing a dialog, verify the text displayed on the
page.

Example:

``` typescript
await expect(page.locator("#result"))
    .toHaveText("Hello Kumar");
```

The expected text depends on the action performed.

------------------------------------------------------------------------

# 6. Conditional Text Verification

If the test performs different actions, the expected text can also be
different.

``` typescript
const action = "accept";

if (action === "accept") {
    await dialog.accept("Kumar");
    await expect(result).toHaveText("Hello Kumar");
} else {
    await dialog.dismiss();
    await expect(result).toHaveText("User cancelled the prompt.");
}
```

------------------------------------------------------------------------

# 7. Frame + Dialog Combined Scenario

A typical real-time flow can be:

1.  Navigate to the application.
2.  Identify the iframe.
3.  Create a `frameLocator`.
4.  Locate the button inside the iframe.
5.  Register the dialog handler.
6.  Click the button.
7.  Handle the prompt.
8.  Verify the resulting text.

The important concept is that frame handling and dialog handling solve
two different problems:

-   Frame handling → access elements inside an iframe.
-   Dialog handling → handle browser JavaScript dialogs.

------------------------------------------------------------------------

# 8. Key Methods to Remember

``` text
page.frames()
page.frameLocator()
frame.frameLocator()
page.on("dialog")
dialog.type()
dialog.message()
dialog.accept()
dialog.dismiss()
expect(locator).toHaveText()
```

# 9. Classroom Code -- Simple Alert Handling

``` typescript
import { test } from "@playwright/test";

test("test to verify the user is able handle alert", async ({ page }) => {

    // Load the application URL
    await page.goto("https://leafground.com/alert.xhtml");

    // Handle all types of JavaScript dialogs
    page.on("dialog", async (dialog) => {

        // Check whether the dialog is a prompt
        if (dialog.type() === "prompt") {
            await dialog.accept("Alert was handled By Us");
        }

        // Check whether the dialog is a confirmation
        else if (dialog.type() === "confirm") {
            await dialog.dismiss();
        }

        // Handle the simple alert
        else {
            await dialog.accept();
        }
    });

    // Click the Show button of the Simple Alert
    await page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click();

    // Click the Show button of the Confirmation Alert
    await page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click();

    // Click the Show button of the Prompt Alert
    await page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click();
});
```

# 10. Classroom Code -- Single Frame

``` typescript
import { test } from "@playwright/test";

test("test to verify the user is able handle frames", async ({ page }) => {

    // Load the application URL
    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Create a reference to the single frame
    const frameReference = page.frameLocator("[id='singleframe']");

    // Fill the email inside the frame
    await frameReference.locator("//input[@type='text']").fill("kumar@gmail.com");
});
```

# 11. Classroom Code -- Nested Frames

``` typescript
import { test } from "@playwright/test";

test("test to verify the user is able handle frames", async ({ page }) => {

    // Load the application URL
    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Navigate to the nested frame section
    await page.getByRole("link", { name: "frame with in an Iframe" }).click();

    // Create a reference to the outer frame
    const outerFrame = page.frameLocator("[src='MultipleFrames.html']");

    // Create a reference to the inner frame
    const innerFrame = outerFrame.frameLocator("[src='SingleFrame.html']");

    // Fill the email inside the inner frame
    await innerFrame.locator("//input[@type='text']").fill("maha@gmail.com");
});
```
