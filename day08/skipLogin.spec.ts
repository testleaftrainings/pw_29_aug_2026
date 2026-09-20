import { test } from "@playwright/test";

// Reuse the saved Salesforce login session.
test.use({ storageState: "Data/salesForceLogin.json" });

test("Learn to use Playwright locators", async ({ page }) => {

    // Navigate directly to the Salesforce home page.
    await page.goto(
        "https://orgfarm-8ea80f3b91-dev-ed.develop.lightning.force.com/lightning/page/home"
    );

    // Wait for the Salesforce home page to load.
    await page.waitForTimeout(5000);
});


