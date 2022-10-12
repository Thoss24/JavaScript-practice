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

    method() {} // method

    get something() {} // getter method
    set something() {} // setter method

    [symbol.iterator]() {} // method with computed name
}

// MyClass is a function, while methods, getters and setters are written to MyClass.prototype