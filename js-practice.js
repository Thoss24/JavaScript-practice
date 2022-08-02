// How to get current time and date
function getTimeAndDate() {
    let today = new Date();
    console.log(today);
}
getTimeAndDate();


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

// new array both statements create a new array
const newArray = [78, 60, 67, 49, 92, 85];
const newArrayOne = new Array(30, 35, 25, 32, 13, 14);


// instanceof return true if an object is created by given constructor
// typeof newArray will return object because a JavaScript array is an object
let type = typeof newArray; 
console.log(type)
console.log(myArray instanceof Array);


// toString()
const fruit = ["banana", "apple", "orange", "pear"];
console.log(fruit.toString())
console.log(fruit)

// loop which prints content of array inside a list. createElement method was used to create the <li> element and append it to the pre-defined <ul> element. The value of each iteration of array was assigned to the <li> element and printed.
const myArrayTwo = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

for (const x in myArrayTwo){
    let point = document.createElement('li');  // point variable defined with value of <li> element
    point.textContent += myArrayTwo[x];   // The textContent method was used to assign the value of each iteration of myArrayTwo to the point variable which was already defined as the <li> element.
    list.appendChild(point);   // the point node (child element) was then appended to the parent node which was the <ul> element.
    console.log(point);
}

// do while. A do...while should be used when the loop needs to be executed at least once. Else use a while loop.
let v = 5;
do {
    v --;
    console.log(v);
} while (v > 1);

// while loop
let b = 5;
while (b > 1){
console.log(b);
b--;}

// A shorter while loop. THe code will stop when the condition is false.
let f = 5;
while (f) console.log(f--);

// for loop. The begin part has been skipped because we already have a variable "o" = 5;
let o = 5;
for (;o > 0; o--){
}
console.log(o)

// for loop to output even numbers from 2 to 10
for (let i = 2; i <= 10; i++){
    if (i % 2 === 0){
        alert(i)
    }
}

let j = 0;
while (j < 3) {
    alert(`number ${j} ! `);
    ++j;
}

// do...while loop which prompts user to enter number greater than 100. If not then it repeats the loop and prompt
let num;
do {
    num = prompt(`Enter a number greater than 100`, 0);
} while (num < 100 && num)  // whilst the number the user enters is below 100 and num is null, without && num the loop would not stop if the user clicked cancel. Because if num is null then num < 100 is true.

//

