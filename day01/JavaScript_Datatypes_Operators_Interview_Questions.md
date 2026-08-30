# JavaScript Interview Questions – Data Types & Operators
## 3–5 Years Experience

> Focus: JavaScript data types, `typeof`, operators, type coercion, output prediction, debugging, and practical QA/SDET scenarios.

---

## 1. Data Types

### Q1. What are the data types available in JavaScript?

### Q2. What is the difference between primitive and non-primitive data types?

### Q3. What are the seven primitive data types in JavaScript?

### Q4. What is a non-primitive data type? Give examples.

### Q5. Is JavaScript statically typed or dynamically typed?

### Q6. Can the same variable hold values of different data types?

### Q7. What is the difference between `undefined` and `null`?

### Q8. Why does `typeof null` return `"object"`?

### Q9. Is `null` a primitive or non-primitive data type?

### Q10. What does `typeof` do?

---

## 2. `typeof` – Output-Based Questions

### Q11. Predict the output.

```javascript
console.log(typeof "Playwright");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
```

### Q12. Predict the output.

```javascript
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
```

### Q13. What does `typeof` return for a function?

### Q14. Why does `typeof []` return `"object"`?

### Q15. Why is `typeof null` considered a JavaScript quirk?

---

## 3. Numbers and Strings

### Q16. Does JavaScript have separate `int` and `float` data types?

### Q17. What is the `number` data type in JavaScript?

### Q18. What is the difference between a number and a numeric string?

```javascript
let a = 10;
let b = "10";
```

### Q19. What happens when a number and string are combined using `+`?

```javascript
console.log(10 + "20");
```

### Q20. How can you identify whether a value is a string or a number?

---

## 4. Operators

### Q21. What is an operator?

### Q22. What are the different categories of operators in JavaScript?

### Q23. Explain arithmetic operators with examples.

### Q24. Explain assignment operators with examples.

### Q25. Explain comparison operators with examples.

### Q26. Explain logical operators with examples.

### Q27. What is the difference between `=` and `===`?

### Q28. What is the difference between `==` and `===`?

### Q29. Why is `===` generally preferred over `==`?

### Q30. What is type coercion?

### Q31. How can type coercion cause unexpected results in test automation?

---

## 5. Equality and Type Coercion

### Q32. Predict the output.

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

### Q33. Explain why the following returns `true`.

```javascript
console.log(10 == "10");
```

### Q34. Explain why the following returns `false`.

```javascript
console.log(10 === "10");
```

### Q35. Predict the output.

```javascript
console.log(5 + "5");
console.log(5 - "5");
```

### Q36. Why can `+` behave differently from `-` when strings are involved?

---

## 6. Arithmetic Operators

### Q37. What is the purpose of the `%` operator?

### Q38. What is the purpose of the `**` operator?

### Q39. Predict the output.

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

### Q40. How would you check whether a number is even or odd using an operator?

---

## 7. Increment and Decrement

### Q41. What is the difference between `++` and `--`?

### Q42. What is the difference between pre-increment and post-increment?

### Q43. Predict the output.

```javascript
let a = 5;

console.log(a++);
console.log(a);
```

### Q44. Predict the output.

```javascript
let a = 5;

console.log(++a);
console.log(a);
```

### Q45. What is the practical use of increment and decrement operators in loops?

---

## 8. Logical Operators

### Q46. What are `&&`, `||`, and `!`?

### Q47. When would you use the `&&` operator?

### Q48. When would you use the `||` operator?

### Q49. What does the `!` operator do?

### Q50. Predict the output.

```javascript
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);
```

### Q51. How would you combine multiple conditions using logical operators?

---

## 9. Assignment Operators

### Q52. What is the difference between `=` and `+=`?

### Q53. Explain `+=`, `-=`, `*=`, `/=`, and `%=`.

### Q54. Predict the output.

```javascript
let count = 10;

count += 5;
console.log(count);

count -= 3;
console.log(count);
```

---

## 10. Ternary Operator

### Q55. What is the ternary operator?

### Q56. How is the ternary operator related to `if...else`?

### Q57. Convert the following `if...else` into a ternary operator.

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Q58. When should you avoid using nested ternary expressions?

---

## 11. Practical QA / Automation Questions

### Q59. A value received from test data is `"100"` but the expected value is `100`. Which comparison operator would you use if the data type must also match?

### Q60. A test assertion unexpectedly passes because `"5"` and `5` are treated as equal. What JavaScript behavior is responsible?

### Q61. You receive a value from an external source and are unsure whether it is a string or number. How would you verify its type?

### Q62. How would you validate that a test data field is a Boolean?

### Q63. How would you check whether a test data value is `null`?

### Q64. How would you check whether a variable is `undefined`?

### Q65. You need to determine whether a number is even or odd. Which operator would you use?

### Q66. You need to combine browser and environment conditions in an automation script. Which operator would you use?

### Q67. A value is unexpectedly becoming a string when combined with another value. What would you investigate?

### Q68. During debugging, you find that `typeof null` returns `"object"`. Is that expected behavior?

---

## 12. Code Analysis / Debugging

### Q69. What is wrong with the following comparison?

```javascript
let actualValue = 100;
let expectedValue = "100";

if (actualValue == expectedValue) {
    console.log("Test Passed");
}
```

### Q70. How would you improve the above code for a strict test assertion?

### Q71. Predict the output.

```javascript
let value = 10;

console.log(value + "5");
console.log(value - "5");
console.log(value * "5");
```

### Q72. Explain why the three operations behave differently.

### Q73. Predict the output.

```javascript
let a = 5;
let b = "5";

console.log(a == b);
console.log(a === b);
```

### Q74. What would you recommend when comparing actual and expected values in an automation framework: `==` or `===`? Why?

---

## 13. Coding Questions

### Q75. Write a JavaScript program to identify the data type of a given variable using `typeof`.

### Q76. Write a program to check whether a number is even or odd.

### Q77. Write a program to perform addition, subtraction, multiplication, division, and remainder on two numbers.

### Q78. Write a program to compare two values using both `==` and `===` and explain the difference.

### Q79. Write a program to check whether a variable is `null` or `undefined`.

### Q80. Write a program using logical operators to validate whether a user is eligible based on two conditions.

---

# High-Priority Interview Focus

For a **3–5 years experienced QA/SDET candidate**, prioritize:

1. Primitive vs non-primitive data types
2. `undefined` vs `null`
3. `typeof`
4. `typeof null`
5. `typeof []` and `typeof {}`
6. `==` vs `===`
7. Type coercion
8. Arithmetic operators
9. Logical operators
10. Assignment operators
11. Pre-increment vs post-increment
12. Ternary operator
13. Output prediction
14. Debugging type-related issues
15. Applying operators and data types to test automation scenarios
