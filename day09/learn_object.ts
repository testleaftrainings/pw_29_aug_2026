// Object with an explicit type definition.
// The object must follow the specified property structure.
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

// Print the complete employee object.
console.log(empDetails);


// Updating an existing property using dot notation.

// Update the employee name.
empDetails.empName = "karthik@gmail.com";


// Adding an optional property.

// Add employee availability to the object.
empDetails.empAvailability = true;


// Delete an optional property.

// Remove employee availability from the object.
delete empDetails.empAvailability;