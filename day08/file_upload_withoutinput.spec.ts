import { test } from "@playwright/test";
import path from "path";

test("Test to verify file upload", async ({ page }) => {

    // Load the application URL.
    await page.goto("https://blazorise.com/docs/components/file-picker");

    // Register an event listener for the file chooser event.
    const fileUploadPromise = page.waitForEvent("filechooser");

    // Click the Choose files upload element.
    await page.locator("//span[text()='Choose files']").first().click();

    // Wait for the file chooser event and get the file chooser reference.
    const fileUploadRef = await fileUploadPromise;

    // Set the file to be uploaded.
    await fileUploadRef.setFiles(
        path.join(__dirname, "../../Data/TestleafLogo.png")
    );

    // Wait for 5 seconds after uploading the file.
    await page.waitForTimeout(5000);
});