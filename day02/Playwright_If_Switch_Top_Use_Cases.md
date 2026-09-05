# `if` Condition and `switch` Case – Top Real-Time Use Cases in Playwright

## 1. `if` Condition – Handling Conditional UI Behavior

In Playwright, `if` is commonly used when an element or condition **may or may not be present**.

```ts
const popup = page.locator("#popup");

if (await popup.isVisible()) {
    await page.locator("#close").click();
}
```

### Real-Time Scenario

A promotional popup may appear only for some users. The test checks whether it is visible and closes it if present.

### Interview Answer

> **“I mainly use `if` conditions in Playwright to handle conditional UI elements, such as popups, banners, or optional fields that may or may not appear.”**

---

## 2. `switch` Case – Handling Multiple User Roles

`switch` is useful when the test flow changes based on the **user role or test scenario**.

```ts
const role = "admin";

switch (role) {
    case "admin":
        await loginPage.loginAsAdmin();
        break;

    case "manager":
        await loginPage.loginAsManager();
        break;

    case "user":
        await loginPage.loginAsUser();
        break;
}
```

### Real-Time Scenario

An application has different login or navigation flows for Admin, Manager, and Normal User.

### Interview Answer

> **“I mainly use `switch` in Playwright when the test flow depends on multiple predefined conditions, such as different user roles, environments, or application scenarios.”**
