import _ from 'lodash';
import './style.css';
import Icon from './angry-cat.png';

function component() {
    const element = document.createElement('div');

    element.textContent = _.join(["Hello", "webpack"], " ");
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon)

    console.log(Data);
    console.log(Notes) // should log the imported data from the xml and csv files
    

    return element
};

document.body.appendChild(component());