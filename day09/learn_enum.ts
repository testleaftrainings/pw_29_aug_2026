// Enum is used to define a set of named constants.

// Example: Different environments in an application.
// UAT  → https://uat.com
// QA   → https://qa.com
// PROD → https://prod.com


// String Enum
// Each enum member is assigned a string value.

// Numeric Enum
// Each enum member is assigned a numeric value.

// Heterogeneous Enum
// An enum containing both string and numeric values.

// Create an enum named Environments.
enum Environments {

    // QA is assigned a string value.
    QA = "https://qa.com",

    // PROD is assigned a numeric value.
    PROD = 2,

    // UAT is assigned a numeric value.
    UAT = 3
}

// Access the value of the QA enum member using dot notation.
console.log(Environments.QA);