// JavaScript Data Types

// 1. Number

// Number can store:
// - Whole numbers
// - Decimal numbers
// - Negative numbers
// - Fractional values

var age = 30;
console.log(age);
console.log(typeof age); // number

var rateOfInterest = 10 / 3;
console.log(rateOfInterest);
console.log(typeof rateOfInterest); // number


// 2. String

// String represents text.
// Strings can be written using:
// - Double quotes ""
// - Single quotes ''
// - Backticks ``

var courseName = "Playwright Course";
console.log(courseName);
console.log(typeof courseName); // string


// 3. Boolean
// Boolean can have only two values:
// - true
// - false

var isPageLoaded = true;
console.log(isPageLoaded);
console.log(typeof isPageLoaded); // boolean


// 4. BigInt

// BigInt is used to represent very large integer values
// beyond the safe integer limit of the Number data type.

var maxNumber = Number.MAX_SAFE_INTEGER;
var bigNumber = 567n;
console.log(bigNumber);
console.log(typeof bigNumber); // bigint
console.log(maxNumber);
// console.log(maxNumber + 4);

// Number.MAX_SAFE_INTEGER = 9007199254740991
// The following operation is unsafe with Number:
// BigInt can safely handle large integers.
console.log(9007199254740991n + 2n);


// 5. Undefined

// A variable is undefined when it is declared
// but no value has been assigned to it.

var nameOfPerson;
console.log(nameOfPerson);
console.log(typeof nameOfPerson); // undefined


// 6. Null

// null represents an intentional absence of a value.

var unknownPerson = null;
console.log(unknownPerson);

// Note:
// typeof null returns "object".
// This is a historical behavior in JavaScript.

console.log(typeof unknownPerson); //object