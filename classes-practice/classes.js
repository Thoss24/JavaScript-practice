
/* 
    Class -> Object

    Instance Properties: What they have

        - name
        - age
        - height

    Instance Methods: what they do

        - talk
        - run
        - jump
*/

class Rectangle {
    // constructor is used to setup the object
    // The constructor is being ran when the object is created
    constructor (_width, _height, _color) {
        console.log("The Rectangle is being created");  // these are the instance properties!!

        this.width = _width;
        this.height = _height;
        this.color = _color; 
    }

    getArea() {
        return this.width * this.height  
    }
    /*
    These are the instance methods!! 
    The instance methods use the instance properties defined by the constructor to give different results based on the objects being used.
    i.e., getArea() returns a different result based on the data passed into the new Rectangle class. As seen below.
    Basically the instance properties are the generic data created for each object and the instance methods use that data to do something.
    */
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(10, 5, "red");


console.log(myRectangle1.getArea())
console.log(myRectangle2.getArea())