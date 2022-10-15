// iterators: are objects which define a sequence and potentially a return value upon its's termination
function rangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {  // next() is a function that accepts zero or one argument and returns an object with two properties (value: & done:)
           let result;
           if (nextIndex < end) {
            result = {value: nextIndex, done: false};  
            nextIndex += step;
            iterationCount++;
            return result;
           } 
           return {value: iterationCount, done: true};  // {value: iterationCount, done: true} are the properties being returned from the rangeIterator object
        }
    }
    return rangeIterator;
};

const it = rangeIterator(1, 10, 2);  // it === rangeIterator(start = 1, end = 10, step = 2)

let result = it.next();
while (!result.done) {
    console.log(result.value); // logs "1 3 5 7 9" this is because step === 2 
    result = it.next(); 
};

console.log(result.value) // logs "5" this is because 5 is the total amount of values inside the result object


// generator functions provide a better alternative to custom iterators like the above example

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCounter = 0;
    for (let i = start; i < end; i += step) {
        iterationCounter++
        return i
    }
    return iterationCounter
} // The behavior of this code is identical to the example above, however this version is much easier to write and read



// iterables
function* makeIterator() {
    yield 1;
    yield 2;
}

const itAgain = makeIterator();

for (let item in itAgain) {
    console.log(item)
}

console.log(itAgain[Symbol.iterator]() === itAgain); // true  

// This code demonstrates that generator(iterator) is an iterable object.
// with the iterator method returning the method itself, 
// with the itAgain object only being able to iterate once



// A function/generator method returns a new iterator/generator object
it[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
};
// the iterator/generator object "it" can iterate many times, the opposite to above example which can iterate only once

const iterable1 = {};

 iterable1[Symbol.iterator] = function* () {  //FYI: [Symbol.iterator] specifies the default iterator for an object
    yield 1;
    yield 2; 
    yield 3;
};

console.log([...iterable1]) // logs [1, 2, 3]



// user defined iterables
const myIterable = {
    *[Symbol.iterator]() {
        yield 1; 
        yield 2;
        yield 3;
    }
};

for (const value of myIterable) {
    console.log(value) // logs 1 2 3
};



// Built-in iterables
// String, Array, TypedArray, Map and Set are all built in iterables, because their prototype objects all have a Symbol.iterator method

// some statements and expressions expect iterables, for example the "for ... of" loop and "yield"

// for...of example
for (let value of ["a", "b", "c"]) {
    console.log(value)
}

// yield example
function* gen() {
    yield* ["d", "e", "f"];
}

console.log(gen().next()); // logs {value: "d" done: false}



