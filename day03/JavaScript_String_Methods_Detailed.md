# JavaScript String Methods — Detailed Learning Notes

## What is a String?

A string is a sequence of characters.

```javascript
let name = "Vineeth";
```

Think of it like:

```text
String:   V i n e e t h
Index:    0 1 2 3 4 5 6
```

> **Important:** Strings in JavaScript are **immutable**. Most string methods return a new string instead of modifying the original.

---

# 1. `length` — Count Characters

`length` is a property, not a method.

```javascript
let name = "Vineeth";

console.log(name.length);
```

Output:

```text
7
```

Spaces are also counted:

```javascript
let text = "Hello World";

console.log(text.length);
// 11
```

### Remember

> `length` → How many characters?

---

# 2. `charAt()` — Character at an Index

Returns the character at a specific index.

```javascript
let name = "Vineeth";

console.log(name.charAt(0));
// V

console.log(name.charAt(3));
// e
```

If the index does not exist:

```javascript
console.log(name.charAt(20));
// ""
```

### Remember

> `charAt()` → Character at a particular position

---

# 3. `at()` — Character at an Index

Similar to `charAt()`, but supports negative indexes.

```javascript
let name = "Vineeth";

console.log(name.at(0));
// V

console.log(name.at(-1));
// h

console.log(name.at(-2));
// t
```

### `charAt()` vs `at()`

| `charAt()` | `at()` |
|---|---|
| Positive indexes | Positive indexes |
| No negative indexing | Supports negative indexing |
| `charAt(-1)` → `""` | `at(-1)` → last character |

### Remember

> `at(-1)` → Last character

---

# 4. `charCodeAt()` — Character Code

Returns the UTF-16 code of a character.

```javascript
console.log("A".charCodeAt(0));
// 65

console.log("a".charCodeAt(0));
// 97
```

Common codes:

```text
A → 65
B → 66
C → 67

a → 97
b → 98
c → 99
```

This is less common in Playwright but useful for understanding character encoding.

---

# 5. `includes()` — Check Whether Text Exists

Checks whether a string contains another string.

```javascript
let message = "Welcome to Playwright";

console.log(message.includes("Playwright"));
// true

console.log(message.includes("Selenium"));
// false
```

It returns:

```text
true / false
```

It is case-sensitive:

```javascript
console.log(message.includes("playwright"));
// false
```

### Remember

> `includes()` → Does this text exist?

---

# 6. `indexOf()` — Find the First Position

Returns the index of the first occurrence.

```javascript
let message = "Welcome to Playwright";

console.log(message.indexOf("Playwright"));
// 11
```

If not found:

```javascript
console.log(message.indexOf("Selenium"));
// -1
```

### Remember

> `indexOf()` → Where does this text start?

---

# 7. `lastIndexOf()` — Find the Last Position

Returns the index of the last occurrence.

```javascript
let text = "JavaScript is great. JavaScript is popular.";

console.log(text.indexOf("JavaScript"));
// first occurrence

console.log(text.lastIndexOf("JavaScript"));
// last occurrence
```

### Difference

```text
indexOf()
    ↓
First occurrence

lastIndexOf()
    ↓
Last occurrence
```

---

# 8. `startsWith()` — Check the Beginning

```javascript
let url = "https://www.google.com";

console.log(url.startsWith("https"));
// true

console.log(url.startsWith("www"));
// false
```

### Remember

> `startsWith()` → Does it begin with this?

---

# 9. `endsWith()` — Check the End

```javascript
let fileName = "testdata.json";

console.log(fileName.endsWith(".json"));
// true

console.log(fileName.endsWith(".csv"));
// false
```

### Playwright use case

```javascript
let fileName = "userData.xlsx";

if (fileName.endsWith(".xlsx")) {
    console.log("Excel file");
}
```

### Remember

> `endsWith()` → Does it finish with this?

---

# 10. `slice()` — Extract Part of a String

## Syntax

```javascript
string.slice(start, end);
```

The `end` index is excluded.

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4));
// Java
```

Indexes:

```text
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
↑       ↑
start   end
```

Negative indexes are supported:

```javascript
console.log(text.slice(-6));
// Script

console.log(text.slice(-6, -3));
// Scr
```

`slice()` does not modify the original string.

### Remember

> `slice()` → Extract a portion

---

# 11. `substring()` — Extract Part of a String

```javascript
let text = "JavaScript";

console.log(text.substring(0, 4));
// Java
```

The ending index is excluded.

## `slice()` vs `substring()`

| `slice()` | `substring()` |
|---|---|
| Supports negative indexes | Does not support negative indexes |
| Negative values count from the end | Negative values become `0` |
| More flexible | Simpler |

Example:

```javascript
console.log("JavaScript".slice(-6));
// Script

