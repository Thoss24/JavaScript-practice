// basic syntax to create a class
class MyClass {

    constructor(name) {  // the constructor method is called to automatically by "new", so we can initialize the object here
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }
};

// then use new myClass() to create a new object with all the listed methods
let myClass = new MyClass("John"); // When new MyClass is called, a new object is created and the constructor runs with the given argument and assigns it to this.name

console.log(myClass.name) // John
myClass.sayHi() // John


// What is a class and how does it work
class User {
    constructor(name) {
        this.name = name;
    } sayHello() {console.log(this.name);}
}

console.log(User === User.prototype.constructor) // true

console.log(User.prototype.sayHello) // display's code of this method

console.log(Object.getOwnPropertyNames(User.prototype)) // [constructor, sayHello()]



// class expression. Just like functions, classes can be defined inside another expression, passed around, returned, assigned etc.
let User2 = class MyClass2 {
    sayHello() {
        console.log(MyClass2)
    }
};

new User2().sayHello()
console.log(MyClass)

// classes may also include getters/setters
class User3 {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 4) {
            console.log("too short");
            return;
        }
        this._name = value
    }
}

let user3 = new User3("John");
console.log(user3.name)  // John

let user4 = new User3("")
console.log(user4.name)  // too short


class User4 {

    [ "say" + "Hi"]() {
        console.log("hello")
    }
};

new User4().sayHi(); // hello


class User5 {
    name = "john";

    sayHelloAgain() {
        console.log(`Hello ${this.name} !`);
    }
}

new User5().sayHelloAgain() // hello john !
console.log(User5.prototype.name) // undefined, this is because "name" was defined on the individual User5 object


// the basic class syntax looks like so ..
class MyCLassEx {

    prop = value; // property

    constructor() { // constructor

    }

    // method() {}                 // method

    // get something() {}         // getter method
    // set something() {}     // setter method

    // [symbol.iterator]() {}    // method with computed name
}

// MyClass is a function, while methods, getters and setters are written to MyClass.prototype



class Polygon {
    constructor() {
        this.name = "Poly"
    }
};

let poly1 = new Polygon();

console.log(poly1.name) // Poly


// class expressions

// unnamed
let Rectangle = class {
    constructor( height, width) {
        this.height = height,
        this.width = width
    }
};

console.log(Rectangle.name) // logs "Rectangle"

// named
Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height,
        this.width = width
    }
};

console.log(Rectangle.name) // logs "Rectangle2"


// prototype methods
class Square {
    constructor(height, width) {
        this.height = height,
        this.width = width
    }

    get area() {
        return this.calcArea();
    };

    calcArea() {
        return this.height * this.width
    }

};

let size = new Square(20, 100);

console.log(size.area) // logs "2000"


// The "static" keyword defines a static method or property for a class.
// static methods are used to create utility functions for an application.
// static properties are useful for caches, fixed-configuration, or any other data you don't need to be replaced across instances.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName // logs "undefined"
p1.distance // logs "undefined"
p2.displayName // logs "undefined"
p2.distance // logs "undefined"

console.log(Point.displayName) // logs "point"
console.log(Point.distance(p1, p2)); // logs "7.0710678118654755"



// Binding this with prototype and static methods
// When a static or prototype method is called without a value for "this", the "this" value will be undefined inside the method.

class Animal {
    speak() {
        return this;
    }

    static eat() {
        return this;
    }
}

const obj = new Animal() 
console.log(obj.speak()) // logs the Animal object
const speak = obj.speak;
console.log(speak()) // logs "undefined"

console.log(Animal.eat()) // logs the Animal class
const eat = Animal.eat;
console.log(eat()) // logs "undefined"

function Animal2() {}


// the code below re-writes the above code using traditional function based syntax in non-strict mode
Animal2.prototype.speak2 = function () {
    return this;
}

Animal2.eat2 = function () {
    return this;
}

const obj2 = new Animal2();
const speak2 = obj.speak;
console.log(speak2()); // logs global object in non strict mode

const eat2 = Animal2.eat2;
console.log(eat2()); // logs global object in non strict mode



// public field declarations
// with the JavaScript field declaration syntax, the above example can be written as:
class Circle {
    height = 0;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get() {
        console.log(this.height) // logs "undefined" referencing private fields from outside the class is an error, as they can only be read or written from inside the class body
        console.log("hello") // logs "hello"
    }
}

let newClass = new Circle;
newClass.get() 



// the "extends" keyword, is used in class declarations or class expressions to create a class as a child of another class
class Animal3 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog extends Animal3 {  // the class "Dog", has been created as a child of "Animal3"
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} barks`)
    }
}

const dog = new Animal3("Buck");
const dog2 = new Dog("Buck");
dog.speak();  // logs "Buck makes a noise"
dog2.speak(); // logs "Buck barks"

// extends works the same for traditional functional based classes as well
function Animal4(name) {
    this.name = name;
}

Animal4.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`)
};

class Dog4 extends Animal4 {
    speak() {
        console.log(`${this.name} barks.`)
    }
}

const d = new Dog4("Ralph");
const dd = new Animal4("Ralph");
d.speak() // logs "Ralph barks."
dd.speak() // logs "Ralph makes a noise."

// classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, use Object.setPrototypeOf() instead.
const Animal5 = {
    speak() {
        console.log(`${this.name} makes a noise.`)
    }
};

class Dog5 {
    constructor(name) {
        this.name = name;
    }
};

Object.setPrototypeOf(Dog5.prototype, Animal5); // if the prototype of Dog5 is not set to equal the prototype of Animal5, ddd.speak() will throw an error.

const ddd = new Dog5("Jack")
ddd.speak()



// the "species" pattern enables you to override default constructors
// for example, when using methods such as Array.prototype.map(), that returns the default constructor, you want these methods to return a parent, instead of the MyArray object. Symbol.species lets you do this.
class MyArray extends Array {
    // overwrite species to the parent Array constructor
    static get [Symbol.species]() {return Array;}
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true