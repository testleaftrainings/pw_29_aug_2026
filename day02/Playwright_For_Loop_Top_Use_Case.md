# `for` Loop – Top Real-Time Use Case in Playwright

In Playwright automation, the **most common use of a `for` loop** is to iterate through multiple table rows and validate their data.

```ts
const rows = page.locator("table tbody tr");

const rowCount = await rows.count();

for (let i = 0; i < rowCount; i++) {
    const rowText = await rows.nth(i).innerText();
    console.log(rowText);
}
```

## Real-Time Scenario

For example, an application displays **100 customer records in a table**. Instead of validating each row separately, we use a `for` loop to iterate through all rows.

### Use Cases

- Validate customer details
- Check order status
- Verify product information
- Validate search results

## Interview Answer

> **“I mainly use `for` loops in Playwright to iterate through multiple web elements, especially table rows, and perform the same validation or action on each element.”**
