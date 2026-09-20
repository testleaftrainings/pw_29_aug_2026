import { test } from "@playwright/test";
import path from "path";

test("Test to verify file download", async ({ page }) => {

    // Load the application URL.
    await page.goto("https://demoqa.com/upload-download");

    // Register an event listener for the download event.
    const fileDownloadPromise = page.waitForEvent("download");

    // Click the Download button.
    await page.getByRole("button", { name: "Download" }).click();

    // Wait for the download event and get the downloaded file reference.
    const fileDownload = await fileDownloadPromise;

    // Save the downloaded file with its original suggested filename.
    await fileDownload.saveAs(
        path.join(__dirname, `../../download/${fileDownload.suggestedFilename()}`)
    );

    // Save the downloaded file with a customized filename.
    await fileDownload.saveAs(
        path.join(__dirname, "../../download/TestleafLogo.png")
    );

    // Wait for 7 seconds after the download.
    await page.waitForTimeout(7000);
});