import { test } from "@playwright/test";

test("Test to verify the user is able to handle window", async ({ page, context }) => {

    // Load the Amazon application.
    await page.goto("https://www.amazon.in/");

    // Enter "Mobiles" in the Amazon search box.
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("Mobiles");

    // Click the Amazon search button.
    await page.locator("[id='nav-search-submit-button']").click();

    // Register an event listener for the newly opened page.
    const newPagePromise = context.waitForEvent("page");

    // Click the first matching mobile product.
    await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']/h2").first().click();

    // Wait for the newly opened page to be available.
    const newPage = await newPagePromise;

    // Wait until the newly opened page finishes loading.
    await newPage.waitForLoadState();

    // Click the Join Prime button on the new page.
    await newPage.locator("[id='prime-abb-signup-button']").click();

    // Print the title of the newly opened page.
    console.log(await newPage.title());

    // Bring the original Amazon page to the front.
    await page.bringToFront();

    // Enter "Home appliances" in the original page search box.
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("Home appliances");

    // Click the search button on the original page.
    await page.locator("[id='nav-search-submit-button']").click();

    // Wait for the search results page to update.
    await page.waitForTimeout(10_000);
});