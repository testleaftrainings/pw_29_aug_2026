import {test} from "@playwright/test";

// Create a test to verify the Create Lead functionality
test("test to verify create lead", async({page})=>{

// Navigate to the Leaftaps login page
await page.goto("https://leaftaps.com/opentaps/control/login");

// Locate the Username textbox using its accessible name and enter the username
await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");

// Locate the Password textbox using its accessible name and enter the password
//await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");

// Locate the Password field using its associated label and enter the password
await page.getByLabel("Password").fill("crmsfa");

// Locate the Login button using its role and click it
await page.getByRole("button",{name:"Login"}).click();

// Locate the CRM/SFA text and click it
await page.getByText("CRM/SFA").click();

await page.context().storageState({path:"SSData/login_leaftaps.json"});

});