// calculator functions

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length >= 1){
  return arr.reduce((a, b) => a + b);}
  return 0;
};

const multiply = function(arr) {
  let myArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0);
    myArr.push(arr[i])
  }
  return myArr.reduce((a, b) => a * b)
};

const power = function(one, two) {
	let result = Math.pow(one, two);
  return result
};

const factorial = function(num) {
  if (num === 0 || num === 1){
    return 1
  } else if (num === 2){
    return 2
  } else return num  * factorial(num - 1);
};

