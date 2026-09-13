import {test} from "@playwright/test";

// Create a test to verify the Create Lead functionality
test("test to verify create lead", async({page})=>{

// Navigate to the Leaftaps login page
await page.goto("https://leaftaps.com/opentaps/control/login");

// Locate the first textbox and enter the username
//await page.getByRole("textbox").first().fill("Demosalesmanager");

// Locate the first textbox using nth() and enter the username
//await page.getByRole("textbox").nth(0).fill("Demosalesmanager");

// Locate the last textbox and enter the password
//await page.getByRole("textbox").last().fill("crmsfa");

// Locate the second textbox using nth() and enter the password
//await page.getByRole("textbox").nth(1).fill("crmsfa");

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

//Handle Dropdown using value
//await page.locator("#createLeadForm_dataSourceId").selectOption({value:"LEAD_EMPLOYEE"});

//Handle Dropdown using label
 //await page.locator("#createLeadForm_dataSourceId").selectOption({label:"Partner"});

 //Handle Dropdown using index
 await page.locator("#createLeadForm_dataSourceId").selectOption([{index:2},{index:3},{index:5}]);

// Locate the Submit button using its name attribute and click it
await page.locator('[name="submitButton"]').click();

});