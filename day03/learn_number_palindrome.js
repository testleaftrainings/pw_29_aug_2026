
// ==================================================
// Number Palindrome
// ==================================================

// Requirement:
// Input  → 12121
// Output → The number is Palindrome
//
// Logic:
// 12121 % 10 → 1
// 1212  % 10 → 2
// 121   % 10 → 1
// 12    % 10 → 2
// 1     % 10 → 1


let input = 1212;

let temp = input;

let output = 0;


// ==================================================
// Reverse the Number
// ==================================================

while (input > 0) {

    // Get the last digit
    let remainder = input % 10;

    // Build the reversed number
    output = (output * 10) + remainder;

    // Remove the last digit
    input = Math.floor(input / 10);
}


// ==================================================
// Check Palindrome
// ==================================================

if (output === temp) {

    console.log("The number is Palindrome");

} else {

    console.log("The number is not a Palindrome");
}


// ==================================================
// Loop Execution
// ==================================================

// input = 12121 → remainder = 1 → output = 1
// input = 1212  → remainder = 2 → output = 12
// input = 121   → remainder = 1 → output = 121
// input = 12    → remainder = 2 → output = 1212
// input = 1     → remainder = 1 → output = 12121
// input = 0     → loop ends


// ==================================================
// Palindrome using for loop
// ==================================================

for (let input = 12121; input > 0; input = Math.floor(input / 10)) {

    // Logic can be implemented here
}

