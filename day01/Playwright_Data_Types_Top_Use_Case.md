# Data Types – Top Real-Time Use Case in Playwright

## Managing Test Data ⭐

In a Playwright framework, **JavaScript data types are mainly used to store and manage different types of test data** required during automation.

```ts
const username: string = "admin";
const retryCount: number = 3;
const isAdmin: boolean = true;

const users: string[] = ["admin", "manager", "user"];

const user: object = {
    username: "admin",
    role: "Admin"
};
```

## Real-Time Use

Different data types are used for different framework requirements:

- **String** → usernames, passwords, URLs, search text
- **Number** → price, quantity, timeout, retry count
- **Boolean** → login status, feature flags, checkbox state
- **Array** → multiple users, products, test data
- **Object** → complete test data such as username, password, and role

## Framework-Level Benefit

Keeping test data in appropriate data types makes the **Playwright framework reusable, readable, and easier to maintain**.

## Interview Answer

> **“In Playwright automation, I mainly use JavaScript data types to store and manage different kinds of test data. For example, strings for usernames and URLs, numbers for counts and prices, booleans for conditions, arrays for multiple test data sets, and objects for structured test data.”**
