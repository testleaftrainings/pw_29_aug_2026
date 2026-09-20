# Playwright File Handling and Window Handling - Notes

## 1. File Download

### Basic Flow

1. Navigate to the application.
2. Register the `download` event.
3. Click the Download button.
4. Capture the downloaded file reference.
5. Save the file using `saveAs()`.

### Example

```typescript
import { test } from "@playwright/test";
import path from "path";

test("File Download", async ({ page }) => {

    // Load the application URL.
    await page.goto("https://demoqa.com/upload-download");

    // Register an event listener for the download event.
    const fileDownloadPromise = page.waitForEvent("download");

    // Click the Download button.
    await page.getByRole("button", { name: "Download" }).click();

    // Wait for the download event and get the downloaded file reference.
    const fileDownload = await fileDownloadPromise;

    // Save the file with its original suggested filename.
    await fileDownload.saveAs(
        path.join(__dirname, `../../download/${fileDownload.suggestedFilename()}`)
    );
});
```

### Important Methods

| Method | Purpose |
|---|---|
| `page.waitForEvent("download")` | Waits for a file download event |
| `download.suggestedFilename()` | Gets the original filename suggested by the server |
| `download.saveAs(path)` | Saves the downloaded file to a custom location |
| `download.path()` | Returns the temporary path of the downloaded file |

### Important Point

Register the download event **before** clicking the Download button.

```typescript
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button", { name: "Download" }).click();
const download = await downloadPromise;
```

---

## 2. File Upload Using `setInputFiles()`

### Basic Flow

1. Navigate to the application.
2. Identify the file input element.
3. Use `setInputFiles()` to provide the file path.

### Example

```typescript
import { test } from "@playwright/test";
import path from "path";

test("File Upload", async ({ page }) => {

    // Load the application URL.
    await page.goto("https://demoqa.com/upload-download");

    // Upload the file using the file input element.
    await page.getByRole("button", { name: "Choose File" })
        .setInputFiles(path.join(__dirname, "../../Data/Logo.png"));
});
```

### Why `setInputFiles()`?

`setInputFiles()` directly sets the file on the HTML `<input type="file">` element.

A separate click is normally not required.

### Syntax

```typescript
await locator.setInputFiles("file path");
```

### Multiple Files

```typescript
await locator.setInputFiles([
    path.join(__dirname, "../../Data/File1.txt"),
    path.join(__dirname, "../../Data/File2.txt")
]);
```

---

## 3. File Upload Using `filechooser`

Sometimes the application opens the native file chooser when an element is clicked. In that case, Playwright can handle it using the `filechooser` event.

### Basic Flow

1. Register the `filechooser` event.
2. Click the upload element.
3. Capture the file chooser reference.
4. Use `setFiles()` to select the file.

### Example

```typescript
import { test } from "@playwright/test";
import path from "path";

test("File Upload Using Filechooser", async ({ page }) => {

    // Load the application URL.
    await page.goto("https://blazorise.com/docs/components/file-picker");

    // Register an event listener for the file chooser event.
    const fileUploadPromise = page.waitForEvent("filechooser");

    // Click the Choose files upload element.
    await page.locator("//span[text()='Choose files']").first().click();

    // Wait for the file chooser event.
    const fileUploadRef = await fileUploadPromise;

    // Set the file to be uploaded.
    await fileUploadRef.setFiles(
        path.join(__dirname, "../../Data/TestleafLogo.png")
    );
});
```

### Important Methods

| Method | Purpose |
|---|---|
| `page.waitForEvent("filechooser")` | Waits for the native file chooser event |
| `filechooser.setFiles()` | Selects the file for upload |
| `locator.setInputFiles()` | Directly sets files on a file input |

### `setInputFiles()` vs `filechooser`

`setInputFiles()` is generally simpler when the file input element can be located directly.

Use `filechooser` when clicking the upload control triggers the native file chooser and you need to capture that event.

---

# 4. Window / Tab Handling

In Playwright, a new tab or window opened within the same browser context is represented as a new `Page`.

### Important Concept

