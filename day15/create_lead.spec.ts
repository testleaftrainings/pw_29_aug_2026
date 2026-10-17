import {test} from "@playwright/test";


test.use({storageState:"SSData/login_leaftaps.json"})

// Create a test to verify the Create Lead functionality
test("test to verify create lead", async({page})=>{

// Navigate to the Leaftaps login page
await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL181445924975");

// Locate the Leads text exactly and click it
await page.getByText("Leads",{exact:true}).click();

// Locate the Create Lead text exactly and click it
//await page.getByText("Create Lead",{exact:true}).click();

// Locate the Create Lead link using its role and click it
await page.getByRole("link",{name:"Create Lead"}).click();

// Locate the Company Name field using its ID and enter the company name
await page.locator('#createLeadForm_companyName').fill("TestLeaf");

// Locate the First Name field using its ID and enter the first name
await page.locator("#createLeadForm_firstName").fill("Vineeth");

// Locate the Last Name field using its ID and enter the last name
await page.locator('#createLeadForm_lastName').fill("Rajendran");

// Locate the Submit button using its name attribute and click it
await page.locator('[name="submitButton"]').click();

});