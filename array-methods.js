// toString() expected output a string of comma separated array values
const fruit = ["banana", "apple", "orange", "pear"];
console.log(fruit.toString())

// join() joins all array elements into a string but the separator can be defined
const veg = new Array("potato", "cabbage", "turnip", "broccoli");
console.log(veg.join("*"))

// pop(), push(), shift(), unshift()
const animals = ["cat", "dog", "fish", "cow"];
let lastAnimal = animals.pop();
console.log(lastAnimal); // remove last array value

animals.push("sheep"); // push new value to end of array
console.log(animals);

console.log(animals.shift()); // remove first array value

animals.unshift("panda"); // add new value to start of array
console.log(animals)

// .length can append new element to end of array. Original array retains old value with new value added to the end.
animals[animals.length] = "chicken";
console.log(animals);

// delete() will completely delete an element from an array
delete(animals[4]);
console.log(animals);  // "chicken" has now been deleted

// concat() merges existing arrays, does not change existing arrays.
const myGirls = new Array("hannah", "sarah");
const myBoys = ["andrew", "harry"];
const myCats = new Array("blue", "smudge")

const children = myGirls.concat(myBoys, myCats, "dog"); //concat() can also take strings as arguments.

console.log(children);

//