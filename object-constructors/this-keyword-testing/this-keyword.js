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


// the this keyword is not the same in an inner function as it is in the outer function
// the context of the inner function (except arrow functions) depends only on it's own invocation type not the outer functions context
// to make the this keyword have the desired value, the inner function context must be modified with indirect invocation (.call(), apply()) or create a bound function (bind())

const numbers = {
    numberA: 5, 
    numberB: 10,

    sum: function() {
        console.log(this === numbers); // => true

        function calculate() {
            console.log(this === numbers); // => false
            return this.numberA + this.numberB;
        }

        // const calculate = () => {              // an arrow function is another way of achieving this
        //     console.log(this === numbers);
        //     return this.numberA + this.numberB
        // }

        return calculate()   // return calculate.call(this) executes calculate() as usual, but also modifies the context to a value specified as the first parameter
    }
}
numbers.sum() // NaN throws an error or type error due do the this keyword not having the desired effect in our inner function

// to solve this issue, the calculate() function must execute wth the same context as the numbers.sum() method, to access this.numberA and this.numberB
// one way to do this is to change the context of calculate.call(this) (an indirect invocation of a function)



