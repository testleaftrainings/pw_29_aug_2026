// Promise and await

console.log("Code for Enter Username"); // Executes first

let enterPassword = new Promise((resolve) => {

    setTimeout(() => {

        console.log("Code for Enter Password"); // Executes after 5 seconds

        resolve(); // Resolves the Promise after password is entered

    }, 5000);
});

enterPassword.then(() => {

    console.log("Code for Click Login Button"); // Executes after Promise is resolved

});


// await - keyword used to wait for a Promise to be resolved
// await can be used only inside an async function
// Whenever a method returns a Promise, we can use await to wait for its completion

  