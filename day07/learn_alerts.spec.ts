import { test } from "@playwright/test";

test("test to verify the user is able to handle alert", async ({ page }) => {

    // Load the application URL
    await page.goto("https://leafground.com/alert.xhtml");

    // Handle all types of JavaScript dialogs
    page.on("dialog", async (dia) => {

        // Check whether the dialog is a prompt
        if (dia.type() === "prompt") {
            await dia.accept("Alert was handled By Us");
        }

        // Check whether the dialog is a confirmation
        else if (dia.type() === "confirm") {
            await dia.dismiss();
        }

        // Handle the simple alert
        else {
            await dia.accept();
        }
    });

    // Click the Show button of the Simple Alert
    await page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click();

    // Click the Show button of the Confirmation Alert
    await page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click();

    // Click the Show button of the Prompt Alert
    await page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click();

    // Wait for the alert handling to complete
    await page.waitForTimeout(10000);
});