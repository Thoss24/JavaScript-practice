let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`  // the getter makes the fullName property readable
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ")  // the setter property makes the fullName property writable
    },
};

console.log(user.fullName)
console.log(user.name)


// another example of using getters/setters
   
const person = {
    name: "henry",
    surname: "help",
    language: "eng",
    get lang() {
        return this.language
    }
};

console.log(person.lang)

const person2 = {
    name: "john",
    surname: "doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

person2.lang = "swe";

console.log(person2.language)

// getters/setters can also be used to gain more control over operations, like so.

let user2 = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            alert("name too short");
            return;
        }
        this._name = value
    }
};

user2.name = "pete";
console.log(user2.name)

user2.name = ""; // alert: name too short