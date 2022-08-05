// <p> element added, practicing JS, and DOM methods.
let paragraphOne = document.createElement('p');
paragraphOne.textContent = 'Hey I\'m red!';
document.querySelector('body').appendChild(paragraphOne)

// <h3> element with blue text.
let blueHeaderOne = document.createElement('h3');
blueHeaderOne.textContent = 'I\'m a blue h3!';
blueHeaderOne.style.color = "blue";
document.querySelector('body').appendChild(blueHeaderOne);