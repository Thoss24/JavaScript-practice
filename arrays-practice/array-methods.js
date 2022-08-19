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

// splice() adds new elements to an array. first parameter is index to add new value, second parameter is the number of elements to remove.
const movies = new Array("harry potter", "star wars", "lord of the rings");
movies.splice(1, 0, "blade runner");
console.log(movies);

movies.splice(0, 1)
console.log(movies);

// slice() slices out piece of array into new array, first argument is starting index, second is ending index non-inclusive.
const piece = ["dog", "cat", "fish", "lizard"];
const myPiece = piece.slice(1, 3);

console.log(piece);
console.log(myPiece);

// toString() converts an array to a comma separated string.
const arrayToString = new Array("hello", "there", "nice", "to", "meet", "you");
const finalString = arrayToString.toString();
console.log(arrayToString);
console.log(finalString);

// map() method will do something to each item in a collection. here the elements in array2 were changed to upper case.
function toUpper(string) {
    return string.toUpperCase();
}

const array2 = new Array("cat", "dog", "fish", "cow");
const newCat = array2.map(toUpper);
console.log(array2);
console.log(newCat);

// filter() similar to map() expect a boolean is returned, if true the item is included in the array. The result will be an array that only contains strings starting with "L" or any other chosen value.
function filterL(tol) {
    return tol.startsWith("L")
}

const filterString = new Array("leopard", "Lemur", "lion", "zebra", "elephant");
const filterStringTwo = filterString.filter(filterL);

console.log(filterString);
console.log(filterStringTwo);

// for loop
const arrayLoop = new Array("hello", "there", "mr", "pants");

for (let i = 0; i < arrayLoop.length; i++){
    
    console.log(arrayLoop[i])
}

// traditional for loop is useful if we want to alter each iteration or a single iteration like below.
const cats = ["harry, ", " ed, ", " choco, ", " milk."];

let favCat = "I love my cats, "

for (let i = 0; i < cats.length; i++){
    if (i === cats.length-1){
        favCat += `and ${cats[i]}`
    } else {
        favCat += `${cats[i]}`
    }
}
console.log(favCat)

// for....of loop, is an easier way of iterating through an entire array the for loop ^ above, achieves the same result as the for...of.
const alpha = new Array("a", "b", "c", "d");
for (const bet of alpha){
    console.log(bet)
}