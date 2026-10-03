# Playwright Page Object Model - Notes

## 1. Objective

The goal is to create a Playwright automation framework using Page Object Model (POM) for this flow:

**Login → CRM/SFA → Leads**

Application:

`https://leaftaps.com/opentaps/control/main`

---

# 2. What is Page Object Model?

Page Object Model is a design pattern used in test automation to separate:

- Page locators
- Page-specific actions
- Test/business flow

The main idea is:

```text
Page Class
    |
    +-- Locators
    +-- Page Actions

Test Class
    |
    +-- Business Flow
    +-- Assertions
```

For this activity:

```text
LoginPage.ts
    → Login page locators and login action

WelcomePage.ts
    → CRM/SFA locator and action

MyHomePage.ts
    → Leads locator and action

CreateLead.spec.ts
    → Test scenario and flow
```

---

# 3. Why Do We Use POM?

Without POM, locators and actions are written directly inside the test.

Example:

```typescript
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");
await page.getByRole("button", { name: "Login" }).click();
```

With POM:

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
```

The test becomes easier to read because the test focuses on the business action rather than implementation details.

---

# 4. Project Structure

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

# 5. LoginPage.ts

## Purpose

`LoginPage.ts` represents the Login page.

It contains:

- Page reference
- Username locator
- Password locator
- Login button locator
- Login action

## Import

```typescript
import { Page, Locator } from "@playwright/test";
```

`Page` represents the Playwright browser page.

`Locator` represents an element locator.

## Class

```typescript
export class LoginPage {
```

A class groups related properties and methods together.

## Properties

```typescript
page: Page;
usernameField: Locator;
passwordField: Locator;
loginButton: Locator;
```

These properties store the Page object and the locators required by the Login page.

## Constructor

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

### What is a constructor?

A constructor is a special method that executes automatically when an object is created.

Example:

```typescript
let loginPageObj = new LoginPage(page);
```

When this statement executes:

1. A `LoginPage` object is created.
2. The `page` object is passed to the constructor.
3. `this.page = page` stores the received page object.
4. The locators are initialized.

## What is `this`?

`this` refers to the current object.

Example:

```typescript
this.page = page;
```

Here:

- `page` on the right = constructor parameter
- `this.page` on the left = class property

---

# 6. Login Method

```typescript
async login(username: string, password: string) {

    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();

}
```

The method receives test data:

```text
username
password
```

Then performs:

```text
Fill username
    ↓
Fill password
    ↓
Click Login
```

This hides the implementation details from the test.

The test only needs:

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
```

---

# 7. WelcomePage.ts

## Purpose

`WelcomePage.ts` represents the page displayed after login.

It contains:

```typescript
page: Page;
crmsfaLink: Locator;
```

The CRM/SFA link is identified using:

```typescript
this.page.getByRole("link", { name: "CRM/SFA" });
```

The action is:

```typescript
async clickCrmsfa() {
    await this.crmsfaLink.click();
}
```

The test calls:

```typescript
await welcomePageObj.clickCrmsfa();
```

---

# 8. MyHomePage.ts

## Purpose

`MyHomePage.ts` represents the My Home page.

It contains:

```typescript
page: Page;
leadsLink: Locator;
```

The Leads element is identified using:

```typescript
this.page.getByText("Leads", { exact: true });
```

The action is:

```typescript
async clickLeads() {
    await this.leadsLink.click();
}
```

The test calls:

```typescript
await myHomePageObj.clickLeads();
```

---

# 9. Why Pass `page` to Every Page Class?

The Playwright test provides a `page` object:

```typescript
test("To verify Create Lead", async ({ page }) => {
```

The same page object is passed to every Page Object:

```typescript
let loginPageObj = new LoginPage(page);
let welcomePageObj = new WelcomePage(page);
let myHomePageObj = new MyHomePage(page);
```

So the flow is:

```text
Playwright Page
      |
      +----> LoginPage
      |
      +----> WelcomePage
      |
      +----> MyHomePage
```

All Page Objects operate on the same browser tab/page.

---

# 10. Test Case

The test imports the Page Object classes:

```typescript
import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { WelcomePage } from "../pages/WelcomePage";
import { MyHomePage } from "../pages/MyHomePage";
```

Page Objects are created:

```typescript
let loginPageObj = new LoginPage(page);
let welcomePageObj = new WelcomePage(page);
let myHomePageObj = new MyHomePage(page);
```

Application is opened:

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");
```

Login is performed:

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
```

CRM/SFA is clicked:

```typescript
await welcomePageObj.clickCrmsfa();
```

Leads is clicked:

```typescript
await myHomePageObj.clickLeads();
```

---

# 11. Complete Execution Flow

```text
CreateLead.spec.ts
        |
        v
LoginPage.login()
        |
        v
WelcomePage.clickCrmsfa()
        |
        v
MyHomePage.clickLeads()
        |
        v
Leads Page
```

---

# 12. Page Class vs Test Class

## Page Class

Responsible for:

- Locators
- Page-specific actions

Example:

```typescript
usernameField: Locator;

async login(username: string, password: string) {
    await this.usernameField.fill(username);
}
```

## Test Class

Responsible for:

- Business flow
- Test data
- Assertions

Example:

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
await welcomePageObj.clickCrmsfa();
await myHomePageObj.clickLeads();
```

---

# 13. Constructor Theory

A constructor is automatically called when an object is created.

Example:

```typescript
class LoginFunction {

