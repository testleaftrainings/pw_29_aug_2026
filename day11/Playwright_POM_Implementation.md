# Playwright Page Object Model

## Objective

Create a Playwright automation framework using Page Object Model to automate the following flow:

**Login → Click CRM/SFA → Click Leads**

### Application

`https://leaftaps.com/opentaps/control/main`

---

## Step 1: Create the Pages Folder

Inside the Playwright project, create:

```text
pages
```

Project structure:

```text
project
├── pages
│   ├── LoginPage.ts
│   ├── WelcomePage.ts
│   └── MyHomePage.ts
├── testcases
│   └── CreateLead.spec.ts
├── playwright.config.ts
└── package.json
```

---

## Step 2: Create `LoginPage.ts`

### 2.1 Import Playwright Classes

```typescript
import { Page, Locator } from "@playwright/test";
```

### 2.2 Create the Class

```typescript
export class LoginPage {
```

### 2.3 Declare Page and Locators

```typescript
page: Page;
usernameField: Locator;
passwordField: Locator;
loginButton: Locator;
```

### 2.4 Create the Constructor

```typescript
constructor(page: Page) {

    this.page = page;

    this.usernameField =
        this.page.getByRole("textbox", { name: "Username" });

    this.passwordField =
        this.page.getByRole("textbox", { name: "Password" });

    this.loginButton =
        this.page.getByRole("button", { name: "Login" });
}
```

### 2.5 Create the Login Method

```typescript
async login(username: string, password: string) {

    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();

}
```

### 2.6 Complete `LoginPage.ts`

```typescript
import { Page, Locator } from "@playwright/test";

export class LoginPage {

    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameField =
            this.page.getByRole("textbox", { name: "Username" });

        this.passwordField =
            this.page.getByRole("textbox", { name: "Password" });

        this.loginButton =
            this.page.getByRole("button", { name: "Login" });
    }

    async login(username: string, password: string) {

        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();

    }
}
```

---

## Step 3: Create `WelcomePage.ts`

### 3.1 Import Playwright Classes

```typescript
import { Page, Locator } from "@playwright/test";
```

### 3.2 Create the Class

```typescript
export class WelcomePage {
```

### 3.3 Declare the Locator

```typescript
page: Page;
crmsfaLink: Locator;
```

### 3.4 Create the Constructor

```typescript
constructor(page: Page) {

    this.page = page;

    this.crmsfaLink =
        this.page.getByRole("link", { name: "CRM/SFA" });
}
```

### 3.5 Create the Action Method

```typescript
async clickCrmsfa() {
    await this.crmsfaLink.click();
}
```

### 3.6 Complete `WelcomePage.ts`

```typescript
import { Page, Locator } from "@playwright/test";

export class WelcomePage {

    page: Page;
    crmsfaLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.crmsfaLink =
            this.page.getByRole("link", { name: "CRM/SFA" });
    }

    async clickCrmsfa() {

        await this.crmsfaLink.click();

    }
}
```

---

## Step 4: Create `MyHomePage.ts`

### 4.1 Import Playwright Classes

```typescript
import { Page, Locator } from "@playwright/test";
```

### 4.2 Create the Class

```typescript
export class MyHomePage {
```

### 4.3 Declare the Locator

```typescript
page: Page;
leadsLink: Locator;
```

### 4.4 Create the Constructor

```typescript
constructor(page: Page) {

    this.page = page;

    this.leadsLink =
        this.page.getByText("Leads", { exact: true });
}
```

### 4.5 Create the Action Method

```typescript
async clickLeads() {
    await this.leadsLink.click();
}
```

### 4.6 Complete `MyHomePage.ts`

```typescript
import { Page, Locator } from "@playwright/test";

export class MyHomePage {

    page: Page;
    leadsLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.leadsLink =
            this.page.getByText("Leads", { exact: true });
    }

    async clickLeads() {

        await this.leadsLink.click();

    }
}
```

---

## Step 5: Create the Test Case

Create:

```text
testcases/CreateLead.spec.ts
```

---

## Step 6: Import the Required Classes

```typescript
import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { WelcomePage } from "../pages/WelcomePage";
import { MyHomePage } from "../pages/MyHomePage";
```

---

## Step 7: Create the Test

```typescript
test("To verify Create Lead", async ({ page }) => {
```

---

## Step 8: Create Page Objects

```typescript
let loginPageObj = new LoginPage(page);
let welcomePageObj = new WelcomePage(page);
let myHomePageObj = new MyHomePage(page);
```

All three Page Objects use the same Playwright `Page` object.

---

## Step 9: Navigate to the Application

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");
```

---

## Step 10: Perform Login

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
```

---

## Step 11: Click CRM/SFA

```typescript
await welcomePageObj.clickCrmsfa();
```

---

## Step 12: Click Leads

```typescript
await myHomePageObj.clickLeads();
```

---

## Step 13: Add Wait Only for Demonstration

For classroom observation only:

```typescript
await page.waitForTimeout(5000);
```

In real automation, avoid unnecessary hard waits. Prefer Playwright's auto-waiting and proper assertions.

---

# Complete Test Case

```typescript
import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { WelcomePage } from "../pages/WelcomePage";
import { MyHomePage } from "../pages/MyHomePage";

test("To verify Create Lead", async ({ page }) => {

    let loginPageObj = new LoginPage(page);
    let welcomePageObj = new WelcomePage(page);
    let myHomePageObj = new MyHomePage(page);

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await loginPageObj.login(
        "Demosalesmanager",
        "crmsfa"
    );

    await welcomePageObj.clickCrmsfa();

    await myHomePageObj.clickLeads();

    await page.waitForTimeout(5000);
});
```

---

# Execution Flow

```text
CreateLead.spec.ts
        |
        v
   LoginPage
        |
        | login()
        v
  WelcomePage
        |
        | clickCrmsfa()
        v
  MyHomePage
        |
        | clickLeads()
        v
   Leads Page
```

---

# POM Responsibility

| File | Responsibility |
|---|---|
| `LoginPage.ts` | Login page locators and login action |
| `WelcomePage.ts` | CRM/SFA locator and click action |
| `MyHomePage.ts` | Leads locator and click action |
| `CreateLead.spec.ts` | Test flow / business scenario |

---

# Key POM Rule

**Locators + page-specific actions → Page class**

**Business flow → Test class**

The test should not contain:

```typescript
await page.getByRole("textbox", { name: "Username" }).fill(...);
await page.getByRole("textbox", { name: "Password" }).fill(...);
await page.getByRole("button", { name: "Login" }).click();
```

Instead, it should contain:

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
```

The main benefit of Page Object Model is **separating page implementation from the test/business flow**.
