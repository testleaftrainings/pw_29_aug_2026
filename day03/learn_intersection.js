
// ==================================================
// Find Common Elements Between Two Arrays
// ==================================================

let arr1 = [1, 3, 2, 5, 7]; // length = 5
let arr2 = [3, 5, 8];       // length = 3

let resultArray = [];

// Store the common elements in resultArray

// arr1 index:  0  1  2  3  4
// arr1 value:  1  3  2  5  7
//
// arr2 index:  0  1  2
// arr2 value:  3  5  8

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

        // Compare elements from both arrays

        if (arr1[i] === arr2[j]) {

            resultArray.push(arr1[i]);
        }
    }
}

console.log(resultArray); // [3, 5]


// ==================================================
// Loop Execution
// ==================================================

// i = 0 → j = 0, 1, 2
// i = 1 → j = 0, 1, 2
// i = 2 → j = 0, 1, 2
// i = 3 → j = 0, 1, 2
// i = 4 → j = 0, 1, 2




















