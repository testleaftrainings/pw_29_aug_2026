// Email ID is generally stored as a string.
let email: string = "vineeth@gmail.com";

// Mobile number can be represented as a number.
let mobile: number = 892544411;


// Union Type
// Union means OR — a variable can hold either one of the specified types.

// A variable can contain either a string OR a number.
let usernameField: string | number = "vineeth@gmail.com";

// The same variable can also contain a number.
usernameField = 8925411170;


// Type Alias
// A type alias allows us to give a name to a custom type.

// Create a type alias named 'usernameField'.
// It can contain either a number OR a string.
type UsernameField = number | string;


// Use the type alias for an email ID.
let emailID: UsernameField = "vineeth@gmail.com";

// Use the type alias for a mobile number.
let mobile1: UsernameField = 892544411;

// The same type alias can also be used for a string value.
let mobile2: UsernameField = "karthik@gmail.com";
