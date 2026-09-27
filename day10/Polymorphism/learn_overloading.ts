// Create a Calculator class
class Calculator {

    // Method overloading allows the same method name with different parameters
    // Method signature for adding two numbers
    add(a: number, b: number): number;

    // Method signature for adding three numbers
    add(a: number, b: number, c: number): number;

    // Implementation method that handles both two and three arguments
    add(a: number, b: number, c?: number): number {

        // Check whether the third argument is provided
        if (c !== undefined) {

            // Print the sum of three numbers
            console.log(a + b + c);

            // Return the sum of three numbers
            return a + b + c;
        }

        // Print the sum of two numbers
        console.log(a + b);

        // Return the sum of two numbers
        return a + b;
    }
}

// Create an object of the Calculator class
let calcOptions = new Calculator();

// Call the add method with two arguments
calcOptions.add(15, 35);

// Call the add method with three arguments
calcOptions.add(10, 20, 30);