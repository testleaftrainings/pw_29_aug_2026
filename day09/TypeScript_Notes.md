# TypeScript Notes

## 1. Type Inference

### Theory

Type inference is a feature of TypeScript where the compiler
automatically determines the type of a variable from the value assigned
to it.

There are two common ways to specify types:

-   **Implicit type inference:** TypeScript automatically identifies the
    type.
-   **Explicit type annotation:** The developer explicitly specifies the
    type.

### Implicit Type Inference

``` typescript
// TypeScript automatically infers the type as string.
let a = "Vineeth";

// Error because 'a' is inferred as string.
// a = 10;
```

### Explicit Type Annotation

``` typescript
// Explicitly specify the variable type as string.
let b: string = "Vinoth";
```

### JavaScript vs TypeScript

-   JavaScript is dynamically typed.
-   TypeScript is statically typed.
-   TypeScript checks types during development/compilation.
-   TypeScript helps identify many type-related errors before runtime.

------------------------------------------------------------------------

## 2. let, var and const

### Theory

`var`, `let`, and `const` are keywords used to declare variables.

-   `var` is function-scoped and can be redeclared and reassigned.
-   `let` is block-scoped and can be reassigned but cannot be redeclared
    in the same scope.
-   `const` is block-scoped and cannot be reassigned after
    initialization.

### let Example

``` typescript
// Declare a variable using let.
let a = "Vineeth";

// Reassigning a compatible value is allowed.
a = "Karthik";
```

In TypeScript, the inferred type is checked strictly.

``` typescript
// 'a' is inferred as string.
let a = "Vineeth";

// Error because a is a string.
// a = 20;
```

To allow both types:

``` typescript
// The variable can contain either a string or a number.
let a: string | number = "Vineeth";

// Reassign a number.
a = 20;
```

### var and const

``` typescript
// var can be reassigned.
var city = "Chennai";

// Reassign the variable.
city = "Bengaluru";

// const cannot be reassigned after initialization.
const country = "India";

// Error: Assignment to a constant variable.
// country = "USA";
```

------------------------------------------------------------------------

## 3. any and unknown

### Theory

Both `any` and `unknown` can represent values when the exact type is not
known.

### any

`any` disables most TypeScript type checking for that value. It provides
flexibility but reduces type safety.

``` typescript
// any allows any type of data.
let c: any = 7;

// TypeScript does not provide strict validation for the operation.
console.log(c.toUpperCase());
```

### unknown

`unknown` is safer than `any`. A value of type `unknown` cannot be
directly used as a specific type until TypeScript verifies its type.

``` typescript
// unknown can store a value whose type is not known.
let d: unknown = "Testleaf";

// Check the type before using the value.
if (typeof d === "string") {

    // TypeScript now knows that d is a string.
    console.log(d.toUpperCase());
}
```

### Practical Use

`unknown` is useful when handling external data such as API responses,
parsed input, or configuration values where the type is not guaranteed.

------------------------------------------------------------------------

## 4. Arrays and Tuples

### Theory

An array is a collection of values stored under one variable.

### Homogeneous Array

A homogeneous array contains values of the same type.

``` typescript
// All elements are numbers.
let numbers: number[] = [10, 20, 30];
```

### Heterogeneous Array

A heterogeneous array contains values of different types.

``` typescript
// The array contains numbers and a string.
let values = [10, 20, 30, "Vineeth"];
```

### Tuple

A tuple is a special TypeScript type that defines the number, type, and
order of elements.

``` typescript
// First value must be a number.
// Second and third values must be strings.
let data: [number, string, string] = [123, "Harrish", "https"];
```

### Array vs Tuple

-   Array: normally used for a collection of values.
-   Tuple: used when the position and type of each value are important.

------------------------------------------------------------------------

## 5. Classes and Objects

### Theory

A **class** is a blueprint or design used to create objects.

An **object** is an instance of a class. Multiple objects can be created
from one class.

The `new` keyword is used to create an object from a class.

### Example

``` typescript
// Create a class named Employee.
class Employee {

    // Employee name must be a string.
    empName: string;

    // Employee ID must be a number.
    empID: number;
}

// Create the first Employee object.
let emp1 = new Employee();

// Assign values to the first object.
emp1.empName = "Rahul";
emp1.empID = 1234;

// Create the second Employee object.
let emp2 = new Employee();

// Assign values to the second object.
emp2.empName = "Maha";
emp2.empID = 12345;

// Create the third Employee object.
let emp3 = new Employee();

// Assign values to the third object.
emp3.empName = "Maha";
emp3.empID = 12345;
```

### Key Terms