console.log("JavaScript".substring(-6));
// JavaScript
```

### Remember

> `slice()` is generally more flexible.

---

# 12. `substr()` — Legacy Method

You may see this in older JavaScript code.

```javascript
let text = "JavaScript";

console.log(text.substr(0, 4));
// Java
```

`substr()` is **deprecated/legacy** and should not be used in new code.

Prefer:

```javascript
slice()
```

or:

```javascript
substring()
```

---

# 13. `toUpperCase()` — Convert to Uppercase

```javascript
let name = "vineeth";

console.log(name.toUpperCase());
// VINEETH
```

The original remains unchanged:

```javascript
console.log(name);
// vineeth
```

### Remember

> `toUpperCase()` → CAPITAL letters

---

# 14. `toLowerCase()` — Convert to Lowercase

```javascript
let name = "VINEETH";

console.log(name.toLowerCase());
// vineeth
```

### Testing Example

```javascript
let actual = "LOGIN SUCCESS";
let expected = "login success";

console.log(
    actual.toLowerCase() === expected.toLowerCase()
);
// true
```

---

# 15. `trim()` — Remove Spaces from Both Ends

```javascript
let username = "   Vineeth   ";

console.log(username.trim());
// Vineeth
```

It removes whitespace from the beginning and end.

It does not remove spaces between words:

```javascript
let text = "Hello   World";

console.log(text.trim());
// Hello   World
```

### Playwright Example

```javascript
let actualText = await page.locator("#message").innerText();

console.log(actualText.trim());
```

### Remember

> `trim()` → Remove spaces from both ends

---

# 16. `trimStart()` — Remove Beginning Spaces

```javascript
let text = "   Hello   ";

console.log(text.trimStart());
// Hello   
```

Only beginning whitespace is removed.

---

# 17. `trimEnd()` — Remove Ending Spaces

```javascript
let text = "   Hello   ";

console.log(text.trimEnd());
//    Hello
```

Only ending whitespace is removed.

### Difference

```text
trim()
    ↓
Beginning + End

trimStart()
    ↓
Beginning only

trimEnd()
    ↓
End only
```

---

# 18. `replace()` — Replace the First Match

```javascript
let text = "I like JavaScript. JavaScript is powerful.";

let result = text.replace("JavaScript", "TypeScript");

console.log(result);
```

Output:

```text
I like TypeScript. JavaScript is powerful.
```

Only the first occurrence is replaced.

The original string is unchanged.

---

# 19. `replaceAll()` — Replace All Matches

```javascript
let text = "JavaScript is easy. JavaScript is powerful.";

let result = text.replaceAll("JavaScript", "TypeScript");

console.log(result);
```

Output:

```text
TypeScript is easy. TypeScript is powerful.
```

### Difference

```text
replace()
    ↓
First occurrence

replaceAll()
    ↓
All occurrences
```

---

# 20. `split()` — String to Array

`split()` divides a string into pieces and returns an array.

```javascript
let text = "Apple,Mango,Orange";

let result = text.split(",");

console.log(result);
```

Output:

```text
["Apple", "Mango", "Orange"]
```

Think:

```text
"Apple,Mango,Orange"
        ↓ split(",")
["Apple", "Mango", "Orange"]
```

## Split by Space

```javascript
let text = "Hello World";

console.log(text.split(" "));
// ["Hello", "World"]
```

## Split Every Character

```javascript
let text = "Hello";

console.log(text.split(""));
// ["H", "e", "l", "l", "o"]
```

### Remember

> `split()` → String → Array

---

# 21. `concat()` — Combine Strings

```javascript
let firstName = "Vineeth";
let lastName = "Babu";

let result = firstName.concat(" ", lastName);

console.log(result);
// Vineeth Babu
```

In modern JavaScript, template literals are often easier:

```javascript
let result = `${firstName} ${lastName}`;
```

---

# 22. `repeat()` — Repeat a String

```javascript
let text = "Hello ";

console.log(text.repeat(3));
// Hello Hello Hello
```

Another example:

```javascript
console.log("*".repeat(5));
// *****
```

### Remember

> `repeat()` → Repeat N times

---

# 23. `padStart()` — Add Characters at the Beginning

```javascript
let number = "123";

console.log(number.padStart(5, "0"));
// 00123
```

The first argument is the final desired length.

The second argument is the padding character.

Example:

```javascript
let id = "25";

console.log(id.padStart(5, "0"));
// 00025
```

### Remember

> `padStart()` → Add at the beginning

---

# 24. `padEnd()` — Add Characters at the End

```javascript
let text = "Hello";

