# Playwright Frames and Dialogs -- Interview Questions

## Basic Questions

### 1. What is an iframe?

An iframe is a webpage or HTML document embedded inside another webpage.

### 2. Why do we need frame handling in Playwright?

Elements inside an iframe belong to a separate document. Frame handling
allows Playwright to locate and interact with those elements.

### 3. What is `page.frameLocator()`?

`page.frameLocator()` creates a reference to an iframe and allows us to
locate elements inside that iframe.

### 4. What does `page.frames()` return?

It returns the collection of all frames available on the current page.

### 5. What is the difference between `page.frames()` and `page.frameLocator()`?

`page.frames()` gives access to Frame objects, while
`page.frameLocator()` provides a locator-based way to interact with
elements inside an iframe.

### 6. How do you fill an input inside an iframe?

``` typescript
const frame = page.frameLocator("iframe");

await frame.locator("input").fill("kumar@gmail.com");
```

### 7. How do you handle a nested iframe?

Create a locator for the outer frame and then use `frameLocator()` again
for the inner frame.

``` typescript
const outerFrame = page.frameLocator("outer-frame-selector");
const innerFrame = outerFrame.frameLocator("inner-frame-selector");

await innerFrame.locator("input").fill("maha@gmail.com");
```

### 8. Does Playwright require `switchTo().frame()` like Selenium?

No. Playwright provides `frameLocator()` for directly locating elements
inside an iframe.

### 9. How do you inspect all frames on a page?

``` typescript
const allFrames = page.frames();

for (let i = 0; i < allFrames.length; i++) {
    console.log(allFrames[i].url());
}
```

### 10. How do you identify which frame contains a required element?

You can inspect the available frames using `page.frames()` and check
their URLs or use `frameLocator()` with the iframe selector.

------------------------------------------------------------------------

# Dialog Interview Questions

### 11. What are JavaScript dialogs?

JavaScript dialogs are browser dialogs such as alert, confirm, and
prompt.

### 12. What are the three common JavaScript dialog types?

-   Alert
-   Confirm
-   Prompt

### 13. How do you handle a JavaScript dialog in Playwright?

Use the `page.on("dialog")` event.

``` typescript
page.on("dialog", async (dialog) => {
    await dialog.accept();
});
```

### 14. What does `dialog.type()` return?

It returns the dialog type, such as `alert`, `confirm`, or `prompt`.

### 15. How do you get the message displayed in a dialog?

Use:

``` typescript
dialog.message()
```

### 16. How do you accept an alert?

``` typescript
await dialog.accept();
```

### 17. How do you dismiss a confirmation dialog?

``` typescript
await dialog.dismiss();
```

### 18. How do you enter a value into a prompt?

Pass the value to `dialog.accept()`.

``` typescript
await dialog.accept("Kumar");
```

### 19. How do you handle different dialog types in one test?

Use `if/else` conditions based on `dialog.type()`.

``` typescript
page.on("dialog", async (dialog) => {

    if (dialog.type() === "prompt") {
        await dialog.accept("Kumar");
    }

    else if (dialog.type() === "confirm") {
        await dialog.dismiss();
    }

    else {
        await dialog.accept();
    }
});
```

### 20. Where should the dialog handler be registered?

Register the dialog handler before clicking the element that triggers
the dialog.

### 21. What happens if a dialog is not handled?

A JavaScript dialog can block the page interaction. Therefore, it should
be handled when the application triggers it.

### 22. Can we get the dialog message before accepting it?

Yes.

``` typescript
page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
});
```

------------------------------------------------------------------------

# Scenario-Based Interview Questions

### 23. How would you automate a prompt dialog and enter a name?

``` typescript
page.on("dialog", async (dialog) => {
    if (dialog.type() === "prompt") {
        await dialog.accept("Kumar");
    }
});
```

### 24. How would you handle a confirm dialog by clicking Cancel?

``` typescript
page.on("dialog", async (dialog) => {
    if (dialog.type() === "confirm") {
        await dialog.dismiss();
    }
});
```

### 25. How would you accept only an alert and dismiss a confirm dialog?

``` typescript
page.on("dialog", async (dialog) => {

    if (dialog.type() === "alert") {
        await dialog.accept();
    }

    else if (dialog.type() === "confirm") {
        await dialog.dismiss();
    }
});
```

### 26. How would you verify different text after accepting and dismissing a prompt?

Use a condition based on the action performed and verify the
corresponding result using `expect(...).toHaveText()`.

### 27. How would you automate a button inside an iframe?

``` typescript
const frame = page.frameLocator("iframe");

await frame.getByRole("button", { name: "Try It" }).click();
```

### 28. How would you handle a button inside a nested iframe?

``` typescript
const outerFrame = page.frameLocator("outer-frame");
const innerFrame = outerFrame.frameLocator("inner-frame");

await innerFrame.getByRole("button", { name: "Try It" }).click();
```

### 29. What is the difference between a frame and a dialog?

A frame is an embedded document inside a webpage. A dialog is a browser
JavaScript interaction such as alert, confirm, or prompt.

### 30. In a test containing both an iframe and a prompt, what is the execution flow?

Typical flow:

1.  Load the page.
2.  Identify the iframe.
3.  Create the frame reference.
4.  Register the dialog handler.
5.  Locate the required button inside the frame.
6.  Click the button.
7.  Handle the prompt.
8.  Verify the resulting text.

------------------------------------------------------------------------

# Interview Coding Practice

## Question 1

Write a Playwright script to:

-   Open the Frames application.
-   Identify the single iframe.
-   Enter an email address inside the iframe.

## Question 2

Write a Playwright script to:

-   Open the Frames application.
-   Navigate to the nested iframe page.
-   Locate the outer iframe.
-   Locate the inner iframe.
-   Enter an email address inside the inner iframe.

## Question 3

Write a Playwright script to:

-   Open the Alert application.
-   Handle an alert.
-   Handle a confirm dialog.
-   Handle a prompt dialog.
-   Enter a name into the prompt.

## Question 4

Write a single dialog handler that performs the following:

``` text
alert   -> accept
confirm -> dismiss
prompt  -> accept with a value
```

## Question 5

How would you verify the text displayed after accepting a prompt?

Use a Playwright assertion such as:

``` typescript
await expect(locator).toHaveText("Expected Text");
```

## Question 6

Explain why the dialog handler should be registered before clicking the
button that opens the dialog.

## Question 7

Explain the difference between:

``` typescript
page.frames()
```

and

``` typescript
page.frameLocator()
```

## Question 8

Explain how you would handle a nested iframe without using Selenium's
`switchTo().frame()`.

## Question 9

A prompt appears after clicking a button inside an iframe. Explain the
complete Playwright approach.

## Question 10

Write a test using `if/else` to verify different expected text depending
on whether the prompt was accepted or dismissed.
