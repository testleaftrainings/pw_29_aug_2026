# Playwright POM and TypeScript - Interview Questions

## Interview Preparation Guide

This question bank is based on the Playwright Page Object Model implementation and the TypeScript concepts used with it, including constructors, access modifiers, inheritance, and encapsulation.

---

# Section 1: Page Object Model

## 1. What is Page Object Model?

Page Object Model, or POM, is a design pattern used in test automation to separate page locators and page-specific actions from the test/business flow.

Example:

```text
LoginPage
    → Locators
    → Login action

Test
    → Business flow
    → Assertions
```

---

## 2. Why do we use POM in Playwright?

Main reasons:

- Reduces duplication.
- Separates locators from test logic.
- Improves readability.
- Makes maintenance easier.
- Allows page-specific actions to be reused.
- Keeps the test focused on the business scenario.

---

## 3. What should be present inside a Page Object class?

Typically:

- Playwright `Page` reference
- Locators
- Page-specific methods/actions

Example:

```typescript
page: Page;
usernameField: Locator;
passwordField: Locator;

async login(username: string, password: string) {
    // page-specific actions
}
```

---

## 4. What should be present inside the test class?

The test should mainly contain:

- Test scenario
- Page Object creation
- Business flow
- Test data
- Assertions

Example:

```typescript
await loginPageObj.login(username, password);
await welcomePageObj.clickCrmsfa();
await myHomePageObj.clickLeads();
```

---

## 5. Why should we avoid writing locators directly in the test?

If locators are directly written in many tests, a locator change can require changes in multiple places.

With POM, the locator is maintained in the Page Object.

Example:

```typescript
this.usernameField =
    this.page.getByRole("textbox", { name: "Username" });
```

The test only calls:

```typescript
await loginPageObj.login(username, password);
```

---

## 6. Why do we pass `page` to the Page Object constructor?

The Playwright test provides the browser `page` object.

```typescript
test("test", async ({ page }) => {
```

The same object is passed to the Page Object:

```typescript
let loginPageObj = new LoginPage(page);
```

The Page Object then uses that page to create locators and perform actions.

---

## 7. Why do all Page Objects receive the same `page` object?

Because the pages in this flow are being interacted with in the same browser page/tab.

Example:

```typescript
let loginPageObj = new LoginPage(page);
let welcomePageObj = new WelcomePage(page);
let myHomePageObj = new MyHomePage(page);
```

All three Page Objects operate on the same Playwright `Page`.

---

## 8. What is the difference between a Page Object and a Page?

A Playwright `Page` is the browser tab/page provided by Playwright.

A Page Object is our own TypeScript class that represents an application page and contains its locators and actions.

```text
Playwright Page
    = Browser interaction object

LoginPage
    = Our Page Object class
```

---

# Section 2: Constructor

## 9. What is a constructor?

A constructor is a special method that executes automatically when an object is created.

Example:

```typescript
class LoginFunction {

    username: string;

    constructor(username: string) {
        this.username = username;
    }
}
```

Object creation:

```typescript
let loginObj = new LoginFunction("Demosales");
```

---

## 10. When is a constructor called?

It is called when an object is created using `new`.

```typescript
new LoginPage(page);
```

---

## 11. Why is the constructor used in POM?

The constructor is commonly used to receive the Playwright `Page` object and initialize the locators.

Example:

```typescript
constructor(page: Page) {

    this.page = page;

    this.usernameField =
        this.page.getByRole("textbox", { name: "Username" });
}
```

---

## 12. What does `this.page = page` mean?

The right-hand `page` is the constructor parameter.

The left-hand `this.page` is the property belonging to the current object.

```typescript
constructor(page: Page) {
    this.page = page;
}
```

It means:

**Store the received Page object inside this Page Object.**

---

## 13. What is `this` in TypeScript?

`this` refers to the current object.

Example:

```typescript
this.username = username;
```

Here `this.username` belongs to the current object.

---

# Section 3: Access Modifiers

## 14. What are access modifiers in TypeScript?

Access modifiers control where class members can be accessed.

Common modifiers:

```text
public
private
protected
```

`readonly` is also commonly used to restrict reassignment.

---

## 15. What is `public`?

A public member can be accessed from outside the class.

Example:

```typescript
class BankAccount {

    public depositCash() {
        console.log("Amount is deposited");
    }

}

let bankOptions = new BankAccount();
bankOptions.depositCash();
```

---

## 16. What is `private`?

A private member is intended to be accessed only inside the class where it is declared.

Example:

```typescript
class AccountDetails {

    private amount: number = 1000;

    public getAmount(): number {
        return this.amount;
    }
}
```

This is not directly accessible:

```typescript
// console.log(accObj.amount);
```

Instead:

```typescript
console.log(accObj.getAmount());
```

---

## 17. What is `protected`?

A protected member can be accessed within:

- The class where it is declared
- A derived/child class

Example:

```typescript
class BankAccount {

    protected withdraw() {
        console.log("Amount is deposited");
    }
}

class FetchAccountDetails extends BankAccount {

    public details() {
        this.withdraw();
    }
}
```

---

## 18. What is the difference between private and protected?

| Modifier | Same Class | Child Class | External Object |
|---|---|---|---|
| `public` | Yes | Yes | Yes |
| `protected` | Yes | Yes | No |
| `private` | Yes | No | No |

---

## 19. Why would we use protected?

Use `protected` when a parent class contains functionality that should be available to its child classes but should not be directly exposed to external objects.

Example:

```typescript
protected withdraw() {
}
```

The child class can call:

```typescript
this.withdraw();
```

---

# Section 4: Encapsulation

## 20. What is encapsulation?

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

---

## 21. Why should variables be private for encapsulation?

