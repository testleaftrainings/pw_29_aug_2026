import { expect, test } from "@playwright/test";

// Create a test to learn and practice Playwright assertions
test("Test to learn assertions", async ({ page }) => {

    // Navigate to the LeafGround Input Components page
    await page.goto("https://leafground.com/input.xhtml");

    // Verify the current page URL using a soft assertion
    await expect.soft(page).toHaveURL("https://leafground.com/input.xhtml");

    // Verify the current page title using a soft assertion
    await expect.soft(page).toHaveTitle("Input Components");

    // Locate the textbox by its role and accessible name and verify that it is editable
    await expect(page.getByRole("textbox", { name: "Babu Manickam" })).toBeEditable();

    // Locate the heading using XPath and retrieve its inner text
    const textOnEle = await page.locator("//h5[text()='Type your name']").innerText();

    // Print the retrieved text in the console
    console.log(textOnEle);

    // Verify that the retrieved text exactly matches the expected text
    expect(textOnEle).toBe("Type your name");
});
