// THIS KEYWORD IN A FUNCTION INVOCATION the execution is the global object

function sum(a, b) {
    console.log(this === window); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
}

// sum() is invoked as a function
// this in sum() is a global object (window)
sum(15, 16);  // => 31
window.myNumber; // => 20

// when sum(15, 16) is called, JavaScript automatically sets this keyword as the global object (window in a browser)

// When this keyword is used outside of any function scope (the topmost scope: global execution context), it also equals to the global object

console.log(this === window) // => true

this.myString = "Hello World";
console.log(window.myString) // Display's Hello World in console


// THIS IN A FUNCTION INVOCATION, STRICT MODE
// When strict mode is used it affects the execution context, making the this keyword to be undefined in a regular function invocation. The execution context is no longer the global object anymore.

function multiply(a, b) {
    'use strict'; // enable the strict mode
    console.log(this === undefined); // => true
    return a * b;
}

// Strict mode is active not only for in the current scope but all the inner scopes declared inside

function execute() {
    'use strict';

    function concat(str1, str2) {
        console.log(this === undefined); // => true
        return str1 + str2;
    }
}
