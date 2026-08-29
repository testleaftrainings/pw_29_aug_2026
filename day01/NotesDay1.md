🗂️ SESSION AGENDA 
------------------------------------------------------------------------------- 

1. 🚀 INTRODUCTION TO JAVASCRIPT 
-------------------------------------------------------------------------------- 
   • What is JavaScript? 
   • Where is JavaScript used? 
   • Why is JavaScript widely used? 

2. 🧪 JAVASCRIPT IN TEST AUTOMATION 
-------------------------------------------------------------------------------- 
   • JavaScript Environment & Execution 
   • Browser vs Node.js 
   • Understanding JavaScript execution 
   • Running JavaScript programs 

3. 📦 VARIABLES & DECLARATIONS 
-------------------------------------------------------------------------------- 
   • var, let, and const 
   • Variable naming conventions 
   • Scope basics 

4. 🔤 DATA TYPES 
-------------------------------------------------------------------------------- 
   • Understanding Data Types 
   • Primitive Data Types 
        → string 
        → number 
        → boolean 
        → undefined 
        → null 
        → symbol 
        → bigint 

🚀 LET'S GET STARTED!

```yaml






Notes:

Introduction to JavaScript:

1. About HTML-> structure, CSS -> colour and JavaScript -> Interactivity(Event Driven) look for clicks Differences
2 Static web application and dynamic web application
3. Evolution of JavaScript ECMAScript 1 "var" ---> ECMAScript ES6(2015) let and const --> ES8(2017)
4. Initial Days JS was Scripting language => Client Side Validation => UI validation is done avoid wastage resources
Server Validation => Username and Wrong Password hits the server checks for validation


In Browser Interpretation is done by JavaScript Engine V8 in chrome

In node.js the interpretation is done by JavaScript Engine V8


Code to check for Non-blocking I/O of JavaScript in console devtools of the browser
-----------------------------------------------------------------------------------

console.log("PlayButton")
setTimeout(()=>{console.log("Movie Played")},3000)
console.log("Advertisement")

---

Datatypes in JavScript :

1. numbers
2. string
3. boolean
4. undefined
5. null

---

Naming Conventions in JavaScript

=> File Names :
--------------

camelCase

Example:

loginPage.js
userProfile.js

=> Variables :
-------------

camelCase

Start with a lowercase letter

Example:

isActive
userName
totalAmount

=> Classes
-----------

PascalCase

Start with an uppercase letter

Example:

class LoginPage { }
class UserService { }



# 1. Declaration :

---

Declaration means creating a variable "x" and giving it a name using a keyword "var".

This is to tell JavaScript that a variable exist (creating memory space) in the name of x using the keyword "var".

🔹 No value is given yet and hence we term it as undefined.


var x;


**Analogy :** Declaration is like creating a new contact entry in your phone and saving the contact name.
👉 The contact exists, but no phone number is saved yet.

---

# 2. Assignment

---

Assignment means giving a value to an already declared variable.


x = 100;


**Analogy :** Assignment is like adding a phone number to an already created contact.
👉 Now the contact has a phone number.

---

# 3. Initialization

Initialization means declaring a variable and assigning a value to it at the same time.


var x = 100;




