# TypeScript Interview Questions and Theory

## 1. Type Inference

### Theory

Type inference is the ability of TypeScript to automatically determine
the type of a variable based on the value assigned to it.

### Interview Question

**What is implicit type inference?**

**Answer:** TypeScript automatically determines the type.

``` typescript
let name = "Vineeth";
```

Here, `name` is inferred as `string`.

### Interview Question

**What is explicit type annotation?**

**Answer:** The developer explicitly specifies the variable type.

``` typescript
let name: string = "Vineeth";
```

### Interview Question

**What is the difference between implicit and explicit typing?**

**Answer:** - Implicit → TypeScript determines the type. - Explicit →
Developer specifies the type.

------------------------------------------------------------------------

## 2. Static vs Dynamic Typing

### Theory

JavaScript is dynamically typed, meaning the type of a variable is
determined and can change at runtime.

TypeScript is statically typed, meaning types are checked during
development/compilation.

### Interview Question

**Is TypeScript statically typed or dynamically typed?**

**Answer:** TypeScript is statically typed.

### Interview Question

**Is JavaScript statically typed?**

**Answer:** JavaScript is dynamically typed.

------------------------------------------------------------------------

## 3. var, let and const

### Theory

`var`, `let`, and `const` are variable declaration keywords.

  Keyword   Scope      Reassign   Redeclare
  --------- ---------- ---------- ------------------
  var       Function   Yes        Yes
  let       Block      Yes        No in same scope
  const     Block      No         No

### Interview Question

**Can a `let` variable be reassigned?**

**Answer:** Yes, but the new value must satisfy its declared/inferred
type.

``` typescript
let a = "Vineeth";
a = "Karthik";
```

### Interview Question

**Why does this produce a TypeScript error?**

``` typescript
let a = "Vineeth";
a = 20;
```

**Answer:** TypeScript infers `a` as `string`, so assigning a number
violates the inferred type.

### Interview Question

**How can you allow both string and number?**

**Answer:** Use a union type.

``` typescript
let a: string | number = "Vineeth";
a = 20;
```

------------------------------------------------------------------------

## 4. any and unknown

### Theory

Both types can hold values when the exact type is not known.

`any` largely disables TypeScript's type checking.

`unknown` is type-safe because the value must be checked before being
used as a specific type.

### Interview Question

**What is `any`?**

**Answer:** `any` allows a value to be of any type and bypasses most
compile-time type checking.

``` typescript
let c: any = 7;
console.log(c.toUpperCase());
```

### Interview Question

**What is `unknown`?**

**Answer:** `unknown` can hold any value, but TypeScript requires type
narrowing before performing type-specific operations.

``` typescript
let d: unknown = "Testleaf";

if (typeof d === "string") {
    console.log(d.toUpperCase());
}
```

### Interview Question

**What is the main difference between `any` and `unknown`?**

**Answer:** - `any` → Type checking is largely bypassed. - `unknown` →
Type checking is required before use.

### Interview Question

**Which is safer when the data type is unknown?**

**Answer:** `unknown`, because it preserves type safety.

### Interview Question

**Where can `unknown` be useful?**

**Answer:** When handling external or untrusted data such as API
responses, parsed data, or configuration values whose type is not
guaranteed.

------------------------------------------------------------------------

## 5. Arrays and Tuples

### Theory

An array stores a collection of values.

A homogeneous array contains values of the same type.

A heterogeneous array contains values of different types.

A tuple is used when the number, type, and order of elements are known
and fixed.

### Interview Question

**What is a homogeneous array?**

**Answer:** An array containing values of the same type.

``` typescript
let numbers: number[] = [10, 20, 30];
```

### Interview Question

**What is a heterogeneous array?**

**Answer:** An array containing values of different types.

``` typescript
let values = [10, 20, 30, "Vineeth"];
```

### Interview Question

**What is a tuple?**

**Answer:** A tuple defines the number, type, and order of elements.

``` typescript
let data: [number, string, string] = [123, "Harrish", "https"];
```

### Interview Question

**Why use a tuple instead of an array?**

**Answer:** Use a tuple when the structure and position of each element
are important and known in advance.

------------------------------------------------------------------------

## 6. Classes and Objects

### Theory

A class is a blueprint or design for creating objects.

An object is an instance of a class.

The `new` keyword creates an object from a class.

### Interview Question

**What is a class?**

**Answer:** A class is a blueprint that defines the properties and
behavior that objects created from it can have.

``` typescript
class Employee {
    empName: string;
    empID: number;
}
```

### Interview Question

**What is an object?**

**Answer:** An object is an instance created from a class.

``` typescript
let emp1 = new Employee();
```

### Interview Question

**How do you create an object from a class?**

**Answer:** Use the `new` keyword.

``` typescript
let emp1 = new Employee();
```

### Interview Question

**Can one class create multiple objects?**

**Answer:** Yes.

``` typescript
let emp1 = new Employee();
let emp2 = new Employee();
let emp3 = new Employee();
```

### Interview Question

**What is the relationship between a class and an object?**

