class Square {
    constructor(_width) {
        this.height = _width;
        this.width = _width;
    }

    get area() {
        return this.height * this.height // The getter behaves the same as a function. Here we are using the get method to access the instance properties and return a result.
    }

    set area(area) {
        this.width = Math.sqrt(area); // We need the setter so that the area can be assigned
        this.height = this.width; // If you tried to assign a value to area in a new instance of Square without the setter, an error would be thrown. Comment out the set area() code to see the result.
    }

}

let square1 = new Square();
square1.area = 25;
console.log(square1.area)
