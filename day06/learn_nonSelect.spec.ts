import { test } from "@playwright/test";

// Create a test to learn how to handle a non-select dropdown
test("test to learn non select dropdown", async ({ page }) => {

    // Navigate to the LeafGround Select Components page
    await page.goto("https://leafground.com/select.xhtml");

    // Click the Country dropdown using the visible label text
    await page.locator("//label[text()='Select Country']").click();

    // Select India from the list of available options
    await page.getByRole("option", { name: "India" }).click();

});