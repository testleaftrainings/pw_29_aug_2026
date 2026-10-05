import { test } from "@playwright/test";

// Annotations - Used to customize test execution

// only - Execute only the selected test
// skip - Skip the selected test
// fail - Mark the test as expected to fail
// slow - Increase the default test timeout

// Example:
// test.only()
// test.skip()
// test.fail()
// test.slow()


// Group multiple testcases using describe
test.describe("Smoke Testcases", async () => {

    // Configure all tests inside this describe block to run in parallel
    test.describe.configure({ mode: "parallel" });

    // Testcase 1 - Verify login with valid credentials
    test("Test to verify login with Valid credentials", async ({ page }) => {

        // Increase the timeout for this test if required
        // test.slow();

        // Navigate to the application
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate and click the element
        await page.locator(".id").click();

        // Print the execution status in the terminal
        console.log("Valid credentials entered");
    });

    // Testcase 2 - Verify login with invalid credentials
    test("Test to verify login with InValid credentials", async ({ page }) => {

        // Navigate to the application
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Print the execution status in the terminal
        console.log("Invalid credentials entered");
    });

    // Testcase 3 - Verify login without credentials
    test("Test to verify login without credentials", async ({ page }) => {

        // Navigate to the application
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Print the execution status in the terminal
        console.log("Credentials not entered");
    });
});