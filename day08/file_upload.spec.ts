import { test } from "@playwright/test";
import path from "path";

test("Test to verify file upload", async ({ page }) => {

    // Load the application URL.
    await page.goto("https://demoqa.com/upload-download");

    // Locate the file upload element.
    await page.getByRole("button", { name: "Choose File" })
        .setInputFiles(path.join(__dirname, "../../Data/Logo.png"));

    // Wait for 7 seconds after uploading the file.
    await page.waitForTimeout(7000);
});