-   Class → Blueprint/design.
-   Object → Instance of a class.
-   Property → Data belonging to an object.
-   `new` → Creates an object from a class.

------------------------------------------------------------------------

## 6. Enum

### Theory

An enum is used to define a set of named constants.

Enums are useful when a variable should contain one value from a
predefined set of related values.

Common enum forms: - Numeric enum - String enum - Heterogeneous enum

### String Enum

``` typescript
// Each enum member contains a string value.
enum Environment {
    QA = "https://qa.com",
    PROD = "https://prod.com",
    UAT = "https://uat.com"
}
```

### Numeric Enum

``` typescript
// Enum members contain numeric values.
enum Status {
    NEW = 1,
    IN_PROGRESS = 2,
    COMPLETED = 3
}
```

### Heterogeneous Enum

A heterogeneous enum contains both string and numeric members.

``` typescript
// Create an enum for application environments.
enum Environments {

    // QA has a string value.
    QA = "https://qa.com",

    // PROD has a numeric value.
    PROD = 2,

    // UAT has a numeric value.
    UAT = 3
}

// Access the QA value using dot notation.
console.log(Environments.QA);
```

------------------------------------------------------------------------

## 7. Object Type

### Theory

TypeScript allows us to define the expected structure of an object.

We can specify: - Property names. - Property types. - Optional
properties.

The `?` symbol makes a property optional.

### Example

``` typescript
// Define the structure of the employee object.
let empDetails: {

    // Employee name must be a string.
    empName: string,

    // Employee ID must be a number.
    empID: number,

    // Employee department must be a string.
    empDepartment: string,

    // Employee availability is optional.
    empAvailability?: boolean

} = {

    // Assign the employee name.
    empName: "Rajesh@gmail.com",

    // Assign the employee ID.
    empID: 123,

    // Assign the employee department.
    empDepartment: "QA"
};

// Access the employee ID using dot notation.
console.log(empDetails.empID);

// Print the complete object.
console.log(empDetails);

// Update an existing property.
empDetails.empName = "karthik@gmail.com";

// Add the optional property.
empDetails.empAvailability = true;

// Delete the optional property.
delete empDetails.empAvailability;
```

### Object Operations

-   Updating → `empDetails.empName = "karthik@gmail.com";`
-   Adding → `empDetails.empAvailability = true;`
-   Deleting → `delete empDetails.empAvailability;`

------------------------------------------------------------------------

## 8. Union Type

### Theory

A union type allows a variable to contain one of multiple specified
types.

The union operator is `|`.

It means **OR**.

For example, `string | number` means the value can be either a string or
a number.

### Example

``` typescript
// A variable can contain either a string or a number.
let usernameField: string | number = "vineeth@gmail.com";

// A number is also allowed.
usernameField = 8925411170;
```

### Type Alias

A type alias gives a reusable name to a type definition.

``` typescript
// Create a reusable type containing string OR number.
type UsernameField = number | string;

// Use the type alias for an email ID.
let emailID: UsernameField = "vineeth@gmail.com";

// Use the same type alias for a number.
let mobile1: UsernameField = 892544411;

// A string is also valid for the same type alias.
let mobile2: UsernameField = "karthik@gmail.com";
```

### Key Point

`string | number` → string **OR** number.

------------------------------------------------------------------------

## 9. Intersection Type

### Theory

An intersection type combines multiple types into one type.

The intersection operator is `&`.

It means **AND**.

If two types are combined using `&`, the resulting type must satisfy the
requirements of both types.

### Example

``` typescript
// Define the username structure.
type Username = {

    // Username must be a string.
    username: string;
};

// Define the password structure.
type Password = {

    // Password must be a number.
    password: number;
};

// Combine Username and Password using intersection.
type Login = Username & Password;

// The object must contain both username and password.
let loginDetails: Login = {

    // Provide the username property.
    username: "vineeth@gmail.com",

    // Provide the password property.
    password: 1234
};
```

### Union vs Intersection

``` text
Union        |  OR  | One of the specified types
Intersection &  AND | Combined requirements of all types
```

------------------------------------------------------------------------

## 10. JavaScript and TypeScript

### Theory

TypeScript is a superset of JavaScript.

This means valid JavaScript code can generally be used in a TypeScript
file, while TypeScript adds features such as:

-   Static typing
-   Type annotations
-   Type aliases
-   Enums
-   Interfaces
-   Access modifiers
-   Compile-time type checking

TypeScript code is compiled/transpiled into JavaScript, which can then
run in JavaScript environments.

### Key Statement

**TypeScript is a superset of JavaScript.**