console.log(text.padEnd(10, "."));
// Hello.....
```

### Difference

```text
padStart()
    ↓
Add at beginning

padEnd()
    ↓
Add at end
```

---

# 25. `search()` — Search Using a Pattern

Returns the index where a pattern is found.

```javascript
let text = "I love JavaScript";

console.log(text.search("JavaScript"));
// 7
```

It can also use a regular expression:

```javascript
console.log(text.search(/JavaScript/));
// 7
```

If not found:

```text
-1
```

### `search()` vs `indexOf()`

```text
indexOf()
    ↓
Search for text

search()
    ↓
Useful for pattern / regular expression searching
```

---

# 26. `match()` — Find Matching Text

Useful with regular expressions.

```javascript
let text = "I love JavaScript";

let result = text.match(/JavaScript/);

console.log(result);
```

For all matches:

```javascript
let text = "cat dog cat";

let result = text.match(/cat/g);

console.log(result);
```

Output:

```text
["cat", "cat"]
```

Here:

```text
g → global
```

means find all matches.

---

# 27. `matchAll()` — Find All Matches with Details

Returns an iterator containing detailed information about matches.

```javascript
let text = "cat dog cat";

let matches = text.matchAll(/cat/g);

for (let match of matches) {
    console.log(match[0]);
}
```

Output:

```text
cat
cat
```

This is an advanced method.

---

# 28. `localeCompare()` — Compare Strings

Used to compare strings for sorting/order.

```javascript
console.log("Apple".localeCompare("Banana"));
// typically -1

console.log("Banana".localeCompare("Apple"));
// typically 1

console.log("Apple".localeCompare("Apple"));
// 0
```

Think:

```text
-1 → first string comes before
 0 → equal
 1 → first string comes after
```

---

# 29. `normalize()` — Normalize Unicode

An advanced method used when Unicode strings may have different internal representations.

```javascript
let text = "é";

console.log(text.normalize());
```

This is rarely required in normal Playwright automation.

---

# String Immutability

Strings are **immutable**.

This means string methods normally create a new string rather than changing the original.

Example:

```javascript
let name = "vineeth";

name.toUpperCase();

console.log(name);
```

Output:

```text
vineeth
```

You need to assign the result:

```javascript
name = name.toUpperCase();

console.log(name);
```

Output:

```text
VINEETH
```

This applies to methods such as:

```text
trim()
replace()
replaceAll()
slice()
toLowerCase()
toUpperCase()
```

---

# Important Interview Comparisons

## `charAt()` vs `at()`

```text
charAt()
    ↓
Character at index
    ↓
No negative indexing
```

```text
at()
    ↓
Character at index
    ↓
Supports negative indexing
```

---

## `includes()` vs `indexOf()`

```text
includes()
    ↓
true / false
```

```text
indexOf()
    ↓
index / -1
```

Example:

```javascript
let text = "Hello World";

text.includes("World");
// true

text.indexOf("World");
// 6
```

---

## `indexOf()` vs `lastIndexOf()`

```text
indexOf()
    ↓
First occurrence
```

```text
lastIndexOf()
    ↓
Last occurrence
```

---

## `startsWith()` vs `endsWith()`

```text
startsWith()
    ↓
Checks beginning
```

```text
endsWith()
    ↓
Checks ending
```

Example:

```javascript
let fileName = "report.pdf";

fileName.startsWith("report");
// true

fileName.endsWith(".pdf");
// true
```

---

## `slice()` vs `substring()`

| `slice()` | `substring()` |
|---|---|
| Supports negative indexes | Does not support negative indexes |
| More flexible | Simpler |
| `slice(-3)` works from the end | Negative values become `0` |

---

## `replace()` vs `replaceAll()`

```text
replace()
    ↓
First occurrence
```

```text
replaceAll()
    ↓
All occurrences
```

---

## `trim()` vs `trimStart()` vs `trimEnd()`

```text
trim()
    ↓
Beginning + End

trimStart()
    ↓
Beginning only

trimEnd()
    ↓