    username: string;

    constructor(username: string) {
        this.username = username;
        console.log(this.username);
    }

}
```

Object creation:

```typescript
let loginObj = new LoginFunction("Demosales");
```

The value `"Demosales"` is passed to the constructor.

Then:

```typescript
this.username = username;
```

stores it in the object.

This is the same concept used in Playwright POM:

```typescript
constructor(page: Page) {
    this.page = page;
}
```

The Page object is passed from the test and stored inside the Page Object.

---

# 14. Access Modifiers in TypeScript

The commonly used access modifiers are:

```text
public
private
protected
```

There is also:

```text
readonly
```

`readonly` controls reassignment rather than normal visibility.

---

# 15. Public

`public` members can be accessed from outside the class.

Example:

```typescript
export class BankAccount {

    public depositCash() {
        this.withdraw();
        console.log("Amount is deposited");
    }

}
```

Object:

```typescript
let bankOptions = new BankAccount();
bankOptions.depositCash();
```

The `depositCash()` method is accessible from outside the class.

---

# 16. Protected

A `protected` member can be accessed:

- Inside the same class
- Inside a child/derived class

Example:

```typescript
export class BankAccount {

    public depositCash() {
        this.withdraw();
        console.log("Amount is deposited");
    }

    protected withdraw() {
        console.log("Amount is deposited");
    }

}
```

A child class can access `withdraw()`:

```typescript
class FetchAccountDetails extends BankAccount {

    public details() {
        this.withdraw();
    }

}
```

But a normal external object should not directly access the protected member:

```typescript
let bankOptions = new BankAccount();

// bankOptions.withdraw(); // Not accessible
```

The supplied example also shows that the child object can access the inherited public method:

```typescript
let accountObj = new FetchAccountDetails();
accountObj.depositCash();
```

---

# 17. Private

A `private` member is intended to be accessed only inside the class where it is declared.

Example:

```typescript
class AccountDetails {

    private amount: number = 1000;

    public getAmount(): number {
        return this.amount;
    }

}
```

Direct access is not allowed:

```typescript
// console.log(accObj.amount);
```

Instead, the class exposes a public method:

```typescript
console.log(accObj.getAmount());
```

---

# 18. Encapsulation

Encapsulation means controlling access to the internal data of a class and exposing controlled operations to work with that data.

Example:

```typescript
class AccountDetails {

    private amount: number = 1000;

    public getAmount(): number {
        return this.amount;
    }

}
```

Here:

```text
private amount
      ↓
Hidden from direct external access
      ↓
public getAmount()
      ↓
Controlled access
```

The important idea is not simply "make variables private."

The idea is:

**Hide internal data and provide controlled access through methods.**

---

# 19. How Encapsulation Works in the Example

This is the internal data:

```typescript
private amount: number = 1000;
```

External code cannot directly access it:

```typescript
// console.log(accObj.amount);
```

The class provides a public method:

```typescript
public getAmount(): number {
    return this.amount;
}
```

External code uses:

```typescript
console.log(accObj.getAmount());
```

So the object controls how its internal data is accessed.

---

# 20. Connection Between Encapsulation and POM

POM follows a similar idea.

The Page Object stores the locator:

```typescript
usernameField: Locator;
```

The test does not need to know how the locator is implemented.

Instead, the test calls:

```typescript
await loginPageObj.login("Demosalesmanager", "crmsfa");
```

The Page Object controls the actual interaction:

```typescript
await this.usernameField.fill(username);
await this.passwordField.fill(password);
await this.loginButton.click();
```

So:

```text
Test
  |
  | calls method
  v
Page Object
  |
  | uses internal locators
  v
Application
```

---

# 21. Why Locators Are Kept Inside Page Classes

If a locator changes, ideally the change should be made in the Page Object rather than every test.

For example:

```typescript
this.usernameField =
    this.page.getByRole("textbox", { name: "Username" });
```

The test remains:

```typescript
await loginPageObj.login(username, password);
```

This improves maintainability.

---

# 22. Hard Wait vs Playwright Waiting

The activity contains:

```typescript
await page.waitForTimeout(5000);
```

This is useful for classroom observation.

However, it should not normally be used as the actual synchronization mechanism in automation.

Prefer:

- Playwright auto-waiting
- Locator actions
- Assertions
- Explicit waits only when there is a real synchronization requirement

---

# 23. Important Terms

| Term | Meaning |
|---|---|
| Class | Blueprint containing properties and methods |
| Object | Instance created from a class |
| Constructor | Special method executed during object creation |
| `this` | Refers to the current object |
| Page | Playwright browser page object |
| Locator | Playwright representation of an element |
| POM | Design pattern separating page implementation from test flow |
| Encapsulation | Controlling access to internal class data |
| Public | Accessible from outside the class |
| Private | Accessible only within the declaring class |
| Protected | Accessible within the class and derived classes |

---

# 24. Key Takeaways

1. Create one Page Object class for each relevant application page.
2. Store locators inside Page Object classes.
3. Store page-specific actions inside Page Object classes.
4. Pass the Playwright `page` object through the constructor.
5. Use the same `page` object across the Page Objects for the flow.
6. Keep business flow inside the test.
7. Use access modifiers to control class member access.
8. Use private data with public methods when controlled access is required.
9. Use protected members when child classes need access.
10. Avoid unnecessary hard waits in real automation.
