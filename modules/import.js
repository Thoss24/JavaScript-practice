import myName from "./import-export";
import {mySurname} from "./import-export";

function firstName() {
    const firstElement = document.createElement('div');

    firstElement.textContent = myName("Thomas");
    return firstElement;
};

document.body.appendChild(firstName());


function lastName() {
    const lastElement = document.createElement('div');

    lastElement.textContent = myName("Fogarty");
    return lastElement;
};

document.body.appendChild(lastName())
