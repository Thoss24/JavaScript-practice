// Polymorphism is the act of redefining a method inside a derived child class of a parent

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound")
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound(); // We can also access the makeSound method from the parent class using the super() keyword.
        console.log("Woof Woof"); // If the makeSound method was not re-defined inside the Dog class, it would use the makeSound method defined inside the Animal class instead.
    }
}



let animal1 = new Animal("Dom");
let animal2 = new Dog("James");

animal1.makeSound(); // logs "Generic animal sound"
animal2.makeSound(); // logs "Woof Woof"