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

