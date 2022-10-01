// Using an IIFE ensures that variables are only accessible within the scope of the defined function

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div
    }
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2) // 4