**Answer:** A class is the blueprint; an object is the actual instance
created from that blueprint.

------------------------------------------------------------------------

## 7. Enum

### Theory

An enum is used to define a set of named constants.

Enums are useful when a variable should represent one value from a
predefined set of related values.

Common forms include: - Numeric enum - String enum - Heterogeneous enum

### Interview Question

**What is an enum?**

**Answer:** An enum is a TypeScript feature used to define named
constants.

### Interview Question

**What is a string enum?**

**Answer:** An enum where members are assigned string values.

``` typescript
enum Environment {
    QA = "https://qa.com",
    PROD = "https://prod.com",
    UAT = "https://uat.com"
}
```

### Interview Question

**What is a numeric enum?**

**Answer:** An enum where members have numeric values.

``` typescript
enum Status {
    NEW = 1,
    IN_PROGRESS = 2,
    COMPLETED = 3
}
```

### Interview Question

**What is a heterogeneous enum?**

**Answer:** An enum containing both string and numeric members.

``` typescript
enum Environments {
    QA = "https://qa.com",
    PROD = 2,
    UAT = 3
}
```

### Interview Question

**How do you access an enum value?**

**Answer:** Use dot notation.

``` typescript
console.log(Environments.QA);
```

------------------------------------------------------------------------

## 8. Object Type

### Theory

TypeScript allows developers to describe the structure of an object by
specifying property names and their types.

Properties can also be optional using `?`.

### Interview Question

**How do you define an object type in TypeScript?**

**Answer:** Specify the property names and their types.

``` typescript
let empDetails: {
    empName: string,
    empID: number,
    empDepartment: string,
    empAvailability?: boolean
} = {
    empName: "Rajesh@gmail.com",
    empID: 123,
    empDepartment: "QA"
};
```

### Interview Question

**What does `?` mean in an object property?**

**Answer:** It makes the property optional.

``` typescript
empAvailability?: boolean
```

### Interview Question

**Can an optional property be added later?**

**Answer:** Yes.

``` typescript
empDetails.empAvailability = true;
```

### Interview Question

**How do you update an object property?**

**Answer:** Use dot notation.

``` typescript
empDetails.empName = "karthik@gmail.com";
```

### Interview Question

**How do you delete an object property?**

**Answer:** Use the `delete` operator.

``` typescript
delete empDetails.empAvailability;
```

------------------------------------------------------------------------

## 9. Union Type

### Theory

A union type allows a value to be one of multiple specified types.

The `|` symbol represents a union.

It means **OR**.

### Interview Question

**What is a union type?**

**Answer:** A union type allows a variable to contain a value of one of
the specified types.

``` typescript
let usernameField: string | number = "vineeth@gmail.com";

usernameField = 8925411170;
```

### Interview Question

**What does `string | number` mean?**

**Answer:** The value can be either a string OR a number.

### Interview Question

**What is a type alias?**

**Answer:** A type alias gives a reusable name to a type definition.

``` typescript
type UsernameField = number | string;

let emailID: UsernameField = "vineeth@gmail.com";
let mobile1: UsernameField = 892544411;
```

### Interview Question

**Why use a type alias?**

**Answer:** It improves readability and allows a complex or repeated
type definition to be reused.

------------------------------------------------------------------------

## 10. Intersection Type

### Theory

An intersection type combines multiple types into one type.

The `&` symbol represents an intersection.

It means **AND**. The resulting type must satisfy the requirements of
all combined types.

### Interview Question

**What is an intersection type?**

**Answer:** It combines multiple types so that a value must satisfy all
of them.

``` typescript
type Username = {
    username: string;
};

type Password = {
    password: number;
};

type Login = Username & Password;
```

### Interview Question

**What is required by the `Login` type?**

**Answer:** Both `username` and `password`.

``` typescript
let loginDetails: Login = {
    username: "vineeth@gmail.com",
    password: 1234
};
```

### Interview Question

**What is the difference between union and intersection?**

**Answer:**

-   Union (`|`) means OR.
-   Intersection (`&`) means AND.

``` typescript
type Data = string | number;
```

The value can be one of the types.

``` typescript
type Login = Username & Password;
```

The value must satisfy both types.

------------------------------------------------------------------------

## 11. JavaScript and TypeScript

### Theory

TypeScript is a superset of JavaScript.

It supports JavaScript syntax and adds additional development features
such as: - Static typing - Type annotations - Type aliases - Enums -
Interfaces - Access modifiers - Compile-time type checking

TypeScript is not executed directly by normal JavaScript runtimes. It is
generally compiled/transpiled to JavaScript.

### Interview Question

**Is TypeScript a subset or superset of JavaScript?**

**Answer:** TypeScript is a superset of JavaScript.

### Interview Question

**Why is TypeScript used when JavaScript already exists?**

**Answer:** TypeScript adds static typing and other development features
that help catch errors earlier, improve code readability, and make large
codebases easier to maintain.

### Interview Question

**Does TypeScript replace JavaScript at runtime?**

**Answer:** No. TypeScript is generally converted to JavaScript, and the
resulting JavaScript is executed by the runtime.
