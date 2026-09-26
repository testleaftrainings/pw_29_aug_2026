// Intersection Type
// Intersection is represented using the '&' symbol.
// It combines multiple types into a single type.
// The resulting type must contain all the properties from both types.


// Create a type for username details.
type Username = {

    // Username must be a string.
    username: string;
};


// Create a type for password details.
type Password = {

    // Password must be a number.
    password: number;
};


// Combine Username and Password using Intersection.
// Login type must contain both username and password.
type Login = Username & Password;


// Create an object using the Login type.
let loginDetails: Login = {

    // Provide the username property.
    username: "vineeth@gmail.com",

    // Provide the password property.
    password: 1234
};