// How to get current time and date
function getTimeAndDate() {
    let today = new Date();
    console.log(today);
}
getTimeAndDate();

// How to print current window
window.print();

// How to get date dd/mm/yy format. Remember getMonth is 0 indexed so need + 1.
function getDateOnly() {
    let date = new Date();
    let newDate = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    console.log(newDate);
}
getDateOnly();

// How to find area of a triangle
function findAreaOf() {
    const sideOne = parseInt(prompt(`Enter side 1`));
    const sideTwo = parseInt(prompt(`Enter side 2`));
    const sideThree = parseInt(prompt(`Enter side 3`));

    const sides = (sideOne + sideTwo + sideThree) / 2;

    const areaValue = Math.sqrt(sides * (sides - sideOne) * (sides - sideTwo) * (sides - sideThree));

    console.log(`The area of this triangle is ${areaValue}`);
}
findAreaOf(); 

// forEach() expected output "hello" "hell" repeated 4 times, equal in length to number of items in myArray
let myArray = ["apple", "mango", "pear", "grape"];

myArray.forEach(myFunction);

function myFunction() {
    console.log("Hello")
    console.log("Hell")
}

