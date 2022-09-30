const Person = (name) => {
    const sayName = () => console.log(`My name is ${name}`);
    return {sayName}
}

const Nerd = (name) => {
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log(`nerd stuff`);
    return {sayName, doSomethingNerdy}
}

const jeff = Nerd('Jeff');

jeff.sayName(); // "My name is Jeff"
jeff.doSomethingNerdy(); // "nerd stuff"