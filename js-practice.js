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

// a function which searches an object full of names and associated numbers. THe function will return the given name and number and exits the loop.
function search(name, book){
    for (let x of book){   // for...of loop to iterate through the array and return their values.
   let arrayName = x.name;  // A variable with value of whichever iterated name has been selected
   let arrayNumber = x.number;  // A variable with the corresponding number value of the name
   if (arrayName === name){  // An if statement which compares the iterated name value, with the name which has been passed in as an argument.
    para.textContent += `${arrayName} : ${arrayNumber}.`;  // Finally the value of arrayName and arrayNumber will be printed as text to the para variable, which is an empty paragraph.
    } 
   }
  }
    search('Chris', phonebook)  // the passed in values into the function