The purpose is to prevent uncontrolled direct access to internal data.

Instead of:

```typescript
accObj.amount
```

the class provides a controlled method:

```typescript
accObj.getAmount()
```

This allows the class to control how its internal data is accessed.

---

## 22. Is making a variable private alone encapsulation?

Not by itself.

Encapsulation involves:

1. Hiding internal implementation/data.
2. Providing controlled access through appropriate methods.

Example:

```typescript
private amount: number = 1000;

public getAmount(): number {
    return this.amount;
}
```

---

## 23. How is POM related to encapsulation?

POM hides page implementation details inside Page Objects.

For example, the test does not need to know the actual username locator:

```typescript
this.usernameField =
    this.page.getByRole("textbox", { name: "Username" });
```

The test simply calls:

```typescript
await loginPageObj.login(username, password);
```

The Page Object controls the implementation.

---

# Section 5: Playwright POM Code

## 24. Explain `LoginPage.ts`.

It contains:

```typescript
page: Page;
usernameField: Locator;
passwordField: Locator;
loginButton: Locator;
```

The constructor initializes the page and locators.

The `login()` method performs:

```text
Fill username
Fill password
Click Login
```

---

## 25. Why is `login()` declared as `async`?

The method performs Playwright actions that return promises.

Therefore:

```typescript
async login(...) {
    await this.usernameField.fill(...);
    await this.passwordField.fill(...);
    await this.loginButton.click();
}
```

`await` allows the test to wait for each asynchronous Playwright operation.

---

## 26. Why are the locators declared as `Locator`?

Playwright's `Locator` represents an element or group of elements identified by a locator strategy.

Example:

```typescript
usernameField: Locator;
```

It can then be used with:

```typescript
await this.usernameField.fill(username);
```

---

## 27. Why use `getByRole()`?

`getByRole()` identifies elements based on their accessible role and accessible name.

Example:

```typescript
this.loginButton =
    this.page.getByRole("button", { name: "Login" });
```

This expresses the intended UI element clearly.

---

## 28. Why is `getByText("Leads", { exact: true })` used?

It locates the element based on its visible text and `exact: true` requests an exact text match.

```typescript
this.leadsLink =
    this.page.getByText("Leads", { exact: true });
```

---

## 29. What is the responsibility of `WelcomePage.ts`?

It represents the Welcome page and provides the CRM/SFA action:

```typescript
async clickCrmsfa() {
    await this.crmsfaLink.click();
}
```

---

## 30. What is the responsibility of `MyHomePage.ts`?

It represents the My Home page and provides the Leads action:

```typescript
async clickLeads() {
    await this.leadsLink.click();
}
```

---

# Section 6: Framework Design Questions

## 31. What happens if the Login locator changes?

Ideally, update the locator in `LoginPage.ts`.

The test remains:

```typescript
await loginPageObj.login(username, password);
```

This reduces the impact of locator changes.

---

## 32. Can multiple test cases reuse the same Page Object?

Yes.

For example, multiple tests can use:

```typescript
new LoginPage(page);
```

and call:

```typescript
loginPageObj.login(username, password);
```

This supports reuse.

---

## 33. Should assertions always be inside Page Objects?

Not necessarily.

A common approach is:

- Page Object → locators and page actions
- Test → business flow and assertions

For example:

```typescript
await loginPageObj.login(username, password);
await welcomePageObj.clickCrmsfa();
```

Then the test can assert the expected page state.

---

## 34. Why should hard waits not be used as the main synchronization strategy?

A hard wait such as:

```typescript
await page.waitForTimeout(5000);
```

waits for a fixed amount of time regardless of whether the application is ready.

For classroom observation it can be useful, but real automation should generally rely on Playwright's auto-waiting and assertions.

---

# Section 7: Scenario-Based Interview Questions

## 35. Your test has 20 lines of locators. How would you improve it?

Move page-specific locators into Page Object classes and expose meaningful methods.

Example:

```typescript
await loginPageObj.login(username, password);
```

---

## 36. Your username locator changes in 10 test cases. How would POM help?

The locator can be maintained in `LoginPage.ts`.

The tests continue calling:

```typescript
loginPageObj.login(username, password);
```

---

## 37. You have a parent class and child Page Object. Which access modifier would allow the child to use a parent method without exposing it to external objects?

`protected`.

Example:

```typescript
protected withdraw() {
}
```

The child class can call:

```typescript
this.withdraw();
```

---

## 38. How would you provide controlled access to private data?

Keep the data private and expose an appropriate public method.

Example:

```typescript
private amount: number = 1000;

public getAmount(): number {
    return this.amount;
}
```

---

## 39. What happens when `new LoginPage(page)` is executed?

The following happens:

1. A `LoginPage` object is created.
2. The constructor receives the `page`.
3. `this.page = page` stores the page.
4. The Login page locators are initialized.
5. The object is ready to perform Login page actions.

---

## 40. Explain the complete POM execution flow in this activity.

```text
Playwright test
      |
      v
Create LoginPage object
      |
      v
Navigate to application
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
Verify Leads page
```

---

# Quick Revision

## POM

```text
Page Class = Locators + Page Actions
Test Class = Business Flow + Assertions
```

## Constructor

```text
new Object()
     ↓
constructor()
     ↓
initialize properties
```

## Access Modifiers

```text
public
    → class + child + external

protected
    → class + child

private
    → declaring class
```

## Encapsulation

```text
Private Data
     ↓
Controlled Public Method
     ↓
External Access
```

## POM Example

```typescript
await loginPageObj.login(username, password);
```

instead of:

```typescript
await page.getByRole(...).fill(...);
await page.getByRole(...).fill(...);
await page.getByRole(...).click();
```