```text
Browser
   |
   └── Browser Context
          |
          ├── Page 1
          ├── Page 2
          └── Page 3
```

Multiple tabs or windows in the same context are handled as multiple `Page` objects.

---

## 5. Handling a New Tab Using `context.waitForEvent("page")`

### Basic Flow

1. Register the `page` event.
2. Click the element that opens the new tab.
3. Capture the new page reference.
4. Wait for the new page to load.
5. Perform actions on the new page.

### Example

```typescript
import { test } from "@playwright/test";

test("Window Handling", async ({ page, context }) => {

    // Load the application URL.
    await page.goto("https://leafground.com/window.xhtml");

    // Register an event listener for the newly opened page.
    const newPagePromise = context.waitForEvent("page");

    // Click the button that opens a new tab.
    await page.getByRole("button", { name: "Open", exact: true }).click();

    // Wait for the newly opened page.
    const newPage = await newPagePromise;

    // Wait for the new page to finish loading.
    await newPage.waitForLoadState();

    // Print the title of the new page.
    console.log(await newPage.title());
});
```

---

## 6. Switching Between Pages

Playwright does not use Selenium-style `switchTo().window()`.

Instead, maintain references to the required `Page` objects.

```typescript
await page.bringToFront();
```

This brings the specified page to the front.

### Example

```typescript
await newPage.bringToFront();
```

To return to the original page:

```typescript
await page.bringToFront();
```

---

## 7. `context.waitForEvent("page")` vs `page.waitForEvent("popup")`

### `context.waitForEvent("page")`

Used to detect a new page created in the browser context.

```typescript
const newPagePromise = context.waitForEvent("page");
```

### `page.waitForEvent("popup")`

Used when the current page directly opens a popup.

```typescript
const popupPromise = page.waitForEvent("popup");
```

### General Rule

| Scenario | Recommended Event |
|---|---|
| New page/tab created in the context | `context.waitForEvent("page")` |
| Current page opens a popup | `page.waitForEvent("popup")` |

---

# 8. Common Mistakes

## Mistake 1: Registering the event after clicking

Incorrect:

```typescript
await page.getByRole("button", { name: "Download" }).click();
const downloadPromise = page.waitForEvent("download");
```

Correct:

```typescript
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button", { name: "Download" }).click();
```

The event listener should be registered before the action that triggers the event.

## Mistake 2: Using `waitForTimeout()` instead of waiting for an event

Avoid using:

```typescript
await page.waitForTimeout(5000);
```

as the primary mechanism for waiting for downloads or new tabs.

Prefer event-based synchronization:

```typescript
const downloadPromise = page.waitForEvent("download");
```

and:

```typescript
const newPagePromise = context.waitForEvent("page");
```

## Mistake 3: Trying to switch windows using Selenium syntax

Do not use:

```typescript
driver.switchTo().window();
```

In Playwright, use a `Page` reference:

```typescript
await newPage.bringToFront();
```

---

# 9. Path Handling

Node.js `path` is useful for creating platform-independent file paths.

```typescript
import path from "path";
```

Example:

```typescript
path.join(__dirname, "../../Data/Logo.png");
```

### Understanding `__dirname`

`__dirname` represents the directory of the current TypeScript/JavaScript file when using the CommonJS-style Node.js environment.

For example:

```text
Project
│
├── Data
│   └── Logo.png
│
└── tests
    └── file.spec.ts
```

From `file.spec.ts`:

```typescript
path.join(__dirname, "../Data/Logo.png");
```

`..` means move one directory up.

`../..` means move two directories up.

---

# 10. Interview Quick Revision

### File Download

```text
waitForEvent("download")
        ↓
click Download
        ↓
await downloadPromise
        ↓
saveAs()
```

### File Upload

```text
Locate file input
        ↓
setInputFiles()
```

### Filechooser Upload

```text
waitForEvent("filechooser")
        ↓
click upload element
        ↓
await filechooser
        ↓
setFiles()
```

### Window Handling

```text
context.waitForEvent("page")
        ↓
click element
        ↓
await newPagePromise
        ↓
newPage actions
```
