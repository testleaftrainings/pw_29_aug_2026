import { test } from "@playwright/test";

test("test to verify the user is able handle frames", async ({ page }) => {

    // Load the application URL
    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Get all the frames available on the page
    const allframes = page.frames();

    // Print the total number of frames
    console.log(allframes.length);

    // Print the URL of each frame
    for (let i = 0; i < allframes.length; i++) {
        console.log(allframes[i].url());
    }

    // Fill the email inside the required frame
    await allframes[1].locator("//input[@type='text']").fill("karthik@gmail.com");

    // Wait for the execution to complete
    await page.waitForTimeout(5_000);
});