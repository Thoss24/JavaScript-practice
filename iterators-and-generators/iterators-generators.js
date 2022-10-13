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