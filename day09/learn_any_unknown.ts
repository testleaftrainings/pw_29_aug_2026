// any and unknown can be used when the type of data is not fixed.

// any allows any type of data.
let c: any = 7;

// any does not provide strict type checking.
console.log(c.toUpperCase());

// unknown is useful when the data type is not known in advance.
// Example: API response can contain a string, number, object, etc.

// unknown provides strict type checking.
let d: unknown = "Testleaf";

// Before using an unknown value, we need to check its type.
if (typeof d === "string") {

    // After type checking, TypeScript knows that 'd' is a string.
    console.log(d.toUpperCase());
}


// Arrays can be classified as Homogeneous or Heterogeneous.

// Homogeneous Array
// An array containing values of the same data type.
let numbers: number[] = [10, 20, 30];

// Heterogeneous Array
// An array containing values of different data types.
let values = [10, 20, 30, "Vineeth"];

// Tuple
// A tuple allows us to define the type and order of each element.
let data: [number, string, string] = [123, "Harrish", "https"];

// JavaScript is a subset of TypeScript.