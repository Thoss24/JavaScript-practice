// Parent class
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Programmer extends Person {
    constructor(_name, _age, _experience) {
        super(_name, _age); // The super method basically just calls the logic from the Person class.

        this.experience = _experience; // we have then created another method exclusive to this class.
    }
};

class Engineer extends Programmer {
    constructor(_name, _age, _experience, _salary) {
        super(_name, _age, _experience)

        this.salary = _salary
    }
}



let person1 = new Person("James", 45);
let programmer1 = new Programmer("Dom", 56, 12);
let engineer1 = new Engineer("Tom", 26, 0, 20000)

console.log(person1.name); // logs an error because the experience property only belongs to the Programmer class.
console.log(programmer1.salary) // because we have used the extend method, the programmer class has inherited from the Person class.
console.log(engineer1.salary) // Again, we have used extends to create the engineer class that has inherited the properties from Programmer class, and also created a new property exclusive to the Engineer class. These are the basics of the extends method.