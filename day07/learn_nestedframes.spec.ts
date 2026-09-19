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

    // Wait for the execution to complete
    await page.waitForTimeout(5_000);
});
