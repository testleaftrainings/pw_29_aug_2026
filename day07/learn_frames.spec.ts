import { test } from "@playwright/test";

test("test to verify the user is able handle frames", async ({ page }) => {

    // Load the application URL
    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Create a reference to the single frame
    const frameReference = page.frameLocator("[id='singleframe']");

    // Fill the email inside the frame
    await frameReference.locator("//input[@type='text']").fill("kumar@gmail.com");

    // Wait for the execution to complete
    await page.waitForTimeout(5_000);
});