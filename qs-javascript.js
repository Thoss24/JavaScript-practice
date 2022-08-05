// <p> element added, practicing JS, and DOM methods.
let paragraphOne = document.createElement('p');
paragraphOne.textContent = 'Hey I\'m red!';
document.querySelector('body').appendChild(paragraphOne)

// <h3> element with blue text.
let blueHeaderOne = document.createElement('h3');
blueHeaderOne.textContent = 'I\'m a blue h3!';
blueHeaderOne.style.color = "blue";
document.querySelector('body').appendChild(blueHeaderOne);

// <div> element with black border and pink background
let pinkBlackDiv = document.createElement('div');
pinkBlackDiv.style.backgroundColor = 'pink';
pinkBlackDiv.style.border = '1px solid black';
pinkBlackDiv.style.padding = '50px'
document.querySelector('body').appendChild(pinkBlackDiv);

// <h1> element inside of <div>
let imInDiv = document.createElement('h1');
imInDiv.textContent = "I\'m in a div";
document.querySelector('div').appendChild(imInDiv);

// <p> element inside of <div>
let meTooInDiv = document.createElement('p');
meTooInDiv.textContent = 'ME TOO!';
document.querySelector('div').appendChild(meTooInDiv);

// function for eventLIstener
function createAlert() {
    alert("Hello World!")
};

// button alert
const btn = document.querySelector('#btn');
btn.addEventListener('click', createAlert);

// second button
const btnTwo = document.querySelector('#btn-two');
btnTwo.addEventListener('click', () => {alert("Hello Again!");});