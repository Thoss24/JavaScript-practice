class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height; 
    }
    // Static methods are most commonly used to create utility functions, such as creating an object, cloning objects.
    // Static methods do not need to be replicated because they are fixed to the class.
 
 }

let square1 = new Square(8);
let square2 = new Square(9);

// console.log(square1.equals(square1, square2)) // This will log an error because a static method cannot be called on an instance of a class.

console.log(Square.equals(square1, square2)) // This logs "False", because the square root of 8 and 9 are not equal. Most importantly to note, is that the "static" equals() method can only be accessed from the class, not an instance of a class.