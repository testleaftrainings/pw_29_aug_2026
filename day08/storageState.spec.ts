import { test } from "@playwright/test";

test("Test to verify Salesforce login and save storage state", async ({ page, context }) => {

    // Load the Salesforce login page.
    await page.goto("https://login.salesforce.com/?locale=in");

    // Enter the Salesforce username.
    await page.getByRole("textbox", { name: "Username" }).fill("seenivasan.shanmugam.c2f550ec7762@agentforce.com");

    // Click the Salesforce login button.
    await page.getByRole("button", { name: "Log In" }).click();

    // Enter the Salesforce password.
    await page.getByRole("textbox", { name: "Password" }).fill("Test@2026");

    // Click the Salesforce login button.
    await page.getByRole("button", { name: "Log In" }).click();

    // Wait for the Salesforce application to complete the login process.
    await page.waitForTimeout(30_000);

    // Save the authenticated browser session into a storage state file.
    await context.storageState({ path: "Data/salesForceLogin.json" });
});
