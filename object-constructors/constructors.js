function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ', ' + read
    }
}

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', '280 pages', 'have read.') 
console.log(hobbit.info())

console.log(hobbit.constructor)  // The new instance's prototype (hobbit) is assigned the prototype from the Book() constructor. hobbit is basically inheriting the prototype from the Book() constructor.
                                 
// In JavaScript you can create a function and add properties and methods on to that function's prototype property, and all instances of the function will inherit the function's properties and methods.

function Plant() {
    this.country = 'Mexico'
    this.isOrganic = true
}

Plant.prototype.showNameAndColor = function() {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function() {
    if (this.isOrganic)
    console.log("I am organic");
}

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

Fruit.prototype = new Plant ()

let aBanana = new Fruit("Banana", "Yellow")

console.log(aBanana.name) // Banana

console.log(aBanana.showNameAndColor())