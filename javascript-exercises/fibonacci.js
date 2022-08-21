// recursive solution
const fibonacci = function(val) {
    if (val < 2) return val;;
 
    return fibonacci(val -1) + fibonacci(val -2);
 };

 // return val if val < 2 is what stops the recursion and prevents a stack overflow.
 // fibonacci(val -1) + fibonacci(val -2) is just representing the value of val in code. i.e., fibonacci(7) is equal to fibonacci(6) + fibonacci(5). etc..