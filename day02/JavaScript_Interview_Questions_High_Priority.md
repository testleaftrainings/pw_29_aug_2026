# JavaScript Interview Questions – High Priority

---

## 1. Variables – `var`, `let`, `const`

### Q1. Explain the differences between `var`, `let`, and `const`.

### Q2. Why is `let`/`const` generally preferred over `var` in modern JavaScript?

### Q3. What is the difference between redeclaration and reassignment?

---

## 2. Scope

### Q4. What is scope in JavaScript?

### Q5. Why is `var` function-scoped while `let` and `const` are block-scoped?

### Q6. What happens when variables with the same name are declared in nested scopes?

### Q7. What is the output?

```javascript
function test() {

    var value = 10;

    if (true) {
        var value = 20;
    }

    console.log(value);
}

test();
```

### Q8. What is the output?

```javascript
function test() {

    let value = 10;

    if (true) {
        let value = 20;
        console.log(value);
    }

    console.log(value);
}

test();
```

### Q9. Explain the difference in behavior between the above two programs.

---

## 3. Hoisting

### Q10. What is hoisting in JavaScript?

### Q11. How does hoisting work differently for `var`, `let`, and `const`?

### Q12. Are function declarations hoisted?

### Q13. What happens when you access a `var` variable before its declaration?

### Q14. What happens when you access a `let` or `const` variable before its declaration?

### Q15. Predict the output.

```javascript
console.log(num);

var num = 10;
```

### Q16. What happens here and why?

```javascript
console.log(num);

let num = 10;
```

---

## 4. Temporal Dead Zone – TDZ

### Q17. What is the Temporal Dead Zone?

### Q18. When does the TDZ start and when does it end?

### Q19. Are `let` and `const` hoisted even though they cannot be accessed before declaration?

### Q20. What error do you get when accessing a variable inside the TDZ?

### Q21. What is the difference between `undefined` and a TDZ-related `ReferenceError`?

### Q22. Explain why the following code throws an error.

```javascript
function test() {

    console.log(value);

    let value = 100;
}

test();
```

---

## 5. Operators

### Q23. What is the difference between `=`, `==`, and `===`?

### Q24. Why is `===` generally preferred over `==`?

### Q25. What is type coercion?

### Q26. How can type coercion affect test automation code?

### Q27. Predict the output and explain.

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

---

## 6. Conditional Statements

### Q28. When would you use `if...else`?

### Q29. When would you prefer `switch` over `if...else`?

### Q30. How would you validate whether a number is positive, negative, or zero?

---

## 7. Switch Case

### Q31. When is `switch` more suitable than `if...else`?

### Q32. What happens if `break` is not used in a `switch` case?

### Q33. What is `switch(true)`?

### Q34. When would you use `switch(true)` instead of a normal `switch`?

### Q35. Predict the output.

```javascript
let day = "Tuesday";

switch (day) {

    case "Monday":
        console.log("Monday");

    case "Tuesday":
        console.log("Tuesday");

    case "Wednesday":
        console.log("Wednesday");

    default:
        console.log("Invalid");
}
```

### Follow-up:
Why does the output contain more than one value?

---

## 8. For Loop

### Q36. What is the execution order of a `for` loop?

### Q37. What happens if the update expression is missing?

### Q38. What is an infinite loop?

### Q39. How would you use a `for` loop to validate multiple test data values?

### Q40. How many times does this loop execute?

```javascript
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
```

---

## 9. `break` and `continue`

### Q41. What is the difference between `break` and `continue`?

### Q42. When would you use `break` in an automation script?

### Q43. When would you use `continue`?

### Q44. What happens to the loop counter after `continue`?

### Q45. Predict the output.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

### Q46. Predict the output.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}
```

---

# 10. Practical / Scenario-Based Questions

### Q47. Debug this code.

```javascript
function checkNumber() {

    var number = 10;

    if (number > 0) {
        var number = -10;
    }

    console.log(number);
}

checkNumber();
```

**Question:** What is the output? Would using `let` change the behavior?

---

### Q48. Debug the following.

```javascript
function test() {

    console.log(value);

    let value = 100;
}

test();
```

**Question:** Why doesn't this return `undefined`?

---

### Q49. Predict the execution.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 2) {
        continue;
    }

    if (i === 4) {
        break;
    }

    console.log(i);
}
```

**Question:** What is the output and why?

---

### Q50. Design Question

You have test data for 10 users and need to execute the same validation for every user.

**Question:** How would you use a loop to handle this efficiently?

---

### Q51. Debugging Question

A loop is running indefinitely in your automation script.

**Question:** What would you check first?

---

### Q52. Design Question

You need to perform different actions based on:

- Chrome
- Firefox
- Edge
- Safari

**Question:** Would you use `if...else` or `switch`? Why?

---

### Q53. Scenario Question

You have the following values:

```javascript
let status = "PASS";
```

You need different actions for:

- PASS
- FAIL
- SKIPPED
- BLOCKED

**Question:** How would you implement this using JavaScript?

---

### Q54. Code Improvement Question

What is wrong with this approach?

```javascript
var browser = "Chrome";
var browser = "Firefox";
var browser = "Edge";
```

What would you use instead and why?

---

### Q55. Automation Scenario

You have 100 test data records, but you want to skip invalid records and continue processing the remaining records.

**Question:** Which loop control statement would you use?





