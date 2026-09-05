# Array – Framework-Level Use Case: Data-Driven Testing

In a Playwright framework, **arrays are commonly used to maintain multiple test data sets and execute the same test flow with different inputs**.

For example, instead of writing separate login tests for different users, we can store all user credentials in an array and reuse the same login method.

```ts
const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" }
];

for (const user of users) {
    await loginPage.login(user.username, user.password);
}
```

## Framework-Level Benefits

- **Separate test data from test logic** – Test data can be maintained independently from the actual test steps.
- **Code reusability** – The same `login()` method can be reused for multiple users.
- **Avoid code duplication** – No need to create separate test scripts for each user.
- **Easy maintenance** – New test data can be added to the array without changing the test logic.
- **Supports data-driven testing** – The same test scenario can be executed with multiple sets of data.

## Real-Time Example

A framework may need to test login for:

- Admin user
- Manager user
- Normal user

Instead of creating three separate login flows, we maintain these users in an array and execute the same reusable login function for each user.

## Interview Answer

> **“At framework level, I use arrays mainly for data-driven testing. I can maintain multiple test data sets, such as different user credentials, in an array and execute the same reusable Playwright test flow for each data set. This helps avoid code duplication and makes the framework easier to maintain.”**
