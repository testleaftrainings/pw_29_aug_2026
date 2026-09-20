# Playwright File Handling and Window Handling - Interview Questions

## File Download

### 1. How do you handle file downloads in Playwright?

Use the `download` event before clicking the download element.

```typescript
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button", { name: "Download" }).click();
const download = await downloadPromise;
```

### 2. Why should `waitForEvent("download")` be written before clicking the Download button?

Because the click action triggers the download event. Registering the listener first ensures Playwright can capture the event.

### 3. How do you save a downloaded file with a custom name?

Use `saveAs()`.

```typescript
await download.saveAs(
    path.join(__dirname, "../../download/TestleafLogo.png")
);
```

### 4. How do you get the original filename of a downloaded file?

Use:

```typescript
download.suggestedFilename();
```

### 5. What is the difference between `download.path()` and `download.saveAs()`?

`download.path()` returns the temporary path of the downloaded file.

`download.saveAs()` saves the file to the location specified by the test.

### 6. Can the same downloaded file be saved with a different filename?

Yes. `saveAs()` can be used to save the download to a specified path.

---

# File Upload

### 7. How do you upload a file in Playwright?

Use `setInputFiles()` on the file input element.

```typescript
await page.locator("input[type='file']")
    .setInputFiles(path.join(__dirname, "../../Data/Logo.png"));
```

### 8. Do you need to click the Choose File button when using `setInputFiles()`?

Normally, no.

`setInputFiles()` directly sets the file on the file input element.

### 9. What is `setInputFiles()` used for?

It is used to select one or more files for an HTML file input element.

### 10. How do you upload multiple files?

Pass an array of file paths.

```typescript
await page.locator("input[type='file']").setInputFiles([
    path.join(__dirname, "../../Data/File1.txt"),
    path.join(__dirname, "../../Data/File2.txt")
]);
```

### 11. What is the `filechooser` event?

The `filechooser` event is triggered when an action opens a native file chooser.

### 12. How do you handle a file chooser in Playwright?

```typescript
const fileUploadPromise = page.waitForEvent("filechooser");

await page.getByText("Choose files").click();

const fileUpload = await fileUploadPromise;

await fileUpload.setFiles(
    path.join(__dirname, "../../Data/TestleafLogo.png")
);
```

### 13. What is the difference between `setInputFiles()` and `filechooser.setFiles()`?

`setInputFiles()` directly sets files on a file input element.

`filechooser.setFiles()` is used after capturing a file chooser event triggered by an upload action.

### 14. Which approach is simpler for file upload?

When the file input can be located directly, `setInputFiles()` is usually simpler.

---

# Window and Tab Handling

### 15. How does Playwright represent a browser tab?

A browser tab or window is represented by a `Page` object.

### 16. How do you handle a newly opened tab in Playwright?

Use `context.waitForEvent("page")`.

```typescript
const newPagePromise = context.waitForEvent("page");

await page.getByRole("button", { name: "Open" }).click();

const newPage = await newPagePromise;
```

### 17. Why do we use `context.waitForEvent("page")`?

It waits for a new `Page` to be created within the current browser context.

### 18. What is the difference between Browser, BrowserContext, and Page?

Browser represents the browser instance.

BrowserContext represents an isolated browser session.

Page represents a browser tab or window.

### 19. How do you switch to a newly opened tab in Playwright?

There is no Selenium-style `switchTo().window()`.

Capture the new `Page` object and perform actions on it.

```typescript
const newPage = await newPagePromise;

await newPage.getByRole("button").click();
```

### 20. How do you bring a specific page to the front?

Use:

```typescript
await newPage.bringToFront();
```

### 21. How do you return to the original page?

Use the original page reference.

```typescript
await page.bringToFront();
```

### 22. What is the difference between `context.waitForEvent("page")` and `page.waitForEvent("popup")`?

`context.waitForEvent("page")` listens for a new page created in the browser context.

`page.waitForEvent("popup")` listens for a popup opened by the current page.

### 23. If a new tab is opened from a newly opened tab, can you still use `context.waitForEvent("page")`?

Yes. The new tab is still a `Page` within the same browser context.

### 24. Can multiple tabs exist in one BrowserContext?

Yes. A BrowserContext can contain multiple Page objects.

### 25. How do you wait until a newly opened page is loaded?

Use:

```typescript
await newPage.waitForLoadState();
```

### 26. Why should event listeners be registered before the triggering action?

Because Playwright needs to start listening before the event occurs. Otherwise, the event may happen before the listener is registered.

---

# Scenario-Based Interview Questions

### 27. A download starts when you click a button. What is your approach?

Register the download event first, click the button, wait for the download, and save the file.

### 28. A file chooser appears after clicking an Upload button. How do you handle it?

Register `page.waitForEvent("filechooser")`, click the Upload button, capture the file chooser, and call `setFiles()`.

### 29. A new tab opens after clicking a button. How do you handle it?

Register `context.waitForEvent("page")`, click the button, capture the new page, and perform actions using the new page reference.

### 30. How do you work with the original page after opening a new tab?

Keep the original `page` reference and use:

```typescript
await page.bringToFront();
```

### 31. Why is `waitForTimeout()` not preferred for downloads and new tabs?

Because it uses a fixed delay and does not guarantee that the required event has occurred. Event-based synchronization is more reliable.

### 32. How would you verify that a downloaded file has the expected filename?

Use:

```typescript
expect(download.suggestedFilename()).toBe("expected-file.png");
```

### 33. How would you verify an uploaded file?

Verify the application's UI after upload, such as the displayed filename or uploaded file path.

### 34. How do you handle file paths across Windows and other operating systems?

Use Node.js `path.join()` instead of manually concatenating path separators.

```typescript
path.join(__dirname, "../../Data/Logo.png");
```

### 35. What is the purpose of `__dirname` in file handling?

It provides the directory path of the current file, allowing relative file paths to be constructed reliably.