End only
```

---

# String Methods — Quick Reference

| Method | Simple Meaning | Returns |
|---|---|---|
| `length` | Count characters | Number |
| `charAt()` | Character at index | String |
| `at()` | Character at index | String |
| `charCodeAt()` | Character code | Number |
| `includes()` | Does text exist? | Boolean |
| `indexOf()` | First position | Number |
| `lastIndexOf()` | Last position | Number |
| `startsWith()` | Check beginning | Boolean |
| `endsWith()` | Check ending | Boolean |
| `slice()` | Extract part | String |
| `substring()` | Extract part | String |
| `substr()` | Extract part | String |
| `toUpperCase()` | Convert uppercase | String |
| `toLowerCase()` | Convert lowercase | String |
| `trim()` | Remove spaces both sides | String |
| `trimStart()` | Remove beginning spaces | String |
| `trimEnd()` | Remove ending spaces | String |
| `replace()` | Replace first match | String |
| `replaceAll()` | Replace all matches | String |
| `split()` | String → Array | Array |
| `concat()` | Combine strings | String |
| `repeat()` | Repeat string | String |
| `padStart()` | Add at beginning | String |
| `padEnd()` | Add at end | String |
| `search()` | Search pattern | Number |
| `match()` | Find matches | Match result |
| `matchAll()` | Find all matches | Iterator |
| `localeCompare()` | Compare strings | Number |
| `normalize()` | Normalize Unicode | String |

---

# One-Line Memory Map

```text
length        → How many characters?

charAt()      → Character at index
at()          → Character at index + negative index

includes()    → Does text exist?
indexOf()     → Where does text first occur?
lastIndexOf() → Where does text last occur?

startsWith()  → Does it begin with this?
endsWith()    → Does it end with this?

slice()       → Extract part
substring()   → Extract part

toUpperCase() → Make uppercase
toLowerCase() → Make lowercase

trim()        → Remove spaces from both sides
trimStart()   → Remove beginning spaces
trimEnd()     → Remove ending spaces

replace()     → Replace first occurrence
replaceAll()  → Replace all occurrences

split()       → String → Array
concat()      → Combine strings

repeat()      → Repeat string
padStart()    → Add at beginning
padEnd()      → Add at end

search()      → Search using pattern
match()       → Find matching text
matchAll()    → Find all matches

localeCompare() → Compare strings
normalize()     → Normalize Unicode
```

---

# JavaScript Strings in Playwright

String methods are very important in Playwright because automation frequently involves reading and validating text.

Example:

```javascript
const actualText = await page
    .locator("#message")
    .innerText();

console.log(actualText);
```

## Using `trim()`

```javascript
const actualText = await page
    .locator("#message")
    .innerText();

expect(actualText.trim()).toBe("Login successful");
```

## Using `includes()`

```javascript
const actualText = await page
    .locator("#message")
    .innerText();

expect(actualText).toContain("successful");
```

Conceptually:

```text
Page
 ↓
innerText()
 ↓
String
 ↓
String method
 ↓
Validation
```

---

# Practical Playwright Example

Suppose the UI displays:

```text
"Welcome Vineeth Babu"
```

You can do:

```javascript
const message = await page.locator("#welcome").innerText();

console.log(message.includes("Vineeth"));
// true

console.log(message.startsWith("Welcome"));
// true

console.log(message.toUpperCase());
// WELCOME VINEETH BABU
```

Extract part of the text:

```javascript
const name = message.slice(8);

console.log(name);
// Vineeth Babu
```

---

# Recommended Learning Order

## Level 1 — Basics

```text
length
charAt()
at()
```

## Level 2 — Searching

```text
includes()
indexOf()
lastIndexOf()
startsWith()
endsWith()
```

## Level 3 — Extracting

```text
slice()
substring()
```

## Level 4 — Formatting

```text
toUpperCase()
toLowerCase()
trim()
trimStart()
trimEnd()
```

## Level 5 — Replacing

```text
replace()
replaceAll()
```

## Level 6 — Converting

```text
split()
concat()
```

## Level 7 — Advanced

```text
search()
match()
matchAll()
repeat()
padStart()
padEnd()
localeCompare()
normalize()
```

---

# ⭐ The 10 Methods to Master First

For **Playwright interview preparation**, prioritize:

```text
1. length
2. includes()
3. indexOf()
4. slice()
5. substring()
6. toUpperCase()
7. toLowerCase()
8. trim()
9. replace()
10. split()
```

Then move to:

```text
charAt()
at()
startsWith()
endsWith()
lastIndexOf()
replaceAll()
search()
match()
```

---

# Final Mental Model

Instead of memorizing every method separately, think about what you want to do:

```text
                    STRING
                       |
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     SEARCH         EXTRACT         FORMAT
        |              |              |
    includes()      slice()       trim()
    indexOf()       substring()   toUpperCase()
    startsWith()                  toLowerCase()
    endsWith()
        |
        ↓
     MODIFY
        |
    replace()
    replaceAll()
        |
        ↓
     CONVERT
        |
      split()
        |
        ↓
      ARRAY
        |
    map/filter/
    find/reduce
```

This mental model makes String methods much easier to understand than trying to memorize them individually.
