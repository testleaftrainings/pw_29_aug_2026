# JavaScript Operators – Top 2 Real-Time Use Cases in Playwright

## 1. Logical Operators (`&&`, `||`, `!`) ⭐

Used to **control test execution based on multiple conditions**.

```ts
if (isLoggedIn && isAdmin) {
    await page.getByText("Admin Dashboard").click();
}
```

### Real-Time Use

Perform an action only when multiple conditions are satisfied.

**Example:**  
Check whether the user is logged in **and** has Admin access.

---

## 2. Comparison Operators (`===`, `!==`, `>`, `<`) ⭐

Used to **validate values and make decisions during test execution**.

```ts
const productCount = await page.locator(".product").count();

if (productCount > 0) {
    console.log("Products are displayed");
}
```

### Real-Time Use

Compare element counts, prices, response status codes, or other values.

---

## Interview Answer

> **“In Playwright, I mainly use logical operators for conditional test execution and comparison operators for validating values such as element counts, prices, and API response data.”**
